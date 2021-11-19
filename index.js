const modal = document.querySelector('.mobileNav');
const menuButton = document.querySelector('.menuIcon');
const closeButton = document.querySelector('.iconClose')

function modalOpen() {
  console.log(modal)
  if (modal) {
    modal.style.display = 'block'
  }
}

menuButton.addEventListener('click', modalOpen)

function modalClose() {
  console.log(modal)
  if (modal) {
    modal.style.display = 'none'
  }
}

closeButton.addEventListener('click', modalClose)