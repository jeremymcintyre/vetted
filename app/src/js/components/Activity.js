var React = require('react');
var Router = require('react-router');

var Activity = React.createClass({
  mixins: [ Router.State ],

  getInitialState () {
    return {
      showNotes: false
    }
  },

  toggleShow () {
    this.setState({
      showNotes: !this.state.showNotes
    });

    this.renderNotes();
  },

  renderNotes (notes) {
    if (this.state.showNotes)
      return <div className="note">{notes}</div>;
  },

  render () {
    var notes = this.props.params.notes;
    return (
      <div className="activity" onClick={ this.toggleShow }>
        <div>{ this.props.params.name }</div>
        { this.renderNotes(notes) }
      </div>
    )
  }
});

module.exports = Activity;

