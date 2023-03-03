export const listSearch = document.querySelector(".search--list");

export const searchView = function (temporary) {
  temporary.map((temporary) => {
    listSearch.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${temporary[0]}</span
    ><span class='span--to-do-date'>${temporary[1]}</span><button class="btn--confirm">Confirm</button></li>`;
  });
};
