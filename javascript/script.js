"use strict";

const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  if (
    email.value === "" ||
    email.value === null ||
    email.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  ) {
    error.innerHTML = "Please provide a valid email address";
    document.querySelector(".field").style.borderColor = "red";
    event.preventDefault();
    event.stopPropagation();
  } else {
    event();
  }
});
