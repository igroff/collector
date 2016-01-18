var _ = require('lodash'); 
var log = require('simplog');

var storageKey = 'thisisastoragekeyforcollectordishshek2ihs';

log.info("loading persistence module");
function createDefaultGameData(){
  log.debug("creating default game data");
  var o = { activeSearches: [] };
  return o;
}
function loadGameData(){
  log.debug("loading game data");
  var o = global.localStorage.getItem(storageKey);
  try{
    o = JSON.parse(o);
    if (_.isEmpty(o)){
      o = createDefaultGameData();
    } else {
      log.debug("game data loaded");
      log.debug(o);
    }
  } catch(e) {
    log.error("unable to load game data " + e.message);
    log.debug(e.stack);
    o = createDefaultGameData();
  }
  return o;
}

function saveGameData(o){
  log.debug("saving game data");
  global.localStorage.setItem(storageKey, JSON.stringify(o));
}

function deleteGameData(){
  log.debug("deleting game data");
  global.localStorage.removeItem(storageKey);
}

module.exports.loadGameData = loadGameData;
module.exports.saveGameData = saveGameData;
module.exports.deleteGameData = deleteGameData;
