var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h2>It is {temp} in {location}</h2>
    </div>
  )
}

module.exports = WeatherMessage;
