/* =========================================
   Week 7 Assignment: JS Functions & Animations
========================================= */

/* -------------------------------
   Part 2: JavaScript Functions
---------------------------------- */
let counter = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

/* Function to increase counter */
function increaseCounter(value) {
  counter += value; // parameter usage
  return counter;   // return updated value
}

/* Function to reset counter */
function resetCounter() {
  counter = 0;
  return counter;
}

increaseBtn.addEventListener("click", () => {
  counterDisplay.textContent = increaseCounter(1); // increment by 1
});

resetBtn.addEventListener("click", () => {
  counterDisplay.textContent = resetCounter();
});

/* -------------------------------
   Part 3: JS-triggered Animations
---------------------------------- */
const animateBoxBtn = document.getElementById("animateBoxBtn");
const box = document.getElementById("box");

function toggleBoxAnimation() {
  box.classList.toggle("animate"); // add/remove class to trigger CSS animation
}

animateBoxBtn.addEventListener("click", toggleBoxAnimation);

/* -------------------------------
   Part 1: CSS is handled via styles.css
---------------------------------- */
