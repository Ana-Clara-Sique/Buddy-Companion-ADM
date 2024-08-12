document.addEventListener('DOMContentLoaded' , () => {
const menuToggle = document.getElementById('menu-toggle');
const menuLateral = document.getElementById('menu-lateral');
const fecharMenu = document.getElementById('fechar-menu');

menuToggle.addEventListener('click' , () => {
menuLateral.style.left =menuLateral.style,left === '0px' ? '-250px' : '0px';

});

fecharMenu.addEventListener ('click', () => {
    menuLateral.style.left ='-250px';
});


});