class MapModel {
  static lat = null;
  static lng = null;

  // Get the latitude and longitude as an object
  static getLatLong() {
    return { lat: this.lat, lng: this.lng };
  }
  // Set the latitude and longitude
  static setLatLong(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
  // Clear the latitude and longitude values
  static clearLatLong() {
    this.lat = null;
    this.lng = null;
  }
}

export default MapModel;
