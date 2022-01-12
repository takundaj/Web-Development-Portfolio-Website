class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach((tab) => {
      //remove current active classes
      tab.classList.remove("active");
      //add new active class to clicked tab
      e.target.classList.add("active");
    });
  }

  toggleContent(e) {
    //
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(`#${selector}`);
    content.classList.add("active");
  }
}

export { Tabs as default };
