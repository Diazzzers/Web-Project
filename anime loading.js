function openModal(modalNumber) {
    const modalContainer = document.getElementById('modal-container');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImg = document.getElementById('modal-img');

  
    modalContainer.style.display = 'flex';
    modalTitle.textContent = `Modal ${modalNumber} Title`;
    modalText.textContent = `This is the content of Modal ${modalNumber}.`;
  }
  
  function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modalContainer = document.getElementById('modal-container');
    if (event.target === modalContainer) {
      closeModal();
    }
  }
  