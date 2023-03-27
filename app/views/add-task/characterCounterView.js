class CharacterCounterView {
  constructor() {
    this.characterCounter = document.querySelector(".characterCounter");
    this.addInput = document.querySelector(".input--add");
  }

  //display number of letters in input
  display(number) {
    this.characterCounter.textContent = number;
  }

  // listen input
  bindInput(handler) {
    this.addInput.addEventListener("input", handler);
  }

  //style character counter based on whether adding more characters  is allowed
  addClass() {
    this.characterCounter.classList.add("zeroCharacterLeft");
  }
  removeClass() {
    this.characterCounter.classList.remove("zeroCharacterLeft");
  }
}

export default CharacterCounterView;
