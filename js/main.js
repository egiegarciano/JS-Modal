const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('#overlay');

// Events 

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function outsideClick(e) {
    if (e.target == modal || e.target == overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
}