"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const header = document.querySelector(".header");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//
//
//
//
//
//

// Adding the cookie pop-up
const message = document.createElement("div");
message.classList.add("cookie-message");

// button to close it
message.innerHTML = `We use cookies to improve your browsing experience <button class="btn btn--close--cookie">Got it </button>`;

header.prepend(message);

// delete it on click
const closeCookie = document.querySelector(".btn--close--cookie");

closeCookie.addEventListener("click", function () {
  message.remove();
});

message.style.backgroundColor = "#37383d";
message.style.width = `120%`;

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

console.log(message.style.height);
