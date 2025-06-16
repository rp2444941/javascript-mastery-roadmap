const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherInfo");

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      const country = data.sys.country;

      weatherDiv.innerHTML = `
        <h2>${data.name}, ${country}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    })
    .catch((error) => {
      weatherDiv.innerHTML = `<p>${error.message}</p>`;
    });
}