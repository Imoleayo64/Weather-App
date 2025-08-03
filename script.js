async function getWeather() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=7.38&longitude=3.93&current=temperature_2m';

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temp = data.current.temperature_2m;

    document.getElementById('weatherResult').innerHTML =
      `<p>🌤 Temperature in Ibadan: <strong>${temp}°C</strong></p>`;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML =
      `<p>Something went wrong. Please try again later.</p>`;
  }
}
