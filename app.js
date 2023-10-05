const gamburger = document.querySelector('#gamburger');
const burger_menu = document.querySelector('.burger_menu');
const fon = document.querySelector('.fon');
const dark =document.querySelector('.dark');
const material_symbols = document.querySelector('.material-symbols')
gamburger.addEventListener('click', () => {
   burger_menu.classList.toggle('disp');
});
gamburger.addEventListener('click', () => {
    fon.classList.toggle('disp');
});
gamburger.addEventListener('click', () => {
    material_symbols.classList.toggle('cross');
});
gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('cross');
});