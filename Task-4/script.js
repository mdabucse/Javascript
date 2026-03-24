const apiKey = "d3ee67565f104733ab661314262403"; // for testing purpose

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");

// Click event
searchBtn.addEventListener("click", getWeather);

// Enter key support
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});

function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Error handling (WeatherAPI style)
            if (data.error) {
                throw new Error(data.error.message);
            }

            temp.innerText = data.current.temp_c + " °C";
            humidity.innerText = data.current.humidity + " %";
            condition.innerText = data.current.condition.text;
        })
        .catch(error => {
            alert(error.message);
        });
}