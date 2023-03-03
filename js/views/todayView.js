export const list = document.querySelector(".list");
export const listToday = document.querySelector(".today--list");

export const dayView = function (input, day, list) {
  for (let i = 0; i < input.length; i++) {
    if (day == input[i][1]) {
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
    ><span class='span--to-do-date'>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
    }
  }
};

export const pageLoadTask = function (input, pageNumber) {
  list.innerHTML = "";
  console.log(pageNumber);
  for (let i = pageNumber * 10; i <= pageNumber * 10 + 9; i++) {
    if (input[i] !== undefined)
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
><span class='span--to-do-date'>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
  }
};
