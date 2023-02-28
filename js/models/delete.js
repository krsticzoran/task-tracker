export const deleteCompleted = function (e, arr, stor) {
  console.log("delete");
  if (e.target.classList.contains("delete")) {
    const element = [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.parentElement.querySelector(".date-for-delete").textContent,
    ];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === element[0] && arr[i][1] === element[1]) {
        arr.splice(i, 1);

        localStorage.setItem(stor, JSON.stringify(arr));
      }
    }

    e.target.parentElement.remove();
  }
};
