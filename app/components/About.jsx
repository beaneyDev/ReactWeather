var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center">About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl sapien, ultrices ac mollis scelerisque, ornare at magna. Curabitur varius ex lacinia finibus venenatis. Maecenas leo metus, tincidunt non tincidunt a, suscipit et magna. Nulla finibus efficitur magna ac fermentum. Curabitur et porttitor purus. Phasellus commodo bibendum enim eget ornare. Cras rhoncus nulla eu enim malesuada suscipit. Curabitur porta dui at hendrerit dapibus.</p>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - this was the JS Framework I used.
          </li>
          <li>
            <a href='https://github.com'>Github</a>
          </li>
          <li>
            <a href='http://openweathermap.org'>Open Weather Map</a>
          </li>
        </ol>
    </div>
  )
};

module.exports = About;
