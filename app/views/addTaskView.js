class AddTaskView {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.close = document.querySelector(".close--modal");
  }
  openTaskModal() {
    this.modal.classList.add("modal--open");
    this.modal.classList.remove("modal--close");
  }

  bindCloseModal(handler) {
    this.close.addEventListener("click", handler);
  }

  closeTaskModal() {
    console.log("ffgdg");
    this.modal.classList.add("modal--close");
    this.modal.classList.remove("modal--open");
  }
}

export default AddTaskView;
