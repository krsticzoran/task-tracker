import DateTimeController from "./app/controllers/dateTimeController.js";
import CityController from "./app/controllers/cityController.js";
import WeatherController from "./app/controllers/weatherController.js";

// create a new instance of the DateTimeController class to start the clock and date app
new DateTimeController();

//gets the user's current location and displays the city name in the UI
new CityController();

new WeatherController();
