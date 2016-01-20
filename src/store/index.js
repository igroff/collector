var createStore = require('redux').createStore;
var rootReducer = require('../reducers');
var persist = require('../persistence.js');

module.exports = createStore(rootReducer, persist.loadGameData());
