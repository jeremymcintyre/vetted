var React = require('react');

var IconButton = React.createClass({
  buildClassList (props) {
    var classList = 'icon-button';
    if (props)
      classList += (' ' + props);

    return classList;
  },

  render () {
    var classes = this.buildClassList(this.props.classList);
    return (
      <div onClick={this.props.handleClick} className={ classes }>{ this.props.icon }</div>
    );
  }
});

module.exports = IconButton;