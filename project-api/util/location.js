const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

async function getCoordsForAddress(address) {
  if (address.includes('Empire State')) {
    return {
      lat: 40.7484445,
      lng: -73.9878584
    };
  } else if (address.includes('Marienplatz')) {
    return {
      lat: 48.1373932,
      lng: 11.5732598
    }
  } else {
    return {
      lat: 31.4036957,
      lng: 33.9579961
    }
  }
  // const response = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}`
  // );

  // const data = response.data;

  // if (!data || data.status === 'ZERO_RESULTS') {
  //   const error = new HttpError(
  //     'Could not find location for the specified address.',
  //     422
  //   );
  //   throw error;
  // }

  // const coordinates = data.results[0].geometry.location;

  // return coordinates;
}

module.exports = getCoordsForAddress;
