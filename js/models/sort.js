export const sortReverse = function (sR, input, temporary, inputOne, failed) {
  if (sR == "sort") {
    input.sort();
    temporary.sort();
    inputOne.sort();
    failed.sort();
  } else {
    input.reverse();
    temporary.reverse();
    inputOne.reverse();
    failed.reverse();
  }
};
