const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyyyy 💕 I knew you'd say yes!!! xD";
  response.style.fontSize = "24px";
});

