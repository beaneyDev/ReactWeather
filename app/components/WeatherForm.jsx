var React = require('react');
var ReactDOM = require('react-dom');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0) {
      this.props.onSearch(null, location);
    } else {
      this.props.onSearch("No characters entered.", null)
    }
  },
  render: function () {
    var submissionFunction = this.onFormSubmit;
    return (
      <div>
        <form onSubmit={submissionFunction}>
          <input type='search' ref='location' placeholder="Search weather by city"></input>
          <button className="hollow expanded button">Get weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
