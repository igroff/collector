var React = require('react');
var _     = require('lodash');

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

module.exports = SearchInfoList
