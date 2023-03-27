class WeatherModel {
  // Fetches weather data from the API for a given city and returns an object with the temperature and wind values
  async getWeather(city) {
    try {
      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${city}`
      );

      // Throw an error if the response status is not OK
      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }

      const data = await response.json();

      // Extracts the temperature,description and wind values from the response data
      const temperature = data.temperature;
      const wind = data.wind;
      const description = data.description;

      // Returns an object with the temperature,description and wind values
      return { temperature, wind, description };
    } catch (error) {
      console.error(error.message);
      // handle the error here, e.g. display a message to the user
    }
  }
}

export default WeatherModel;
