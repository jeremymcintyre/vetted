var React = require('react');

var SideBarMenu = React.createClass({
  getInitialState () {
    return {
      visible: false
    }
  },

  toggle () {
    this.setState({visible: !this.state.visible});
  },

  buildClassList(alignment) {
    return (this.state.visible ? "visible " : "") + alignment;
  },

  renderChildren (children) {
    return children.map((child) => {
      return <div className="sidebar-item">{child}</div>
    });
  },

  render () {
    var alignment = this.props.alignment;
    var classList = this.buildClassList(alignment);
    return (
      <div className="sidebar-menu">
        <div onClick={this.props.offMenuClick} className={classList} id="screen">
        </div>
        <div className={classList}>
          {this.renderChildren(this.props.children)}
        </div>
      </div>
    )
  }
});

module.exports = SideBarMenu;