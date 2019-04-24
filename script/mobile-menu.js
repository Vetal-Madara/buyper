var modalWrap = document.querySelector('.modal-wrap');
var burgerIcon = document.querySelector('.burger-menu');
var burgerExit = document.querySelector('.modal-wrap img');
burgerIcon.onclick = showMenu;
burgerExit.onclick = hideMenu;
function showMenu(){
    modalWrap.classList.remove('hide');
}
function hideMenu(){
    modalWrap.classList.add('hide');
}