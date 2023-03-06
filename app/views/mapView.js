class MapView {
  constructor() {
    this.mapCoverP = document.querySelector(".map--cover-p");
    this.mapCover = document.querySelector(".map--cover");
  }

  bindMapCover(handler) {
    this.mapCover.addEventListener("click", handler);
    this.mapCoverP.addEventListener("click", handler);
  }
  removeMapCover() {
    this.mapCoverP.style.display = "none";
    this.mapCover.style.display = "none";
  }
}

export default MapView;
