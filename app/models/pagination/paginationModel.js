class PagantionModel {
  static pageNumber = 1;
  static length = 0;

  // get page number
  static getPageNumber() {
    return this.pageNumber;
  }

  // set page number based on click and number of tasks
  static setPageNumber(number) {
    this.pageNumber += number;

    if (this.pageNumber > Math.ceil(this.length / 10)) this.pageNumber -= 1;
    if (this.pageNumber < 1) this.pageNumber = 1;
  }

  //set length of array with tasks
  static setLength(input) {
    this.length = input.length;
    if (this.pageNumber > Math.ceil(this.length / 10)) this.pageNumber -= 1;
    if (this.pageNumber < 1) this.pageNumber = 1;
  }
}

export default PagantionModel;
