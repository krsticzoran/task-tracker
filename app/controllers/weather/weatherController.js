import WeatherView from "../../views/weather/weatherView.js";
import CityModel from "../../models/weather/cityModel.js";
import WeatherModel from "../../models/weather/weatherModel.js";
import DateModel from "../../models/weather/dateModel.js";

class WeatherController {
  constructor() {
    // Instantiate WeatherView, CityModel, DateModel and WeatherModel
    this.weatherView = new WeatherView();
    this.cityModel = new CityModel();
    this.weatherModel = new WeatherModel();
    this.dateModel = new DateModel();

    // Call method to get and display the weather for the city
    this.getAndDisplayWeather();
  }

  async getAndDisplayWeather() {
    // Get the city from the CityModel
    const city = await this.cityModel.getCity();

    // Get the weather for the city from the WeatherModel
    const weather = await this.weatherModel.getWeather(city.name);

    // Call the isDay() method to check if it is currently day or night
    const timeOfDay = this.dateModel.isDay();
    // Display the weather in the WeatherView
    if (weather) {
      this.weatherView.displayWeather(
        weather.temperature,
        weather.wind,
        weather.description,
        timeOfDay
      );
    }
  }
}

export default WeatherController;
