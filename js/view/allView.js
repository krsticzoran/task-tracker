import { list, page } from "../userInterface.js";
import { today, taskTime } from "../data.js";

export let input = [];
export let pageNumber = 0;

export const pageLoadTask = function () {
  list.innerHTML = "";
  for (let i = pageNumber * 10; i <= pageNumber * 10 + 9; i++) {
    if (input[i] !== undefined)
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
><span class='span--to-do-date'>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
  }
};

export const allView = function () {
  if (JSON.parse(localStorage.getItem("todo"))) {
    input = JSON.parse(localStorage.getItem("todo"));

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

    pageLoadTask();
  }
};
