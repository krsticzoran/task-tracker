class MapModel {
  static lat = null;
  static lng = null;
  static map = null;

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

  static mapLoad(lat, lng) {
    // create the map with the given coordinates
    this.map = L.map("map").setView([lat, lng], 10);

    // add the tile layer
    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(this.map);
  }

  // Add a marker to the map
  static addMarker(lat, lng, text) {
    const marker = L.marker([lat, lng]).addTo(this.map);
    marker.bindPopup(text).openPopup();
  }
  // Remove markers based on lat and lng
  static removeMarker(lat, lng) {
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        const { lat: markerLat, lng: markerLng } = layer.getLatLng();
        if (markerLat === lat && markerLng === lng) {
          this.map.removeLayer(layer);
        }
      }
    });
  }

  static centerMap(lat, lng) {
    this.map.setView([lat, lng], 12);
  }
}

export default MapModel;
