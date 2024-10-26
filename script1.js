const apiKey = '9e3db03d98f3a788a89e2ff26b412ced'; // Replace with your OpenWeatherMap API key

async function fetchWeather(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching weather data.");

    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById('cityName').textContent = "Unable to retrieve weather data";
  }
}

function updateWeatherUI(data) {
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].description;
  const cityName = data.name;

  // Update HTML elements
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('condition').textContent = condition;
  document.getElementById('cityName').textContent = cityName;

  // Change video and link based on weather condition
  const videoSource = document.getElementById('video-source');
  const videoLink = document.getElementById('video-link');
  
  switch (data.weather[0].main.toLowerCase()) {
    case 'clear':
      videoSource.src = 'clear.mp4';
      videoLink.href = 'b.html'; // Replace with your preferred link
      break;
    case 'rain':
      videoSource.src = 'rainy.mp4';
      videoLink.href = 'c.html'; // Replace with your preferred link
      break;
    case 'clouds':
      videoSource.src = 'cloudy.mp4';
      videoLink.href = 'a.html'; // Replace with your preferred link
      break;
    // Add more cases as needed for different weather types
    case 'sunny':
      videoSource.src = 'sunny.mp4'; 
      videoLink.href = 'd.html'; 
      break;
  default:
      videoSource.src = 'sunny.mp4'; // Default to sunny
      videoLink.href = 'https://defaultlink.com'; // Default link

  }

  // Load the new video
  const video = document.getElementById('weather-video');
  video.load();
}

function getLocationAndFetchWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      error => {
        console.error("Error retrieving location:", error);
        document.getElementById('cityName').textContent = "Location access denied";
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    document.getElementById('cityName').textContent = "Geolocation not supported";
  }
}

// Fetch weather based on current location when the page loads
getLocationAndFetchWeather();
