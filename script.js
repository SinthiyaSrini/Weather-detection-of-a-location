document.addEventListener('DOMContentLoaded', function() {
  const locationSelect = document.getElementById('location');
  const detectBtn = document.getElementById('detectBtn');
  const weatherInfoDiv = document.getElementById('weather-info');
  const locationNameSpan = document.getElementById('location-name');
  const temperatureSpan = document.getElementById('temperature');
  const conditionSpan = document.getElementById('condition');

  const simulatedWeatherData = {
      chennai: { temperature: 32, condition: 'Sunny' },
      london: { temperature: 15, condition: 'Cloudy' },
      newyork: { temperature: 20, condition: 'Rainy' }
  };

  detectBtn.addEventListener('click', function() {
      const selectedLocation = locationSelect.value;
      const weatherData = simulatedWeatherData[selectedLocation];

      if (weatherData) {
          locationNameSpan.textContent = selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1);
          temperatureSpan.textContent = weatherData.temperature;
          conditionSpan.textContent = weatherData.condition;
          weatherInfoDiv.classList.remove('hidden');
      } else {
          weatherInfoDiv.classList.add('hidden');
          alert('Weather data not available for this location.');
      }
    });
});