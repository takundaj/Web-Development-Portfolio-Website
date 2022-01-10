class navBar {
  constructor(element) {
    this.trigger = element.querySelector(".container .menu-trigger");
    this.content = element.querySelector(".menu-content");
  }

  init() {}

  collapse() {
    this.content.classList.toggle("menu-content-collapsed");
    this.trigger.classList.toggle("menu-active");
  }

  uncollapse() {
    this.content.classList.remove("menu-content-collapsed");
    this.trigger.classList.remove("menu-active");
  }
}

export { navBar as default };
