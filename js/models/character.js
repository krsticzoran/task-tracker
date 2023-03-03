const characterCounter = document.querySelector(".characterCounter");
export function updateValue() {
  let x = this.value.length;
  if (x === 20) characterCounter.classList.add("zeroCharacterLeft");
  if (x < 20) characterCounter.classList.remove("zeroCharacterLeft");
  if (x == 0) {
    characterCounter.textContent = "20/20";
  } else {
    characterCounter.textContent = `${20 - x}/20`;
  }
}

export function resetCharacter() {
  characterCounter.textContent = "20/20";
  characterCounter.classList.remove("zeroCharacterLeft");
}
