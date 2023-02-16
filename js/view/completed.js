import { completed } from "../userInterface.js";

export let inputOne = [];

export const completedView = function () {
  if (JSON.parse(localStorage.getItem("todo1"))) {
    inputOne = JSON.parse(localStorage.getItem("todo1"));

    for (let i = 0; i < inputOne.length; i++) {
      completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[i][0]}</span><span class='date-for-delete span--to-do-date'>${inputOne[i][1]}</span><button class='delete'>Delete</button></li>`;
    }
  }
};
