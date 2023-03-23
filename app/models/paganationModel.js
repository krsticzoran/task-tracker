class PagantionModel {
  static pageNumber = 1;
  static length = 0;

  static getPageNumber() {
    return this.pageNumber;
  }

  static setPageNumber(number) {
    this.pageNumber += number;

    if (this.pageNumber > Math.ceil(this.length / 10)) this.pageNumber -= 1;
    if (this.pageNumber < 1) this.pageNumber = 1;
  }

  static setLength(input) {
    this.length = input.length;
  }
}

export default PagantionModel;
