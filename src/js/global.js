'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.querySelectorAll('.js--btn-menu');

	const nav = document.querySelector('.nav--header');

	const submenu = document.querySelectorAll('.menu__item--has-submenu');

	const searchButtons = document.querySelectorAll('.js--btn-search');

	searchButtons.forEach((searchButton) => {
		searchButton.addEventListener('click', (e) => {
			// console.log(e);
			e.preventDefault();

			let searchSection = document.querySelector('.section--search');
			searchSection.classList.toggle('section--search-active');
		});
	});

	menuBtn.forEach((item) => {
		if (item) {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				item.classList.toggle('btn--menu-active');
				nav.classList.toggle('nav--active');
			});
		}
	});

	submenu.forEach((menu) => {
		let submenuItem = menu.querySelector(`.menu__submenu`);

		menu.addEventListener('click', (e) => {
			e.preventDefault();
			let menuHeight = menu.offsetHeight;
			if (window.innerWidth < 991) {
				menu.classList.toggle('menu__item--active');
				submenuItem.classList.toggle('menu__submenu--active');
				submenuItem.style.top = `${menuHeight}px`;
			}
		});
	});
});
