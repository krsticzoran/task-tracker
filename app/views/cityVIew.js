class CityView {
  constructor() {
    this.cityElement = document.querySelector(".weather");
    this.loaderElement = document.querySelector(".loader");
  }

  displayCity(city) {
    // Hides the loader element.
    this.loaderElement.style.display = "none";
    // Updates the HTML content of the city element with the specified city.
    this.cityElement.innerHTML = `<p class="city">${city}</p>`;
  }
}

export default CityView;
