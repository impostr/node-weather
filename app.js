let request = require('request');
const argv = require('yargs').argv;
require('dotenv').config();

let apiKey = 'a3936c50fcc3c57a630815f431f6bfe4';
let city = argv.c || 'new delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
