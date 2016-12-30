var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d4b4a8b1c2cf83970d1a6464ccb2bf71&units=metric';

// d4b4a8b1c2cf83970d1a6464ccb2bf71

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURI(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    console.log(axios.get(requestUrl));

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
