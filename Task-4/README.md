# Weather App

A simple weather application that fetches real-time weather data based on a city name.

## Features

* Search weather by city
* Displays temperature, humidity, and condition
* Basic error handling

## Project Structure

```id="8w1k2d"
weather-app/
├── index.html
├── styles.css
└── script.js
```

## How API Call Works

1. User enters a city name.
2. JavaScript creates a request URL using the city and API key:

```js id="h3k9ls"
https://api.weatherapi.com/v1/current.json?key=API_KEY&q=city
```

3. The Fetch API sends a request to WeatherAPI:

```js id="x7p2vd"
fetch(url)
```

4. The API returns data in JSON format.

5. JavaScript reads the response and updates the UI:

```js id="c9m4qt"
temp.innerText = data.current.temp_c + " °C";
humidity.innerText = data.current.humidity + " %";
condition.innerText = data.current.condition.text;
```

6. If the request fails or the city is invalid, an error message is shown.

## Note

The API key is used on the client side and will be visible in the browser. This is acceptable for learning purposes but not recommended for production.

