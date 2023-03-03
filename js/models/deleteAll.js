export const deleteAll = function (arr, stor, view) {
  console.log(arr);
  arr = [];
  localStorage.setItem(stor, JSON.stringify(arr));
  view.innerHTML = "";
};
export const delAllFail = document.querySelector(".delete-all-failed");

export const delAllCompl = document.querySelector(".delete-all-completed");
