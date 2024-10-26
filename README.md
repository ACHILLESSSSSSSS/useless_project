<img width="1280" alt="readme-banner" src="https://github.com/user-attachments/assets/35332e92-44cb-425b-9dff-27bcf1023c6c">

# WEATHER ALERT 🎯

![readme-banner](Add your project banner image link here)

## Basic Details
### Team Name: ONE PIECE

### Team Members
- **Team Lead**: Johnson V Mathew - Viswajyothi College Of Engineering And Technology, Vazhakkulam
- **Member 2**: Eldhose George - Viswajyothi College Of Engineering And Technology, Vazhakkulam

---

## Project Overview

**WEATHER ALERT** is a real-time weather monitoring application that displays the current temperature and weather conditions based on the user's location. It helps users make fun (and maybe useful!) decisions on ideal crop choices for each weather pattern. Whether it's sunny, rainy, cloudy, or clear, the app suggests suitable conditions for planting specific crops, adding a quirky but helpful element for users.

## Problem Statement

**The Problem (that doesn't exist):** Deciding when and what crops to plant based on precise, real-time weather conditions might not be an issue, but why not have an app for it?

**The Solution (that nobody asked for):** Get real-time weather updates and crop suggestions for every possible weather scenario. Whether it’s a sunny afternoon or a rainy evening, WEATHER ALERT helps you decide on crop selection with dynamic video and links that change based on the weather.

## Technical Details

### Technologies Used

**Software**:
- **Languages**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap (for fetching real-time weather data)
- **Tools**: ChatGPT, OpenWeatherMap, AI video, and image generation tools

**Hardware**:
This project doesn't require any specific hardware.

---

## Code and Implementation

### Code Overview

The main components of this project are:
1. **JavaScript Code for Fetching Weather Data**
2. **HTML & CSS for UI Design**
3. **Dynamic Video & Link Switcher** based on weather conditions

### JavaScript Code: Weather Fetch and UI Update

Using OpenWeatherMap's API, the app fetches weather data, then updates the UI and video content according to the current weather.

#### Step 1: Fetch Weather Data

This function retrieves weather data using OpenWeatherMap API based on the provided latitude and longitude.

```javascript
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

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
```

#### Step 2: Update UI Based on Weather Conditions

The `updateWeatherUI` function processes the API data to update the HTML elements (temperature, condition, city name) and changes the video and link based on the specific weather type.

```javascript
function updateWeatherUI(data) {
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].description;
  const cityName = data.name;

  document.getElementById('temperature').textContent = temperature;
  document.getElementById('condition').textContent = condition;
  document.getElementById('cityName').textContent = cityName;

  const videoSource = document.getElementById('video-source');
  const videoLink = document.getElementById('video-link');

  switch (data.weather[0].main.toLowerCase()) {
    case 'clear':
      videoSource.src = 'clear.mp4';
      videoLink.href = 'clear_weather_tips.html';
      break;
    case 'rain':
      videoSource.src = 'rainy.mp4';
      videoLink.href = 'rainy_weather_tips.html';
      break;
    case 'clouds':
      videoSource.src = 'cloudy.mp4';
      videoLink.href = 'cloudy_weather_tips.html';
      break;
    default:
      videoSource.src = 'sunny.mp4';
      videoLink.href = 'default_tips.html';
  }

  const video = document.getElementById('weather-video');
  video.load();
}
```

#### Step 3: Get Location and Trigger Weather Fetching

The `getLocationAndFetchWeather` function checks for geolocation support and requests the user's location, then calls `fetchWeather` with the user's coordinates.

```javascript
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

// Fetch weather when the page loads
getLocationAndFetchWeather();
```

### HTML Structure

The HTML file includes sections for weather data, temperature, city name, and a video that changes based on the weather.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Weather Display</title>
  <link rel="stylesheet" href="style1.css">
</head>
<body>
  <div id="weatherContainer">
    <h1>WEATHER ALERT</h1>
    <a id="video-link" href="" target="_blank">
      <video id="weather-video" autoplay loop muted>
        <source id="video-source" src="sunny.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </a>
    <p>Temperature: <span id="temperature">--</span> °C</p>
    <p>Condition: <span id="condition">--</span></p>
    <p id="cityName"></p>
  </div>
  <script src="script1.js"></script>
</body>
</html>
```

---

## Screenshots

1. **Current Weather Display**  
   ![Screenshot1](Add screenshot 1 here)  ![Uploading Screenshot (1).png…]()

   *Shows the current weather details such as temperature and condition.*

2. **Dynamic Video Based on Weather**  
   ![Screenshot2](Add screenshot 2 here)  
   *Displays the video change when weather conditions 
hange.*

3. **Location Access**  
   ![Screenshot3](Add screenshot 3 here)  
   *Prompt for location access to fetch real-time data.*

---

## Demo

### Video Demo
[Add your demo video link here]  
*Explanation of app features and video transitions.*

### Additional Links
[Add extra materials, if any.]

---

## Team Contributions

- **Johnson V Mathew**: Design and materials collection.
- **Eldhose George**: Coding and design.

---

Made with ❤️ at TinkerHub Useless Projects
