const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

function moveButtonSlightly() {
  const moveAmount = 100; // small movement range

  const rect = noBtn.getBoundingClientRect();

  let newX = rect.left + (Math.random() - 0.5) * moveAmount;
  let newY = rect.top + (Math.random() - 0.5) * moveAmount;

  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  // Clamp inside screen
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// Move slightly every time you hover
noBtn.addEventListener("mouseenter", moveButtonSlightly);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!";
});
