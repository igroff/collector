var React = require('react');

var ClearSaveButton = React.createClass({
  clearSave: function(e){ 
    this.props.deleteSave();
  },
  render: function(props){
    return ( <button onClick={this.clearSave}>Clear Save</button> );
  }
});

module.exports = ClearSaveButton
