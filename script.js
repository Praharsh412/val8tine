const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

function moveButton() {
  const moveAmount = 60;

  const wrapper = document.querySelector(".button-wrapper");
  const maxX = wrapper.clientWidth - noBtn.offsetWidth;
  const maxY = wrapper.clientHeight - noBtn.offsetHeight;

  let currentX = noBtn.offsetLeft;
  let currentY = noBtn.offsetTop;

  let newX = currentX + (Math.random() - 0.5) * moveAmount;
  let newY = currentY + (Math.random() - 0.5) * moveAmount;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

noBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!";
});
