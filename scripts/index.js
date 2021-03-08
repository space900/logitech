const openButtonMenu = document.querySelector('.header__icon');
const closeButtonMenu = document.querySelector('.header__burger-close');
const activePopup = document.querySelector('.header__burger');

function openPopup () {
    activePopup.classList.add('header__burger_is-opened');
}

function closePopup(evt) {
    activePopup.classList.remove('header__burger_is-opened');
    evt.preventDefault();
}

openButtonMenu.addEventListener('click', openPopup);
closeButtonMenu.addEventListener('click', closePopup);