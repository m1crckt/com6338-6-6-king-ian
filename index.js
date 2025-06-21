var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

// Open menu when hamburger is clicked
function openMenu() {
    hamburgerMenu.classList.add('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', 'true')
}

// Close menu when hamburger is clicked
function closeMenu() {
    hamburgerMenu.classList.remove('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', 'false')
}

// Check whether the menu is open or closed
function toggleMenu() {
    if (hamburgerMenu.classList.contains('show-menu')) {
    closeMenu()
    } else {
    openMenu()
    }
}

// Ensure that menu only works on screens <= 800px
hamburgerBtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 800) {
    toggleMenu()
    }
})

// Close the menu when you click outside of it
document.addEventListener('click', function (e) {
    if (
    hamburgerMenu.classList.contains('show-menu') &&
    !hamburgerMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
    ) {
    closeMenu()
    }
})

hamburgerMenu.addEventListener('click', function (e) {
    // Don't close menu when you click inside of it
    e.stopPropagation()
})

// Close the menu when you click 'Escape'
document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        closeMenu();
        hamburgerBtn.focus();
      }
})