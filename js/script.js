document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  const messages = [
    "[ INITIALIZING SYSTEM... ]",
    "[ Scanning ports... ]",
    "[ Decrypting file... ]",
    "[ Bypassing firewall... ]",
    "[ Injecting payload... ]",
    "[ ACCESS GRANTED ]"
  ];

  const loadingText = document.querySelector(".loading-text");
  let i = 0;

  const interval = setInterval(() => {
    loadingText.textContent = messages[i];
    i++;
    if (i === messages.length) {
      clearInterval(interval);
      loader.style.display = "none";
      content.style.display = "block";
    }
  }, 1200);
});

// Matrix rain background
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px Courier New";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
