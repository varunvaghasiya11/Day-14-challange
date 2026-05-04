const openButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('[data-close]');
const overlays = document.querySelectorAll('.modal-overlay');

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('is-open');
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    overlays.forEach(overlay => {
      overlay.classList.remove('is-open');
    });
  });
});

overlays.forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('is-open');
    }
  });
});
