// const src = document.querySelector(".search");
// const cont = document.querySelector(".container");

// src.addEventListener("click", () => {
//   cont.classList.add("active");
// });

const apiKey = "d3305fe01d037f10f7832c8de86bea0a";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/resources/images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/resources/images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/resources/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/resources/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/resources/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
