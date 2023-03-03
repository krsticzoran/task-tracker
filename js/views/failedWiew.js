export const listFailed = document.querySelector(".failed--list");

export const failedView = function (failed) {
  failed.map((failed) => {
    listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${failed[0]}</span><span class='date-for-delete span--to-do-date'>${failed[1]}</span><button class='delete'>Delete</button></li>`;
  });
};
