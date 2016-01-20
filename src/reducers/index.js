var constants = require('../constants/ActionTypes.js');
var combineReducers = require('redux').combineReducers;
var persistence = require('../persistence.js');
var _ = require('lodash');


function activeSearches(state, action){
  if (typeof(state) === 'undefined' ){
    return [];
  }
  if (action.type == constants.CREATE_SEARCH){
    // copy our existing active searches array so we can return the new state independent 
    // of the old
    var newSearches = _.map(state, function(search) { return _.assign({}, search); });
    // append our new search, this is the actual desired activity
    newSearches.push({started: action.started, name: 'New Search'});
    // done, give back our new array containing all the searches plus the newly 
    // created one
    return newSearches;
  }
  // if we get here, we've done nothing and are just passing back the state
  // as it was provided to us
  return state;
}

var combinedReducers = combineReducers({ activeSearches: activeSearches });

module.exports = function (state, action){
  // we handle the 'delete save' behavior at the top level because it's action is
  // explicitly to reset the _whole state_ of the app, where as the reducers 
  // added through combinedReducers are specific to keys within the state object
  if (action.type === constants.CLEAR_SAVE){
    // delete any saved data we have
    persistence.deleteGameData();
    // set state to undefined so all of our other reducers can reinitialize the state
    // accordingly
    state = undefined;
  }
  return combinedReducers(state, action);
};
