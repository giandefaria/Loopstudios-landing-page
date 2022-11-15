const menuButton = document.querySelectorAll('.acess--menu, .close--menu');
const menuActive = document.querySelector('.menu--mobile');

for (let i = 0; i < menuButton.length; i++) {
    
    menuButton[i].addEventListener('click', () => {

        menuActive.classList.toggle('menu--mobile--active');

    })
    
}