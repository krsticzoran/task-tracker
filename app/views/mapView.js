class MapView {
  constructor() {
    this.mapCoverP = document.querySelector(".map--cover-p");
    this.mapCover = document.querySelector(".map--cover");
  }

  bindMapCover(handler) {
    // When the elements are clicked, the handler function will be called.
    this.mapCover.addEventListener("click", handler);
    this.mapCoverP.addEventListener("click", handler);
  }
  removeMapCover() {
    // This will hide both elements from view.
    this.mapCoverP.style.display = "none";
    this.mapCover.style.display = "none";
  }
}

export default MapView;
