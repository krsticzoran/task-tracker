export let storageInput = [];

export const storage = function (input) {
  storageInput = [];
  for (let i = 0; i < input.length; i++) {
    storageInput.push([input[i][0], input[i][1], input[i][2], input[i][3]]);
  }
};
