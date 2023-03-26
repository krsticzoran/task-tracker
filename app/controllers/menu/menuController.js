import MenuView from "../../views/menu/menuView.js";

class MenuController {
  constructor() {
    // create an instance of the MenuView class and store it in the view property of the MenuController
    this.view = new MenuView();

    // call the bindCloseMenu method of the MenuView instance and pass in a function that calls the closeMenu method of the MenuController instance
    this.view.bindCloseMenu(() => this.closeMenu());
  }

  // define the closeMenu method, which calls the toggleMenu method of the MenuView instance
  closeMenu() {
    this.view.toggleMenu();
  }
}

export default MenuController;
