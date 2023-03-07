import MapView from "../views/mapView.js";
import CityModel from "../models/cityModel.js";
import AddTaskView from "../views/addTaskView.js";

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

    // create the map with the given coordinates
    const map = L.map("map").setView([city.lat, city.long], 10);

    // add the tile layer
    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    // add markers,
    map.on("click", (e) => {
      // create a marker at the clicked location
      const marker = L.marker(e.latlng).addTo(map);
      // do something with the marker, like adding a popup
      marker
        .bindPopup("You clicked the map at " + e.latlng.toString())
        .openPopup();
      this.addTaskView.openTaskModal();
    });
  }
}

export default MapController;
