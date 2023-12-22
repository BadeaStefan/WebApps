const apiKey = "b696b512ffc2d149cfd674ba2672d640";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const sBox = document.querySelector(".search input");
const sBtn = document.querySelector(".search button");
const wIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        wIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        wIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        wIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        wIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        wIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

sBtn.addEventListener("click", () => { checkWeather(sBox.value); })
   
