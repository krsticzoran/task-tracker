class PagangtionView {
  constructor() {
    this.page = document.querySelector(".page");
    this.btnLeft = document.querySelector(".left");
    this.btnRight = document.querySelector(".right");
  }

  setPageNumber(number) {
    this.page.textContent = number;
  }
  bindLeftButton(handler) {
    this.btnLeft.addEventListener("click", handler);
  }

  bindRightButton(handler) {
    this.btnRight.addEventListener("click", handler);
  }
}

export default PagangtionView;
