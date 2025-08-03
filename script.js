async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "https://api.open-meteo.com/v1/forecast?latitude=7.38&longitude=3.93&current=temperature_2m";
  
  const response = await fetch(apiKey);
  const data = await response.json();

  document.getElementById("weatherResult").innerHTML =
    `<p>Temperature in Ibadan: ${data.current.temperature_2m}°C</p>`;
}
