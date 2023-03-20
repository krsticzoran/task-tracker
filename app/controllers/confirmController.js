import InputView from "../views/inputView.js";

class ConfirmController {
  constructor() {
    this.inputView = new InputView();
    this.inputView.bindTask((e) => this.confirmTask(e));
  }

  checkbox(e) {
    if (
      e.target.classList.contains("span--to-do") ||
      e.target.classList.contains("span--to-do-date")
    ) {
      if (e.target.parentElement.firstElementChild.checked == true) {
        e.target.parentElement.firstElementChild.checked = false;
      } else {
        e.target.parentElement.firstElementChild.checked = true;
      }
    }
  }

  confirmTask(e) {
    this.checkbox(e);
    if (
      e.target.classList.contains("btn--confirm") &&
      e.target.parentElement.firstElementChild.checked
    ) {
      console.log(
        e.target.parentElement.querySelector(".span--to-do").textContent
      );
    }
  }
}
export default ConfirmController;
