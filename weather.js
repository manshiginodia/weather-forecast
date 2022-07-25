//Complete the Weather API Backend part using openweathermap api

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = new Date();

function fetchWeather()
{
    var cityTextBox = document.getElementById('searchInput').value;
    var apiID = '434f0505a9fc5d21aef8618ecc67c308';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTextBox}&appid=${apiID}`;
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        console.log(data)
        document.querySelector('.city').innerHTML= data.name +" , "+ data.sys.country;
        document.querySelector('.date').innerHTML = weekDays[today.getDay()] + " " + today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear();
        document.querySelector('.temp').innerHTML =`${Math.round(data.main.temp-273.15)}°c`;
        document.querySelector('.weather').innerHTML=data.weather[0].main;
        document.querySelector('.hi-low').innerHTML =`${Math.round(data.main.temp_min-273.15)}°c / ${Math.round(data.main.temp_max-273.15)}°c`;
    })  
    .catch(() => {
        document.querySelector('.city').innerHTML = "Not found";
        document.querySelector('.date').innerHTML = '';
        document.querySelector('.temp').innerHTML = '';
        document.querySelector('.weather').innerHTML = '';
        document.querySelector('.hi-low').innerHTML = '';
    })  
}