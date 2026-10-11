const apikey="f2464f5f74ee25468aefda92e3539abf";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const responce = await fetch(apiURL + city +`&appid=${apikey}`);

    if(responce.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
var data = await responce.json();

    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0] .main == "Clouds")
    {
        weatherIcon.src = "images/cloud.png.png";
    }
    else if(data.weather[0] .main == "Clear")
    {
        weatherIcon.src = "images/sun.png.png";
    }
    else if(data.weather[0] .main == "Drizzle")
    {
        weatherIcon.src = "images/drizzele.png.png";
    }
else if(data.weather[0] .main == "Rain")
    {
        weatherIcon.src = "images/raining.jpg.jpg";
    }
    else if(data.weather[0] .main == "Mist")
    {
        weatherIcon.src = "images/icon.png.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";

    }

    
}

searchBtn.addEventListener("click", ()=>{
         checkWeather(searchBox.value);
    })

