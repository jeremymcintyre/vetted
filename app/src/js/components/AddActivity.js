var React = require('react');
var InfoBar = require('./InfoBar');

var AddActivity = React.createClass({

  getDefaultProps () {
    return {
      maxNameLength: 40,
      maxDescriptionLength: 120
    }
  },

  getInitialState () {
    return {
      charsRemaining: "",
      countClass: "",
      nameLength: 0,
      descriptionLength: 0
    }
  },

  buildStateObject (event, maxLength, stateKey) {
    var charsRemaining = maxLength - event.target.value.length,
        stateObject = {
          charsRemaining: charsRemaining,
          countClass: this.charCountClass(charsRemaining)
        };
    stateObject[stateKey] = charsRemaining;
    return stateObject;
  },

  handleNameState (event) {
    var maxLength = this.props.maxNameLength,
        stateKey = 'nameLength';

    this.setState(
      this.buildStateObject(event, maxLength, stateKey)
    );
  },

  handleDescriptionState (event) {
    var maxLength = this.props.maxDescriptionLength,
        stateKey = 'descriptionLength';

    this.setState(
      this.buildStateObject(event, maxLength, stateKey)
    );
  },

  charCountClass (charsRemaining) {
    if (charsRemaining < 10) {
      return "low";
    }
    else if (charsRemaining < 20) {
      return "getting-lower";
    }
    else if (charsRemaining < 40) {
      return "getting-low";
    }
    else {
      return "";
    }
  },

  render () {
    return (
      <div>
        <InfoBar infoText="Describe activity" />
        <form id="activity-form">
          <input id="activity-name-input"
                 type="text"
                 placeholder="Name this thing"
                 onFocus={ this.handleNameState }
                 onChange={ this.handleNameState } />
          <textarea id="activity-description-input"
                 type="text"
                 placeholder="What's cool about it?"
                 onFocus={ this.handleDescriptionState }
                 onChange={ this.handleDescriptionState }
                 selectionStart={120} />
          <div id="char-count" className={ this.state.countClass }>
            { this.state.charsRemaining }
          </div>
          <input type="submit" name="Next" />
        </form>
      </div>
    )
  }
});

module.exports = AddActivity;