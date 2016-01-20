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

store.subscribe(function(){
  persist.saveGameData(store.getState());
});


var StartSearchButton = React.createClass({
  startSearch: function(e){
    this.props.createSearch(new Date().getTime());
  },
  render: function(props){
    return (
       <button onClick={this.startSearch}>Start Search</button> 
    );
  }
});

StartSearchButton = connect(undefined, {createSearch:actions.createSearch})(StartSearchButton);

var SearchInfo = React.createClass({
  render: function(){
    return (
      <span>Started At: {this.props.search.started}</span>
    );
  }
});

var SearchInfoList = React.createClass({
  render: function(){
    var searchInfos = _.map(this.props.searches, function(search, index){
      return(
        <li key={index}><SearchInfo search={search}/></li>
      );
    });
    return (
      <div>
        <ul>
          {searchInfos}
        </ul>
      </div>
    );
  }
});
SearchInfoList = connect(function(state){ return {searches: state.activeSearches}; })(SearchInfoList);

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

var ClearSaveButton = React.createClass({
  clearSave: function(e){ 
    this.props.deleteSave();
  },
  render: function(props){
    return ( <button onClick={this.clearSave}>Clear Save</button> );
  }
});

ClearSaveButton = connect(undefined, {deleteSave: actions.deleteSave})(ClearSaveButton);

ReactDOM.render(
    <Provider store={store}>
      <Application/>
    </Provider>
  , document.getElementById('example')
);

