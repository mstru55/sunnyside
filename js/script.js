const btnToggler = document.querySelector('.nav-toggler');
const navItems = document.querySelector('.nav-items');

function showMenu() {
	navItems.classList.toggle('active');
}

btnToggler.addEventListener('click', showMenu);
