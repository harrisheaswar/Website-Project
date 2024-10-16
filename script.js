//select the hr line
const sizeSelector = document.querySelector("#size");
const quantSelector = document.querySelector("#quantity");

// Deselect/select the drop down hr line
const websiteSelector = document.querySelector(".website-container");
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
