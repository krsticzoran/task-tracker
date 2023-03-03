export const listSearch = document.querySelector(".search--list");

export const searchView = function (temporary) {
  for (let i = 0; i < temporary.length; i++) {
    listSearch.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${temporary[i][0]}</span
  ><span class='span--to-do-date'>${temporary[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
  }
};
