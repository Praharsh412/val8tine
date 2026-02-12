const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

let activated = false;

function moveButton() {
  const moveAmount = 80;

  // First hover: convert to fixed so it can move freely
  if (!activated) {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";
    activated = true;
  }

  const rect = noBtn.getBoundingClientRect();

  let newX = rect.left + (Math.random() - 0.5) * moveAmount;
  let newY = rect.top + (Math.random() - 0.5) * moveAmount;

  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  // Clamp inside viewport
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

noBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!";
});
