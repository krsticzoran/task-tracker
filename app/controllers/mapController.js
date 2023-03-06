import MapView from "../views/mapView.js";
import CityModel from "../models/cityModel.js";
class MapController {
  constructor() {
    this.view = new MapView();
    this.view.bindMapCover(this.removeCover.bind(this));
    this.cityModel = new CityModel();
    this.loadMap();
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

    // add markers, if needed
    // ...
  }
}

export default MapController;
