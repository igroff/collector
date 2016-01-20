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
  return state;
}

module.exports = function (state, action){
  if (action.type === constants.CLEAR_SAVE){
    // delete any saved data we have
    persistence.deleteGameData();
    // set state to undefined so all of our other reducers can reinitialize the state
    // accordingly
    state = undefined;
  }
  return combineReducers({ activeSearches: activeSearches })(state, action);
};
