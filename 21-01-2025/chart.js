// Your OpenWeatherMap API key
const apiKey = '4719e110b9f42251ee53b2122f815b91';  // Replace with your actual API key from OpenWeatherMap

// Create a global variable for the chart instance and weather data
let weatherChart;
let weatherData = {};  // To store fetched weather data

// Function to get the weather for a given city
function getWeather() {
  const city = document.getElementById('city').value;  // Get city input value
  const weatherResult = document.getElementById('weatherResult');  // The element to display the result

  // Check if the user has entered a city name
  if (!city) {
    weatherResult.innerText = 'Please enter a city name.';
    return;
  }

  // Construct the API URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data from OpenWeatherMap API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      // Store the data globally
      weatherData = data;
      
      // Extract weather information from the response
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
        console.log(data);
      // Display the weather information
      weatherResult.innerHTML = `
        Temperature: ${temperature}°C<br>
        Weather: ${weatherDescription}<br>
        Humidity: ${humidity}%<br>
        Wind Speed: ${windSpeed} m/s
      `;

      // Initially display the pie chart
      updateChart('pie');
    })
    .catch(error => {
      // Handle errors (e.g., city not found)
      weatherResult.innerText = `Error: ${error.message}`;
    });
}

// Function to update the chart based on selected chart type (pie or line)
function updateChart(chartType) {
  if (!weatherData.main) return; // Ensure data is available

  // Prepare the chart data
  const chartData = {
    labels: ['Temperature', 'Humidity', 'Wind Speed'],
    datasets: [{
      label: 'Weather Data',
      data: [weatherData.main.temp, weatherData.main.humidity, weatherData.wind.speed],  // Data for the chart
      backgroundColor: chartType === 'pie' ? ['#ff9999', '#66b3ff', '#99ff99'] : [],  // Pie chart colors
      borderColor: chartType === 'pie' ? ['#ffffff', '#ffffff', '#ffffff'] : '#ff9999',  // Border color for the line chart
      borderWidth: 1,
      fill: chartType === 'line',  // Fill the line chart
      tension: chartType === 'line' ? 0.1 : 0  // Line smoothness
    }]
  };

  // If the chart exists, destroy it and create a new one
  if (weatherChart) {
    weatherChart.destroy();
  }

  // Create a new chart
  const ctx = document.getElementById('weatherChart').getContext('2d');
  weatherChart = new Chart(ctx, {
    type: chartType,  // Toggle between 'pie' and 'line'
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            }
          }
        }
      },
      scales: chartType === 'line' ? {
        y: {
          beginAtZero: true
        }
      } : {}
    }
  });
}

// Toggle between pie and line chart
function toggleChart(chartType) {
  updateChart(chartType);
}
