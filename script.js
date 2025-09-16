// Part 2: Functions with Parameters & Return Values

// Function with parameter & return value
function calculateSquare(num) {
  return num * num;
}

// Demonstrating scope (local vs global)
let globalMessage = "I am global!";

function showScopeExample() {
  let localMessage = "I am local!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible only inside
}

showScopeExample();

// Part 3: Trigger CSS Animation with JS
function triggerAnimation() {
  const box = document.getElementById("animateBox");
  box.classList.remove("animate"); // reset
  void box.offsetWidth; // restart animation trick
  box.classList.add("animate");
}

// Part 3: Popup Toggle
function togglePopup() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("show");
}
