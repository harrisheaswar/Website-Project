//select the hr line
const sizeSelector = document.querySelector("#size");
const quantSelector = document.querySelector("#quantity");
const menuSelector = document.querySelectorAll(".header-div .menu-list li a");
const checkBox = document.querySelector("#check");
const inputBox = document.querySelectorAll(".inputBox");
let overlay = document.querySelector(".overlay");
// highlight the hr line when select button pressed
const websiteSelector = document.querySelector(".website-container");
window.addEventListener("resize", () => {
  let windowSize = window.innerWidth;

  if (windowSize > 800) {
    checkBox.checked = false;
    overlay.style.display = "none";
  }
});
inputBox.forEach((link) =>
  link.addEventListener("focus", (e) => {
    let input = e.target;
    input.nextElementSibling.style.display = "flex";
    input.placeholder = "";

    input.style.borderBottom = " 2px solid black";
  })
);

window.addEventListener("DOMContentLoaded", (e) => {
  let currLink = window.location.pathname;

  currLink = currLink.split("/").pop().trim();

  menuSelector.forEach((element) => {
    if (element.getAttribute("href") === currLink.trim()) {
      element.style.borderBottom = "0.15rem solid black";
      element.style.paddingBottom = "0.7rem";
    }
  });
});

websiteSelector.addEventListener("mousedown", (e) => {
  if (!sizeSelector.contains(e.target) && !quantSelector.contains(e.target)) {
    const hr = document.querySelector("#hr-size");

    hr.style.height = "";
    hr.style.backgroundColor = "";

    const quant = document.querySelector("#quant-hr");

    quant.style.height = "";
    quant.style.backgroundColor = "";
  } else if (sizeSelector.contains(e.target)) {
    const hr = document.querySelector("#hr-size");

    hr.style.height = "0.2rem";
    hr.style.backgroundColor = "black";
  } else if (quantSelector.contains(e.target)) {
    const hr = document.querySelector("#quant-hr");

    hr.style.height = "0.2rem";
    hr.style.backgroundColor = "black";
  }
});

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    menuSelector.forEach((element) => {
      if (element.style.borderBottom != "") {
        element.style.borderBottom = "";
        element.style.fontWeight = "bold";
        element.style.color = "black";
      }
    });
    overlay.style.display = "block";
    overlay.style.zIndex = "5";
  } else {
    overlay.style.display = "none";
  }
});
