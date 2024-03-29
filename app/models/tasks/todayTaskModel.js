class TodayTaskModel {
  // search for today tasks - compare date
  getTodayTasks(input) {
    const today = new Date();

    const filteredTasks = input.filter(function (input) {
      return new Date(input.date).getDate() == today.getDate();
    });

    return filteredTasks;
  }
}

export default TodayTaskModel;
