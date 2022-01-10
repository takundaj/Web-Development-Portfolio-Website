import navBar from "./styles/navbar";

import "./styles/general.css";
import "./styles/navbar.css";

const navbar = new navBar(document.querySelector(".nav-bar"));
const navTrigger = document.querySelector(".nav-bar .container .menu-trigger");

navTrigger.addEventListener("click", (e) => {
  navbar.collapse();
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    navbar.uncollapse();
  }
});
