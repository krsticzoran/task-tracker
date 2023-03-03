export const completed = document.querySelector(".completed--list");
export const completedView = function (inputOne) {
  inputOne.map((inputOne) => {
    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[0]}</span><span class='date-for-delete span--to-do-date'>${inputOne[1]}</span><button class='delete'>Delete</button></li>`;
  });
};
