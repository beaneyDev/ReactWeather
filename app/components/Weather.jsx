var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      weatherMessage: "Tyoe a location in to load your weather."
    };
  },
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    this.setState({ isLoading: true })

    //Create a reference to this to pass into the closure.
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      //Call was successful and returned a temperature, set the state which calls render.
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false
      })
    })
  },
  render: function () {
    //Initial setup, creating a reference to a function you can pass to the search form.
    var handleSearch = this.handleSearch;

    //ES6 destructuring of a JS object into 3 meaningful variables.
    var {location, temp, isLoading} = this.state;

    //Private function to handle the creation of a message based on the state.
    function renderMessage () {
      if(isLoading) {
        return (
          <h1>Loading</h1>
        )
      } else if (temp && location) {
        return (
          <WeatherMessage location={location} temp={temp}></WeatherMessage>
        )
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={handleSearch}></WeatherForm>
        { renderMessage() }
      </div>
    )
  }
})

module.exports = Weather;
