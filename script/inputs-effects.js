function getSelector(tag)    { return document.querySelector(tag);   }
function getSelectors(tags)  { return document.querySelectors(tags); }
var btn = getSelector('.btn');
getSelector('.input-first').onkeyup = function(event){
    function charCount(text){ 
        return text.replace(/[\.,!?; ]*/g, '').length; 
    }
    if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8){
        (charCount(this.value) == 9) ? btn.disabled = false : btn.disabled = true;
    };
};
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