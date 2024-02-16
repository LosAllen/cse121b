function getWeather() {
    const location = document.getElementById('locationInput').value.trim();
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    const apiKey = '3db45986fb6649958ac223038241502';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            document.getElementById('weatherInfo').innerText = 'Error: Unable to fetch weather data';
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    if (!data || !data.current) {
        weatherInfo.innerText = 'Error: Weather data not available';
        return;
    }

    const currentData = data.current;

    weatherInfo.innerHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <p>Temperature: ${currentData.temp_c}°C</p>
        <p>Humidity: ${currentData.humidity}%</p>
        <p>Wind Speed: ${currentData.wind_kph} km/h</p>
    `;
}



