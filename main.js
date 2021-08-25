document.getElementById("btn").addEventListener("click", function() {
    const inputEl = document.getElementById("input");
    const cityEl = document.getElementById("city");
    const countryEl = document.getElementById("country");
    const humidityEl = document.getElementById("humidity");
    const temperatureEl = document.getElementById("temperature");
    const descriptionEl = document.getElementById("description");
    const location = inputEl.value;
    const apiKey = "6229bc87ad95814b38b8e5b919b16900";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(parseFloat(data.main.temp) - 273);
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const city = data.name;
        const country = data.sys.country;
        cityEl.innerText = city;
        countryEl.innerText = country;
        humidityEl.innerText = humidity;
        temperatureEl.innerText = temperature;
        descriptionEl.innerText = description;
    });
});