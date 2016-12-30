let React = require('react');

let WeatherMessage = ({temp, location})/*DESTRUCTURING PROPS*/  => {
    return (
         <p>It's {temp} degrees in {location}</p>
    )
}

module.exports = WeatherMessage;
