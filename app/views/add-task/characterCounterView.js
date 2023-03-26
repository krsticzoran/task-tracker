class CharacterCounterView {
  constructor() {
    this.characterCounter = document.querySelector(".characterCounter");
    this.addInput = document.querySelector(".input--add");
  }

  display(number) {
    this.characterCounter.textContent = number;
  }
  bindInput(handler) {
    this.addInput.addEventListener("input", handler);
  }

  addClass() {
    this.characterCounter.classList.add("zeroCharacterLeft");
  }
  removeClass() {
    this.characterCounter.classList.remove("zeroCharacterLeft");
  }
}

export default CharacterCounterView;
