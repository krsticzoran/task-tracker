const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const menuOpen = document.querySelector(".buttons--all-open");

export const closeMenu = function () {
  one.classList.toggle("bar-one");
  two.classList.toggle("bar-two");
  three.classList.toggle("bar-three");

  menuOpen.classList.toggle("buttons--all-open");
};
