class SearchModel {
  // search for tasks by value
  searchTasks(value, inputs) {
    return inputs.filter((input) => {
      return input.input.includes(value);
    });
  }
}

export default SearchModel;
