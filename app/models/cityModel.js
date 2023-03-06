class CityModel {
  constructor() {
    this.defaultCity = {
      name: "Belgrade",
      lat: 44.787197,
      long: 20.457273,
    };
  }

  async getCity() {
    try {
      // Use geolocation API to get user's current position
      const position = await this.getCurrentPosition();

      // Use reverse geocoding API to get city name from coordinates
      const city = await this.getCityName(
        position.coords.latitude,
        position.coords.longitude
      );
      return {
        name: city,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
    } catch (error) {
      //console.error(error);
      // Return default city if unable to get user's location
      return this.defaultCity;
    }
  }

  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }

  async getCityName(latitude, longitude) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return (
      data.address.city ||
      data.address.town ||
      data.address.village ||
      this.defaultCity
    );
  }
}

export default CityModel;
