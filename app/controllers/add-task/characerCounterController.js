import CharacterCounterView from "../../views/add-task/characterCounterView.js";

class CharacterCounterController {
  constructor() {
    this.characterCounterView = new CharacterCounterView();
    this.displayNumber();
    this.characterCounterView.bindInput((e) => this.displayNumber(e));
  }

  //display the number of characters entered in the Add Task modal input field
  displayNumber(e) {
    if (e) {
      const numberCharacter = e.target.value.length;

      if (numberCharacter === 20) this.characterCounterView.addClass();
      if (numberCharacter < 20) this.characterCounterView.removeClass();
      if (numberCharacter == 0) {
        this.characterCounterView.display("20/20");
      } else {
        this.characterCounterView.display(`${20 - numberCharacter}/20`);
      }
    }
  }
}

export default CharacterCounterController;
