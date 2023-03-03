export const listFailed = document.querySelector(".failed--list");

export const failedView = function (failed) {
  for (let i = 0; i < failed.length; i++) {
    listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${failed[i][0]}</span><span class='date-for-delete span--to-do-date'>${failed[i][1]}</span><button class='delete'>Delete</button></li>`;
  }
};
