export const page = document.querySelector(".page");

let failed = JSON.parse(localStorage.getItem("todo2")) || [];

export const allView = function (
  input,
  pageNumber,
  pageLoadTask,
  today,
  taskTime
) {
  for (let i = 0; i < input.length; i++) {
    if (today !== input[i][1] && Date.now() > taskTime(input[i][1])) {
      failed.push(input[i]);
      localStorage.setItem("todo2", JSON.stringify(failed));
      input.splice(i, 1);

      localStorage.setItem("todo", JSON.stringify(input));
      i--;
    }
  }
  //////////////////////////
  //

  page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
  if (input.length === 0) {
    page.textContent = "";
  }

  pageLoadTask(input, pageNumber);
};
