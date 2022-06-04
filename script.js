"use strict";

const toggleBtn = document.querySelector(".inputSlider");
const prices = document.getElementsByClassName("pricing");

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.checked) {
    prices[0].innerHTML = "&dollar;19.99";
    prices[1].innerHTML = "&dollar;24.99";
    prices[2].innerHTML = "&dollar;39.99";
  } else {
    prices[0].innerHTML = "&dollar;199.99";
    prices[1].innerHTML = "&dollar;249.99";
    prices[2].innerHTML = "&dollar;399.99";
  }
});
