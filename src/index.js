// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var log = require('simplog');
var persist = require('./persistence.js');
var _ = require('lodash');

global.debug = true;
var gameState = persist.loadGameData();

var StartSearchButton = React.createClass({
  startSearch: function(e){
    log.debug("starting search");
    this.props.state.activeSearches.push({started: new Date().getTime()});
    persist.saveGameData(gameState);
  },
  render: function(props){
    return (
       <button onClick={this.startSearch}>Start Search</button> 
    );
  }
});

var SearchInfo = React.createClass({
  render: function(){
    return (
      <span>Started At: {this.props.search.started}</span>
    );
  }
});

var SearchInfoList = React.createClass({
  getInitialState: function(){
    return {searches: []};
  },
  componentDidMount: function(){
    this.setState({searches: this.props.searches});
  },
  render: function(){
    var searchInfos = _.map(this.state.searches, function(search, index){
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

var ClearSaveButton = React.createClass({
  clearSave: function(e){ 
    persist.deleteGameData();
  },
  render: function(props){
    return ( <button onClick={this.clearSave}>Clear Save</button> );
  }
});

ReactDOM.render(
    <div>
      <SearchInfoList searches={gameState.activeSearches}/>
      <StartSearchButton state={gameState}/>
      <p><ClearSaveButton/></p>
    </div>
  , document.getElementById('example')
);

