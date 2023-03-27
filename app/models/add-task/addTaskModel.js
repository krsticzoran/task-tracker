class AddTaskModel {
  //input validation
  setInputData(inputData) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00:000 (midnight)
    const dateObj = new Date(inputData.date);
    if (!inputData.input) {
      alert("add a task");
      return false;
    }
    if (dateObj.getTime() < today.getTime()) {
      alert("Please enter a valid date");
      return false;
    }
    if (!inputData.date) {
      alert("add a date");
      return false;
    }

    return true;
  }
}

export default AddTaskModel;
