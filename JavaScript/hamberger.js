

const menuIcon = document.querySelector('.menu_icon');
const offScreenMenu = document.querySelector('.off_screen_menu');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})  