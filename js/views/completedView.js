export const completed = document.querySelector(".completed--list");
export const completedView = function (inputOne) {
  for (let i = 0; i < inputOne.length; i++) {
    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[i][0]}</span><span class='date-for-delete span--to-do-date'>${inputOne[i][1]}</span><button class='delete'>Delete</button></li>`;
  }
};
