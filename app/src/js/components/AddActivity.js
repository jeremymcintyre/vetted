var React = require('react');
var InfoBar = require('./InfoBar');

var AddActivity = React.createClass({

  getInitialState () {
    return {
      charsRemaining: "",
      countClass: ""
    }
  },

  countLength (event) {
    var inputId = event.target.id,
        inputLength = event.target.value.length,
        maxLength,
        charsRemaining;

    if (inputId === "activity-name-input") {
      maxLength = 40;
    }
    else if (inputId === "activity-description-input") {
      maxLength = 120;
    }

    charsRemaining = maxLength - inputLength;

    this.setState({
      charsRemaining: charsRemaining,
      countClass: this.charCountClass(charsRemaining)
    });
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
                 onFocus={ this.countLength }
                 onChange={ this.countLength } />
          <textarea id="activity-description-input"
                 type="text"
                 placeholder="What's cool about it?"
                 onFocus={ this.countLength }
                 onChange={ this.countLength }
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