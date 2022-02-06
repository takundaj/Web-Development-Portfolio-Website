import navBar from "./TJs-UI-Library/navbar";
import Dropdown from "./TJs-UI-Library/dropdown";
import Tabs from "./TJs-UI-Library/tabs";
import Tooltip from "./TJs-UI-Library/tooltip";

import "./styles/general.css";
import "./styles/hero.css";
import "./styles/about-me.css";
import "./styles/contact.css";
import "./styles/pages.css";

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

// contact form

// Send us a message functionality
const contactForm = document.querySelector(".contact-me");
const contactFormRepsonse = document.querySelector(".contact-form-response");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // https://github.com/github/fetch
  fetch("https://formsubmit.co/ajax/tjnyamatore@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim(),
    }),
  })
    .then((response) => {
      response.json();
      if (response.ok) {
        contactFormRepsonse.style.display = "block";
        contactFormRepsonse.style.color = "white";
        contactFormRepsonse.textContent =
          "Thank you, your message has been sent!";
      } else {
        contactFormRepsonse.style.display = "block";
        contactFormRepsonse.style.color = "red";
        contactFormRepsonse.textContent =
          "Sorry, there was a problem. please use our email to the left.";
      }
    })

    .then((data) => console.log(data))

    .catch((error) => console.log(error));
});
