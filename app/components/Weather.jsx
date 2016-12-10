var React = require('react');

//Sub components
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');

//API
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      weatherMessage: "Tyoe a location in to load your weather."
    };
  },
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function(error, location) {
    if(error != null) {
      this.setState({
        isLoading: false,
        errorMessage: error
      });

      return;
    }

    this.setState({
      isLoading: true,
      errorMessage: undefined
     })

    //Create a reference to this to pass into the closure.
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      //Call was successful and returned a temperature, set the state which calls render.
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  },
  render: function () {
    //Initial setup, creating a reference to a function you can pass to the search form.
    var handleSearch = this.handleSearch;

    //ES6 destructuring of a JS object into 3 meaningful variables.
    var {location, temp, isLoading, errorMessage} = this.state;

    //Private function to handle the creation of a message based on the state.
    function renderMessage () {
      if(isLoading) {
        return (
          <h3 className="text-center">Fetching Weather</h3>
        )
      } else if (temp && location) {
        return (
          <WeatherMessage location={location} temp={temp}></WeatherMessage>
        )
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        debugger;
        return (
          <ErrorModal message={errorMessage}></ErrorModal>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={handleSearch}></WeatherForm>
        { renderMessage() }
        { renderError() }
      </div>
    )
  }
})

module.exports = Weather;
