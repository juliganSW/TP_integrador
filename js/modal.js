// JavaScript
const btnModals = document.querySelectorAll('.btnModal');
const closeModalButtons = document.querySelectorAll('.closeModal');

btnModals.forEach((btnModal) => {
  btnModal.addEventListener('click', () => {
    const targetId = btnModal.getAttribute('data-target');
    const targetModal = document.getElementById(targetId);
    targetModal.style.display = 'flex';
  });
});

closeModalButtons.forEach((closeModalButton) => {
  closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.contModal');
    modal.style.display = 'none';
  });
});
