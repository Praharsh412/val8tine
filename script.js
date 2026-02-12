const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// Make sure button starts somewhere visible
noBtn.style.position = "absolute";
noBtn.style.left = "60%";
noBtn.style.top = "60%";

function moveButton() {
  const padding = 20; // space from edges

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Run away when hovered
noBtn.addEventListener("mouseenter", moveButton);

// OPTIONAL: Even more evil – runs if cursor gets close
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const distance =
    Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

  if (distance < 100) { // distance threshold
    moveButton();
  }
});

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!";
  response.style.fontSize = "24px";
});
