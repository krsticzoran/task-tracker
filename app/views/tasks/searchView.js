class SearchView {
  constructor() {
    this.btnSearch = document.querySelector(".btn--search");
    this.inputSearch = document.querySelector(".input--search");
    this.listSearch = document.querySelector(".search--list");
  }

  // listen clicks on search btn
  bindBtnSearch(handler) {
    this.btnSearch.addEventListener("click", handler);
  }

  // trigerr search btn when user click enter in search input field
  bindInputSearchEnter() {
    this.inputSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.btnSearch.click();
      }
    });
  }

  // listen clicks on tasks
  bindSearchInputClick(handler) {
    this.listSearch.addEventListener("click", handler);
  }

  // render "no search results" message
  displayNoSearch() {
    this.listSearch.innerHTML = '<p class="no--search">No Search Results</p>';
  }

  // render searched tasks
  displaySearch(inputs) {
    this.listSearch.innerHTML = "";
    inputs.map((item) => {
      this.listSearch.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      //><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}

export default SearchView;
