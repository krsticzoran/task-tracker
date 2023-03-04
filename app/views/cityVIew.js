class CityView {
  constructor() {
    this.cityElement = document.querySelector(".weather");
    this.loaderElement = document.querySelector(".loader");
  }

  displayCity(city) {
    // Hides the loader element.
    this.loaderElement.style.display = "none";
    // Inserts the HTML content of the city element before the first child of the weather element.
    this.weatherElement.insertAdjacentHTML(
      "afterbegin",
      `<p class="city">${city}</p>`
    );
  }
}

export default CityView;
