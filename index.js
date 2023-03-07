import DateTimeController from "./app/controllers/dateTimeController.js";
import CityController from "./app/controllers/cityController.js";
import WeatherController from "./app/controllers/weatherController.js";
import MenuController from "./app/controllers/menuController.js";
import MapController from "./app/controllers/mapController.js";
import AddTaskController from "./app/controllers/addTaskController.js";

// create a new instance of the DateTimeController class to start the clock and date app
new DateTimeController();

//gets the user's current location and displays the city name in the UI
new CityController();

// uses the location data to fetch weather information from an external API
new WeatherController();

//toggling its visibility and appearance when the menu button is clicked
new MenuController();

new MapController();

new AddTaskController();
