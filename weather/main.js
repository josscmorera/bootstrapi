let form = document.querySelector('form');
let cityName = document.querySelector('#cityName');
let temperature = document.querySelector('#temperature');
let wind = document.querySelector('#wind');
let description = document.querySelector('#description');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let city = document.querySelector('#city').value;
  let encodedCity = encodeURI(city);

  fetch(`https://goweather.herokuapp.com/weather/${encodedCity}`)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = city;
      temperature.textContent = data.temperature;
      wind.textContent = data.wind;
      description.textContent = data.description;
    })
    .catch(error => console.error(error));
});

