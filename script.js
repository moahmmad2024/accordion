// Select all accordion buttons
const accordions = document.querySelectorAll(".accordion");

// For each accordion button
for (let i = 0; i < accordions.length; i++) {
  const accordion = accordions[i];
  const panel = accordion.nextElementSibling;

  // Add a click event to the accordion button
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
