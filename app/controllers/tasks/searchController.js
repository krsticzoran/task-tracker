import SearchView from "../../views/tasks/searchView.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import SearchModel from "../../models/tasks/searchModel.js";
import ViewHandler from "../../views/tasks/viewHandler.js";
import InputView from "../../views/tasks/inputView.js";

class SearchController {
  constructor() {
    this.searchView = new SearchView();
    this.searchModel = new SearchModel();
    this.viewHandler = new ViewHandler();
    this.inputView = new InputView();
    this.searchView.bindBtnSearch(() => this.search());
    this.searchView.bindInputSearchEnter(() => this.search());
  }

  search() {
    const searchValue = this.searchView.inputSearch.value;

    if (searchValue) {
      const searchedInputs = this.searchModel.searchTasks(
        searchValue,
        InputDataModel.getInput()
      );
      this.viewHandler.showView(this.viewHandler.search, "none", "none");
      this.searchView.displaySearch(searchedInputs);
      this.searchView.inputSearch.value = "";
      if (searchedInputs.length == 0) {
        this.searchView.displayNoSearch();
      }
    }
  }
}

export default SearchController;
