class SearchModel {
  searchTasks(value, inputs) {
    return inputs.filter((input) => {
      return input.input.includes(value);
    });
  }
}

export default SearchModel;
