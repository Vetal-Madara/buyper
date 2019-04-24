function getTags(Tags){
    return document.querySelectorAll(Tags);
}
function getTag(Tag){
    return document.querySelector(Tag);
}
function getForEach(tags, callback){
    for(var e = 0; e < tags.length; e++){
        tags[e].onclick = callback;
    }
}
var modalShadow     = getTags('.modal-shadow'),
    modals          = getTags('.modals'),
    register        = getTags('.modals p a'),
    btnModal        = getTags('.btn-show-login'),
    btnsIconExit    = getTags('.exit-modal');
    V = 0.6;
getForEach(btnModal,      showModals);
getForEach(btnsIconExit,  hideModals);
getTag('.login-wrapper span').onclick = showForgotPassword;
getForEach(register,  function(e){
    e.preventDefault();
    var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null
        requestAnimationFrame(step);
        hideModals();
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
}, false);
function showModals(){
    hideMenu();
    exitElem(modals);
    exitElem(modalShadow);
}
function exitElem(window){
    for(var i = 0; i < window.length; i++){
        window[0].classList.remove('hide');
    }
    for(var j = 0; j < window.length; j++){
        window[0].classList.remove('hide');
    }
}
function hideModals(){
    for(var i = 0; i < modals.length; i++){  
        modals[i].classList.add('hide');
    }
    for(var j = 0; j < modalShadow.length; j++){  
        modalShadow[j].classList.add('hide');
    }
}
function showForgotPassword(){
    
    modals[0].classList.add('hide');
    modals[1].classList.remove('hide');
}
for(var p = 0; p < modals.length; p++){
    modals[p].onclick = function(event){
        event.stopPropagation();
    };
}
for(var q = 0; q < modalShadow.length; q++){
    modalShadow[q].onclick = hideModals;
}

