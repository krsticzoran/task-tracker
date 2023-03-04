class WeatherView {
  constructor() {
    this.weatherElement = document.querySelector(".weather");
  }

  displayWeather(temperature, wind, description) {
    // Construct the HTML string for the weather information
    const weatherHTML = `
      <div class='temp--container'>
        <p class='temp'>${temperature} </p>
        <p class='wind'> ${wind}</p>
        <img class="weather--icons" src='${this.getIconUrl(
          description
        )}' alt='${description}' />
      </div>
    `;
    // Add the weather HTML to the end of the weather element
    this.weatherElement.insertAdjacentHTML("beforeend", weatherHTML);
  }

  // Helper method to get the icon URL based on the weather description
  getIconUrl(description) {
    switch (description) {
      case "Clear":
        return "https://example.com/clear.png";
      case "Partly cloudy":
        return "https://example.com/partly-cloudy.png";
      case "Haze":
        return "https://example.com/haze.png";
      case "Mostly cloudy":
        return "https://example.com/mostly-cloudy.png";
      case "Overcast":
        return "https://example.com/overcast.png";
      case "Fog":
        return "https://example.com/fog.png";
      case "Freezing fog":
        return "https://example.com/freezing-fog.png";
      case "Patchy rain possible":
        return "https://example.com/patchy-rain-possible.png";
      case "Patchy snow possible":
        return "https://example.com/patchy-snow-possible.png";
      case "Patchy sleet possible":
        return "https://example.com/patchy-sleet-possible.png";
      case "Patchy freezing drizzle possible":
        return "https://example.com/patchy-freezing-drizzle-possible.png";
      case "Thundery outbreaks possible":
        return "https://example.com/thundery-outbreaks-possible.png";
      case "Blowing snow":
        return "https://example.com/blowing-snow.png";
      case "Blizzard":
        return "https://example.com/blizzard.png";
      case "Moderate or heavy rain shower":
        return "https://example.com/moderate-or-heavy-rain-shower.png";
      case "Torrential rain shower":
        return "https://example.com/torrential-rain-shower.png";
      case "Light rain":
        return "https://example.com/light-rain.png";
      case "Moderate rain at times":
        return "https://example.com/moderate-rain-at-times.png";
      case "Heavy rain":
        return "https://example.com/heavy";
      default:
        return "";
    }
  }
}

export default WeatherView;
