var React = require('react');
var ReactDOM = require('react-dom');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0) {
      this.props.onSearch(location);
    };
  },
  render: function () {
    var submissionFunction = this.onFormSubmit;
    return (
      <div>
        <form onSubmit={submissionFunction}>
          <input type='text' ref='location' placeholder="Enter city name"></input>
          <button>Get weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
