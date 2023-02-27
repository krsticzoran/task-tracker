export const elementConfirm = function (e) {
  const element = [
    e.target.parentElement.querySelector(".span--to-do").textContent,
    e.target.previousElementSibling.textContent,
  ];
  return element;
};

export const inputSplice = function (input, marker, map, element) {
  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === element[0] && input[i][1] === element[1]) {
      marker = input[i][4];
      input.splice(i, 1);
      map.removeLayer(marker);
    }
  }
};

export const inputOnePush = function (inputOne, element, e, storageInput) {
  inputOne.push(element);

  e.target.parentElement.remove();
  localStorage.setItem("todo", JSON.stringify(storageInput));
  localStorage.setItem("todo1", JSON.stringify(inputOne));
};
