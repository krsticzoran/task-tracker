import CharacterCounterView from "../../views/add-task/characterCounterView.js";

class CharacterCounterController {
  constructor() {
    this.characterCounterView = new CharacterCounterView();
    this.displayNumber();
    this.characterCounterView.bindInput((e) => this.displayNumber(e));
  }

  displayNumber(e) {
    if (e) {
      const numberCharacter = e.target.value.length;

      if (numberCharacter === 20) this.characterCounterView.addClass();
      if (numberCharacter < 20) this.characterCounterView.removeClass();
      if (numberCharacter == 0) {
        this.characterCounterView.display("20/20");
      } else {
        //this.CharacterCounterView.display(this.numberCharacter);
        this.characterCounterView.display(`${20 - numberCharacter}/20`);
      }
    }
  }
}

export default CharacterCounterController;
