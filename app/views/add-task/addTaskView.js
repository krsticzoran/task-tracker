class AddTaskView {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.close = document.querySelector(".close--modal");
    this.btnAdd = document.querySelector(".btn--add");
    this.inputAdd = document.querySelector(".input--add");
    this.inputDate = document.querySelector(".input--date");
  }
  // Open the task modal
  openTaskModal() {
    this.modal.classList.add("modal--open");
    this.modal.classList.remove("modal--close");
  }
  // Bind the "Add Task" button to a click event handler function
  bindAddTask(handler) {
    this.btnAdd.addEventListener("click", handler);
  }
  // Bind the close button to a click event handler function
  bindCloseModal(handler) {
    this.close.addEventListener("click", handler);
  }
  // Close the task modal
  closeTaskModal() {
    this.modal.classList.add("modal--close");
    this.modal.classList.remove("modal--open");
  }
  // Clear the input fields
  clearInput() {
    this.inputDate.value = "";
    this.inputAdd.value = ""; // clear the input field value
  }
}

export default AddTaskView;
