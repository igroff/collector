var constants = require('../constants/ActionTypes.js');

function createSearch(startTime){
  return { type: constants.CREATE_SEARCH, started: startTime };
}

function deleteSave(state){
  return { type: constants.CLEAR_SAVE };
}

module.exports.createSearch = createSearch;
module.exports.deleteSave = deleteSave;

