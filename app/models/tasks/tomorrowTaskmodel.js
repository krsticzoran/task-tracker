class TomorrowTaskModel {
  // search for tmorrow tasks - compare date
  getTomorrowTasks(input) {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const filteredTasks = input.filter(function (input) {
      return new Date(input.date).getDate() == tomorrow.getDate();
    });

    return filteredTasks;
  }
}

export default TomorrowTaskModel;
