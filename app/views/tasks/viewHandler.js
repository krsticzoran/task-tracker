class ViewHandler {
  constructor() {
    this.toDo = document.querySelector(".to--do");
    this.today = document.querySelector(".today--task");
    this.completed = document.querySelector(".completed");
    this.tomorrow = document.querySelector(".tomorrow--task");
    this.failed = document.querySelector(".failed--task");
    this.search = document.querySelector(".serach--task");
    this.pagination = document.querySelector(".paganation");
    this.sort = document.querySelector(".sort");
  }

  // change view
  showView(view, sort, paganation) {
    this.toDo.style.display = "none";
    this.today.style.display = "none";
    this.completed.style.display = "none";
    this.tomorrow.style.display = "none";
    this.failed.style.display = "none";
    this.search.style.display = "none";
    this.pagination.style.display = "none";
    this.sort.style.display = sort;
    this.pagination.style.display = paganation;
    view.style.display = "block";
  }
}

export default ViewHandler;
