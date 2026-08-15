document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("about-text");
  const text = textElement.textContent.trim();
  textElement.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // typing speed
    }
  }
  typeWriter();
});
