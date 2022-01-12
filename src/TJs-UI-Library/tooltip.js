class Tooltip {
  constructor(element) {
    this.element = element;
    this.messaage = element.getAttribute("data-message");
  }

  //to initialize our component (prep it for use)
  init() {
    const tip = document.createElement("div");
    tip.classList.add("tip");
    tip.textContent = this.messaage;
    this.element.appendChild(tip);

    this.element.addEventListener("mouseenter", () => {
      tip.classList.add("active");
    });

    this.element.addEventListener("mouseleave", () => {
      tip.classList.remove("active");
    });
  }
}

export { Tooltip as default };
