import WeatherView from "../views/weatherView.js";
import CityModel from "../models/cityModel.js";
import WeatherModel from "../models/weatherModel.js";

class WeatherController {
  constructor() {
    // Instantiate WeatherView, CityModel, and WeatherModel
    this.weatherView = new WeatherView();
    this.cityModel = new CityModel();
    this.weatherModel = new WeatherModel();

    // Call method to get and display the weather for the city
    this.getAndDisplayWeather();
  }

  async getAndDisplayWeather() {
    // Get the city from the CityModel
    const city = await this.cityModel.getCity();

    // Get the weather for the city from the WeatherModel
    const weather = await this.weatherModel.getWeather(city);

    // Display the weather in the WeatherView
    this.weatherView.displayWeather(
      weather.temperature,
      weather.wind,
      weather.description
    );
  }
}

export default WeatherController;
