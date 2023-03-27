class SearchModel {
  searchTasks(value, inputs) {
    return inputs.filter((input) => {
      return input.input.startsWith(value);
    });
  }
}

export default SearchModel;
