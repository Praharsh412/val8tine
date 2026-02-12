const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonArea = document.getElementById("buttonArea");
const response = document.getElementById("response");

let activated = false;

function moveSlightly() {
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // On first hover, convert to absolute inside container
  if (!activated) {
    noBtn.style.position = "absolute";
    noBtn.style.left = (btnRect.left - areaRect.left) + "px";
    noBtn.style.top = (btnRect.top - areaRect.top) + "px";
    activated = true;
  }

  const moveAmount = 60;

  let currentLeft = parseFloat(noBtn.style.left);
  let currentTop = parseFloat(noBtn.style.top);

  let newLeft = currentLeft + (Math.random() - 0.5) * moveAmount;
  let newTop = currentTop + (Math.random() - 0.5) * moveAmount;

  const maxLeft = buttonArea.clientWidth - noBtn.offsetWidth;
  const maxTop = buttonArea.clientHeight - noBtn.offsetHeight;

  // Clamp inside container
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  noBtn.style.left = newLeft + "px";
  noBtn.style.top = newTop + "px";
}

noBtn.addEventListener("mouseenter", moveSlightly);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!";
});
