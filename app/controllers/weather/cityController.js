import CityModel from "../../models/weather/cityModel.js";
import CityView from "../../views/weather/cityVIew.js";

class CityController {
  constructor() {
    this.cityModel = new CityModel();
    this.cityView = new CityView();

    this.getAndDisplayCity();
  }
  // Gets the current city from the CityModel and displays it in the CityView.
  async getAndDisplayCity() {
    const city = await this.cityModel.getCity();
    this.cityView.displayCity(city.name);
  }
}

export default CityController;
