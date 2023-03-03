export const markerFly = function (e, input) {
  const element = [
    e.target.parentElement.querySelector(".span--to-do").textContent,
    e.target.parentElement.querySelector(".span--to-do").nextSibling
      .textContent,
  ];

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === element[0] && input[i][1] === element[1]) {
      console.log([input[i][2], input[i][3]], 14);
      return [input[i][2], input[i][3]];
    }
  }
};

export const fly = function (x, map) {
  map.flyTo(x, 14);
};
