var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=07d6ff0482c907bf041ce519ca0b7068&units=metric';

module.exports = {
  getTemp: function (location) {
    //Creates the promise of a web response, and handles errors properly promising to return either a meaningful failure message or a temperature.
    var encodedLocation = encodeURIComponent(location);

    //ES6 swanky string interpolation.
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //Use 'axios' get which returns a promise.
    return axios.get(requestUrl).then(function (res) {
      //Weather API sometimes doesn't properly fail but sends back a custom failure message, this is handled here.
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      //This is if a 'proper' error is returned from the server.
      throw new Error(res.data.message);
    })
  }
}
