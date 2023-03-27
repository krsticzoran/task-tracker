import MenuView from "../../views/menu/menuView.js";

class MenuController {
  constructor() {
    this.view = new MenuView();

    this.view.bindCloseMenu(() => this.openMenu());
  }

  // open and close menu
  openMenu() {
    this.view.toggleMenu();
  }
}

export default MenuController;
