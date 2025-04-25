"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
    e.preventDefault();
    if (toggleArea.classList.contains("monthly")) {
        toggleArea.classList.remove("monthly");
        toggleArea.classList.add("anually");
        basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&#x20b9;</span>2099</p>`;
        profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&#x20b9;</span>2599</p>`;
        masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&#x20b9;</span>4099</p>`;
    } else {
        toggleArea.classList.add("monthly");
        toggleArea.classList.remove("anually");
        basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&#x20b9;</span>199</p>`;
        profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&#x20b9;</span>249</p>`;
        masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&#x20b9;</span>399</p>`;
    }
});