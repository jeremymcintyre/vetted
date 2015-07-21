var React = require('react');
var InfoBar = require('./InfoBar');
var Button = require('./Button');
var Router = require('react-router');
var { Link } = Router;


var AddActivity = React.createClass({

  getDefaultProps () {
    return {
      nameMaxLength: 40,
      descriptionMaxLength: 120
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

  buildStateObject (event, inputName) {
    var maxLength = this.props[ inputName + 'MaxLength' ],
        charsRemaining = maxLength - event.target.value.length,
        stateKey = inputName + 'Length',
        stateObject = {
          charsRemaining: charsRemaining,
          countClass: this.charCountClass(charsRemaining)
        };
    stateObject[stateKey] = maxLength - charsRemaining;

    return stateObject;
  },

  handleNameState (event) {
    this.setState(this.buildStateObject(event, 'name'));
  },

  handleDescriptionState (event) {
    this.setState(this.buildStateObject(event, 'description'));
  },

  charCountClass (charsRemaining) {
    if (charsRemaining < 10)
      return "low";
    else if (charsRemaining < 20)
      return "getting-lower";
    else if (charsRemaining < 40)
      return "getting-low";
  },

  handleClick () {
    if (this.state.nameLength && this.state.descriptionLength)
      console.log("Store this to be saved at the end of the AddActivity flow");
  },

  render () {
    var buttonEnabled =
      (this.state.nameLength && this.state.descriptionLength) ?
      true : false;

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
                 onChange={ this.handleDescriptionState } />
          <div id="char-count" className={ this.state.countClass }>
            { this.state.charsRemaining }
          </div>
        </form>
        <Button
          handleClick={this.handleClick}
          className={ 'progress-button' + (buttonEnabled ? '' : ' inactive') }>
          { buttonEnabled ? <Link to="ChooseFriendsForActivity">Next</Link> : 'Next' }
        </Button>
      </div>
    )
  }
});

module.exports = AddActivity;