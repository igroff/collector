// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var log = require('simplog');
var persist = require('./persistence.js');

global.debug = true;
var gameState = persist.loadGameData();

var SearchButton = React.createClass({
  startSearch: function(e){
    log.debug("starting search");
    this.props.state.activeSearches.push({"new":"search"});
    persist.saveGameData(gameState);
  },
  render: function(props){
    return (
       <button onClick={this.startSearch}>Start Search</button> 
    );
  }
});

ReactDOM.render(
    <div>
      <h1>Howdy Bitches!</h1>
      <SearchButton state={gameState}/>
    </div>
  , document.getElementById('example')
);

