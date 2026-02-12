const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// Initial position
noBtn.style.position = "absolute";
noBtn.style.left = "50%";
noBtn.style.top = "60%";

function moveButtonSlightly() {
  const moveAmount = 80; // how far it can move each time

  const currentX = noBtn.offsetLeft;
  const currentY = noBtn.offsetTop;

  // Random small movement
  let newX = currentX + (Math.random() - 0.5) * moveAmount;
  let newY = currentY + (Math.random() - 0.5) * moveAmount;

  // Keep inside screen boundaries
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// Run away slightly every hover
noBtn.addEventListener("mouseenter", moveButtonSlightly);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes! 💕";
  response.style.fontSize = "24px";
});
