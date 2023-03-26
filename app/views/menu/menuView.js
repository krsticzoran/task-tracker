class MenuView {
  constructor() {
    // Get elements needed for the menu
    this.menuLeft = document.getElementById("menu--center");
    this.one = document.getElementById("one");
    this.two = document.getElementById("two");
    this.three = document.getElementById("three");
    this.menuOpen = document.querySelector(".buttons--all-open");
  }

  // Bind the closeMenu handler function to the menuLeft element
  bindCloseMenu(handler) {
    this.menuLeft.addEventListener("click", handler);
  }

  // Toggle the menuOpen and menuClose classes on the menu elements to animate the menu
  toggleMenu() {
    this.one.classList.toggle("bar-one");
    this.two.classList.toggle("bar-two");
    this.three.classList.toggle("bar-three");

    this.menuOpen.classList.toggle("buttons--all-open");
  }
}

export default MenuView;
