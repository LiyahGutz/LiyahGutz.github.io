document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  if (loader && content) {
    setTimeout(() => {
      loader.style.transition = "opacity 0.6s ease";
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";

        // Trigger typewriter AFTER content is visible
        if (typeof window.startTypewriter === "function") {
          window.startTypewriter();
        }
      }, 600);
    }, 800);
  } else if (content) {
    content.style.display = "block";
    if (typeof window.startTypewriter === "function") {
      window.startTypewriter();
    }
  }
});

// Canvas Matrix Rain Effect
const canvas = document.getElementById("matrix");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }
  resizeCanvas();

  const letters = "01";
  const fontSize = 14;
  let columns = canvas.width / fontSize;
  let drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(5, 2, 10, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px Courier New";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const yPos = drops[i] * fontSize;

      if (yPos / canvas.height < 0.5) {
        ctx.fillStyle = "#6a0ded";
      } else {
        ctx.fillStyle = "#d800ff";
      }

      ctx.fillText(text, i * fontSize, yPos);

      if (yPos > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);

  window.addEventListener("resize", () => {
    resizeCanvas();
    columns = canvas.width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
  });
}