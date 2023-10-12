const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2859b63b3emsh2554425a19f634cp102fa1jsn10a523f6baf6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
	cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    });
};

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Dhaka")

const getWeather1 = () => {
	
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangladesh",
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp1.innerHTML = response.temp;
      feels_like1.innerHTML = response.feels_like;
      humidity1.innerHTML = response.humidity;
      min_temp1.innerHTML = response.min_temp;
      max_temp1.innerHTML = response.max_temp;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees1.innerHTML = response.wind_degrees;
      sunrise1.innerHTML = response.sunrise;
      sunset1.innerHTML = response.sunset;
    });
};
getWeather1()

const getWeatherPakistan = () => {
	
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pakistan",
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp2.innerHTML = response.temp;
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      min_temp2.innerHTML = response.min_temp;
      max_temp2.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees2.innerHTML = response.wind_degrees;
      sunrise2.innerHTML = response.sunrise;
      sunset2.innerHTML = response.sunset;
    });
};
getWeatherPakistan()

const getWeatherCanada = () => {
	
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=canada",
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      min_temp3.innerHTML = response.min_temp;
      max_temp3.innerHTML = response.max_temp;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees3.innerHTML = response.wind_degrees;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
    });
};
getWeatherCanada()