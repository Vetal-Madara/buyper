document.querySelector('.item-company').onmouseenter = functionShowCompany;
document.querySelector('.drobdown-company').onmouseleave = functionHideCompany;
document.querySelector('.item-help').onmouseenter = functionShowHelp;
document.querySelector('.drobdown-help').onmouseleave = functionHideHelp;
document.querySelector('.item-eng').onmouseenter = functionShowLang;
document.querySelector('.drobdown-eng').onmouseleave = functionHideLang;
function functionShowCompany(){
    document.querySelector('.drobdown-company').style.display = 'block';
    functionHideHelp();
    functionHideLang();
}
function functionHideCompany(){
    document.querySelector('.drobdown-company').style.display = 'none';
}
function functionShowHelp(){
    document.querySelector('.drobdown-help').style.display = 'block';
    functionHideCompany();
    functionHideLang();
}
function functionHideHelp(){
    document.querySelector('.drobdown-help').style.display = 'none';
}
function functionShowLang(){
    document.querySelector('.drobdown-eng').style.display = 'block';
    functionHideCompany();
    functionHideHelp();
}
function functionHideLang(){
    document.querySelector('.drobdown-eng').style.display = 'none';
}
