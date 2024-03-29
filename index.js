import DateTimeController from "./app/controllers/weather/dateTimeController.js";
import CityController from "./app/controllers/weather/cityController.js";
import WeatherController from "./app/controllers/weather/weatherController.js";
import MenuController from "./app/controllers/menu/menuController.js";
import MapController from "./app/controllers/map/mapController.js";
import AddTaskController from "./app/controllers/add-task/addTaskController.js";
import InputController from "./app/controllers/tasks/inputController.js";
import FailedController from "./app/controllers/tasks/failedController.js";
import CompletedTaskController from "./app/controllers/tasks/completedTaskController.js";
import TodayTaskController from "./app/controllers/tasks/todayTaskController.js";
import TomorrowTaskController from "./app/controllers/tasks/tomorrowTaskController.js";
import ConfirmController from "./app/controllers/tasks/confirmController.js";
import PaginationController from "./app/controllers/pagination/paginationController.js";
import CharacterCounterController from "./app/controllers/add-task/characerCounterController.js";
import SearchController from "./app/controllers/tasks/searchController.js";
// create a new instance of the DateTimeController class to start the clock and date app
new DateTimeController();

//gets the user's current location and displays the city name in the UI
new CityController();

// uses the location data to fetch weather information from an external API
new WeatherController();

//toggling its visibility and appearance when the menu button is clicked
new MenuController();

// display map and handle clicks on map
new MapController();

// add task and handle inputs
new AddTaskController();

// diplay all tasks
new InputController();

//display failed tasks
new FailedController();

//display completed tasks
new CompletedTaskController();

// display today tasks
new TodayTaskController();

//display tomorrow tasks
new TomorrowTaskController();

// handle confirm task, delete from inputs and send to completed
new ConfirmController();

// display 10 inputs per page
new PaginationController();

// display the number of characters entered in the Add Task modal input field
new CharacterCounterController();

//display searched task
new SearchController();
