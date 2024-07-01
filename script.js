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

  if (attendence >= 75 && attendence <= 100) {
    //Attendence Marks
    if (attendence >= 75 && attendence <= 80) {
      attendenceMarks = 8;
    } else if (attendence >= 80 && attendence <= 90) {
      attendenceMarks = 9;
    } else if (attendence >= 90 && attendence <= 100) {
      attendenceMarks = 10;
    }

    Internals = Math.ceil(
      cat1 / 4 +
        cat2 / 4 +
        attendenceMarks +
        (assignment1 + assignment2) / 6.666
    );

    document.querySelector(".internals-result").classList.remove("hidden");
    document.getElementById("internals-value").textContent = Internals;
    document.querySelector(".internals-result").classList.add("slide-in");
    document.querySelector(".form").classList.add("slide-out");

    console.log(Internals);
    console.log("Button clicked");
  } else {
    document.getElementById("internals-value").classList.add("hidden");
    document.querySelector(".internals-result").classList.remove("hidden");
    document.querySelector(".internal-heading").textContent =
      "You need Minimum of 75% Attendence";
    document.querySelector(".internals-result").classList.add("slide-in");
    document.querySelector(".add-card").classList.add("slide-out");
  }
});
