class WeatherView {
  constructor() {
    this.weatherElement = document.querySelector(".weather");
    this.tempIcon =
      "<img class='weather--style' src='../../icons/tempurature.png'>";
    this.windIcon = "<img class='weather--style' src='../../icons/wind.png'>";
  }

  displayWeather(temperature, wind, description, timeOfDay) {
    const weatherHTML = `
      <div class='temp--container'>
        <p class='temp'>${temperature} ${this.tempIcon}</p>
        <p class='wind'> ${wind} ${this.windIcon}</p>
        <img class="weather--icons" src='${this.getIconUrl(
          description,
          timeOfDay
        )}' alt='${description}' />
      </div>
    `;
    // Add the weather HTML to the end of the weather element
    this.weatherElement.insertAdjacentHTML("beforeend", weatherHTML);
  }

  // Helper method to get the icon URL based on the weather description and time of day
  getIconUrl(description, timeOfDay) {
    const iconPrefix = timeOfDay === true ? "d" : "n";
    switch (description) {
      case "Clear":
        return `../../icons/01${iconPrefix}.svg`;
      case "Partly cloudy":
      case "Mostly cloudy":
      case "Cloudy":
      case "Overcast":
      case "Fog":
      case "Haze":
      case "Blowing snow":
        return `../../icons/03${iconPrefix}.svg`;
      case "Freezing fog":
      case "Patchy rain possible":
      case "Patchy snow possible":
      case "Patchy sleet possible":
      case "Patchy freezing drizzle possible":
      case "Thundery outbreaks possible":
      case "Thunderstorm":
        return `../../icons/snowy-6.svg`;
      case "Moderate or heavy rain shower":
      case "Torrential rain shower":
      case "Light rain":
      case "Moderate rain at times":
      case "Heavy rain":
        return `../../icons/09d.svg`;
      case "Patchy light rain with thunder":
      case "Moderate or heavy rain with thunder":
      case "Patchy light snow with thunder":
      case "Moderate or heavy snow with thunder":
        return `../../icons/11d.svg`;
      case "Patchy light rain":
      case "Light drizzle":
      case "Freezing drizzle":
      case "Heavy freezing drizzle":
      case "Light rain shower":
      case "Torrential rain shower":
      case "Mist":
      case "Overcast with haze":
      case "Overcast with light rain":
      case "Overcast with heavy rain":
        return `../../icons/09d.svg`;
      case "Snow":
      case "Patchy light snow":
      case "Light snow":
      case "Patchy moderate snow":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Blizzard":
        return `../../snowy-6.svg`;
      case "Sunny":
        return `../../icons/01${iconPrefix}.svg`;
      default:
        return "";
    }
  }
}

export default WeatherView;
