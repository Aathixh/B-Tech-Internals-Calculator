"use strict";
let Internals;
let attendenceMarks;
const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", function () {
  const cat1 = parseFloat(document.getElementById("Cat1Marks").value);
  const cat2 = parseFloat(document.getElementById("Cat2Marks").value);
  const attendence = parseFloat(document.getElementById("Attendence").value);
  const assignment1 = parseFloat(document.getElementById("Assignment1").value);
  const assignment2 = parseFloat(document.getElementById("Assignment2").value);

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

    console.log(Internals);
    console.log("Button clicked");
  } else {
  }
});
