// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var log = require('simplog');

global.debug = true;

var SearchButton = React.createClass({
  startSearch: function(e){
    log.debug("starting search");
  },
  render: function(props){
    return (
     <div>
       <input type="button" onClick={this.startSearch} value="Start Input Search"/>
       <button onClick={this.startSearch}>Start Search</button> 
     </div>
    );
  }
});

ReactDOM.render(
  <div>
    <h1>Hello, world! And Stuff. And other Things.</h1>
    <SearchButton/>
  </div>,
  document.getElementById('example')
);
