"use strict";
let Internals;
let attendenceMarks;
const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", function () {
  const cat1 = parseFloat(document.getElementById("Cat1Marks").value) || 0;
  const cat2 = parseFloat(document.getElementById("Cat2Marks").value) || 0;
  const attendence = parseFloat(document.getElementById("Attendence").value);
  const assignment1 =
    parseFloat(document.getElementById("Assignment1").value) || 0;
  const assignment2 =
    parseFloat(document.getElementById("Assignment2").value) || 0;
  const section1 = document.querySelector(".form");
  const section2 = document.querySelector(".internals-result");
  const internalScore = document.getElementById("internals-value");

  section2.classList.remove("hidden", "slide-in");
  section1.classList.remove("slide-out");
  internalScore.classList.remove("hidden");
  document.querySelector(".internal-heading").textContent = "Internals Score";
  if (attendence >= 75 && attendence <= 100) {
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
  } else {
    internalScore.classList.add("hidden");
    section2.classList.remove("hidden");
    document.querySelector(".internal-heading").textContent =
      "You need Minimum of 75% Attendence";
    section2.classList.add("slide-in");
    section1.classList.add("slide-out");
  }
});
