import MapView from "../views/mapView.js";
import CityModel from "../models/cityModel.js";
import AddTaskView from "../views/addTaskView.js";
import MapModel from "../models/mapModel.js";
import InputDataModel from "../models/inputDataModel.js";

class MapController {
  constructor() {
    this.view = new MapView();
    this.view.bindMapCover(this.removeCover.bind(this));
    this.cityModel = new CityModel();
    this.loadMap();
    this.addTaskView = new AddTaskView();
  }
  removeCover() {
    this.view.removeMapCover();
  }

  async loadMap() {
    // Get the city from the CityModel
    const city = await this.cityModel.getCity();

    // render the map
    MapModel.mapLoad(city.lat, city.long);

    // get all inputs
    const inputData = InputDataModel.getInput();

    // render markers on the map
    inputData.map((item) => {
      MapModel.addMarker(item.lat, item.lng, item.input);
    });

    MapModel.map.on("click", (e) => {
      // store lat and lng
      MapModel.setLatLong(e.latlng.lat, e.latlng.lng);

      // open add task modal
      this.addTaskView.openTaskModal();
    });
  }
}

export default MapController;
