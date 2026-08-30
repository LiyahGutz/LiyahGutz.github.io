// Define a global function so script.js can trigger it when ready
window.startTypewriter = function() {
  const textElement = document.getElementById("about-text");

  if (textElement && !textElement.dataset.started) {
    textElement.dataset.started = "true"; // Prevent duplicate triggers
    const text = textElement.textContent.trim();
    textElement.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
      }
    }
    typeWriter();
  }
};