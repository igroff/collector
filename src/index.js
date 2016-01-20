// main.js
global.debug = true;
var React = require('react');
var ReactDOM = require('react-dom');
var log = require('simplog');
var persist = require('./persistence.js');
var _ = require('lodash');
var actions = require('./actions');
var store = require('./store');
var connect = require('react-redux').connect
var Provider = require('react-redux').Provider;
var StartSearchButton = require('./components/start-search-button');
var SearchInfoList = require('./components/search-info-list');
var ClearSaveButton = require('./components/clear-save-button');

StartSearchButton = connect(undefined, {createSearch:actions.createSearch})(StartSearchButton);
SearchInfoList = connect(function(state){ return {searches: state.activeSearches}; })(SearchInfoList);
ClearSaveButton = connect(undefined, {deleteSave: actions.deleteSave})(ClearSaveButton);

store.subscribe(function(){
  persist.saveGameData(store.getState());
});

// this is a seemingly bullshit component that's needed for the react-redux provider
// to be happy (it requires only a single top level component be presented to it)
var Application = React.createClass({
  render: function(){
    return (
      <div>
        <SearchInfoList />
        <StartSearchButton/>
        <p><ClearSaveButton/></p>
      </div>
    );
  }
});

ReactDOM.render(
    <Provider store={store}>
      <Application/>
    </Provider>
  , document.getElementById('example')
);

