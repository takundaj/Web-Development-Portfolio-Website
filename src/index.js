import navBar from "./TJs-UI-Library/navbar";
import Dropdown from "./TJs-UI-Library/dropdown";
import Tabs from "./TJs-UI-Library/tabs";
import Tooltip from "./TJs-UI-Library/tooltip";

import "./styles/general.css";
import "./styles/hero.css";
import "./styles/about-me.css";
import "./styles/contact.css";

import "./TJs-UI-Library/styles/navbar.css";
import "./TJs-UI-Library/styles/dropdown.css";
import "./TJs-UI-Library/styles/tabs.css";
import "./TJs-UI-Library/styles/tooltip.css";
import "./TJs-UI-Library/styles/media.css";

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

//initialize dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((instance) => {
  const dropdown = new Dropdown(instance);
  dropdown.init();
});

//create tabs
const tabs = new Tabs(document.querySelector(".tabs"));

tabs.init();

//initialize tool tip
const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
  const instance = new Tooltip(tooltip);
  instance.init();
});
