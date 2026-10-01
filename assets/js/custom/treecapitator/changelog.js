// Select all accordion buttons
const accordionButtons = document.querySelectorAll('.version-button');

// Function to toggle panel visibility
const togglePanel = (button) => {
  const open = button.classList.toggle('active');
  button.setAttribute('aria-expanded', open);
  const panel = button.nextElementSibling;
  panel.style.maxHeight = open ? `${panel.scrollHeight}px` : null;
};

// Add click event listeners to all accordion buttons
accordionButtons.forEach(button => {
  button.addEventListener('click', () => togglePanel(button));
});

// Open the first panel by default
if (accordionButtons.length > 0) {
  togglePanel(accordionButtons[0]);
}