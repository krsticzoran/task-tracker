class ConfirmModel {
  clickCheckbox(e) {
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
    if (
      e.target.classList.contains("btn--confirm") &&
      e.target.parentElement.firstElementChild.checked
    ) {
      return true;
    } else {
      return false;
    }
  }

  getConfirmElement(e) {
    return [
      e.target.parentElement.querySelector(".span--to-do").textContent,
      e.target.parentElement.querySelector(".span--to-do-date").textContent,
    ];
  }
  getElementLatLng(element, input) {
    const { lat, lng } = input.find(
      ({ input, date }) => input === element[0] && date === element[1]
    );

    return { lat, lng };
  }
}
export default ConfirmModel;
