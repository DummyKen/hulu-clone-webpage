// I will admit that none of this is my own idea at all. I'ven't learnt anything about JS in a long time.
const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}
