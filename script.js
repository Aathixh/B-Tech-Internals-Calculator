"use strict";
let Internals;
let attendenceMarks;
const submit = document.querySelector(".submit-btn");

//model-window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("button clicked");
};

btnsOpenModal.addEventListener("click", openModel);
btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
    console.log(e.key + " is pressed!");
  }
});
//

submit.addEventListener("click", function () {
  const cat1 = parseFloat(document.getElementById("Cat1Marks").value) || 0;
  const cat2 = parseFloat(document.getElementById("Cat2Marks").value) || 0;
  const attendence =
    parseFloat(document.getElementById("Attendence").value) || 0;
  const assignment1 =
    parseFloat(document.getElementById("Assignment1").value) || 0;
  const assignment2 =
    parseFloat(document.getElementById("Assignment2").value) || 0;
  const section1 = document.querySelector(".form");
  const section2 = document.querySelector(".internals-result");
  const internalScore = document.getElementById("internals-value");

  //initialization
  section2.classList.remove("hidden", "slide-in");
  section1.classList.remove("slide-out");
  internalScore.classList.remove("hidden");
  document.querySelector(".internal-heading").textContent = "Internals Score";

  if (
    cat1 === 0 &&
    cat2 === 0 &&
    attendence === 0 &&
    assignment1 === 0 &&
    assignment2 === 0
  ) {
    section2.classList.remove("hidden");
    document.querySelector(".internal-heading").textContent =
      "Enter your Marks!";
    internalScore.classList.add("hidden");
    section2.classList.add("slide-in");
    section1.classList.add("slide-out");
  } else if (
    cat1 < 0 ||
    cat1 > 50 ||
    cat2 < 0 ||
    cat2 > 50 ||
    assignment1 < 0 ||
    assignment1 > 50 ||
    assignment2 < 0 ||
    assignment2 > 50
  ) {
    section2.classList.remove("hidden");
    document.querySelector(".internal-heading").textContent =
      "Enter Valid Marks!";
    internalScore.classList.add("hidden");
    section2.classList.add("slide-in");
    section1.classList.add("slide-out");
  } else {
    if (attendence < 75) {
      internalScore.classList.add("hidden");
      section2.classList.remove("hidden");
      document.querySelector(".internal-heading").textContent =
        "You need Minimum of 75% Attendence";
      section2.classList.add("slide-in");
      section1.classList.add("slide-out");
    } else if (attendence > 100) {
      section2.classList.remove("hidden");
      document.querySelector(".internal-heading").textContent =
        "Enter Valid attendance!";
      internalScore.classList.add("hidden");
      section2.classList.add("slide-in");
      section1.classList.add("slide-out");
    } else {
      //Attendence Marks
      if (attendence >= 75 && attendence < 80) {
        attendenceMarks = 8;
      } else if (attendence >= 80 && attendence < 90) {
        attendenceMarks = 9;
      } else if (attendence >= 90 && attendence <= 100) {
        attendenceMarks = 10;
      }

      Internals =
        Math.round(cat1 / 4 + cat2 / 4 + (assignment1 + assignment2) / 6.666) +
        attendenceMarks;

      section2.classList.remove("hidden");
      internalScore.textContent = Internals;
      section2.classList.add("slide-in");
      section1.classList.add("slide-out");

      console.log(Internals);
      console.log("Button clicked");
    }
  }
});
