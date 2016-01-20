var React = require('react');

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
module.exports = StartSearchButton;
