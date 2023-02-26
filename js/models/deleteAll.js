export const deleteAll = function (arr, stor, view) {
  console.log(arr);
  arr = [];
  localStorage.setItem(stor, JSON.stringify(arr));
  view.innerHTML = "";
};
