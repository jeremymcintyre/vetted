var React = require('react');
var Router = require('react-router');
var { Link } = Router;

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
      return notes;
  },

  render () {
    var notes = this.props.params.notes;
    return (
      <div>
        <Link to={"/activities/" + this.props.params.name} onClick={ this.toggleShow }>
          <div>{ this.props.params.name }</div>
        </Link>
        <div>{ this.renderNotes(notes) }</div>
      </div>
    )
  }
});

module.exports = Activity;