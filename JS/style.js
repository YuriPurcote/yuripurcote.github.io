window.onload = function() {
  anima(param1, param2);
};


/* to change stlye  */
var imgWhite = document.getElementById('imgWhite');
var body = document.getElementById('all');
var botaoAcesso = document.getElementById('acesso');

imgWhite.onclick = acessou;
botaoAcesso.onclick = redirect


function acessou() {
  if(imgWhite.classList.contains('black')){
    body.classList.add('white');
    imgWhite.classList.add('white');
    imgWhite.classList.remove('black');
    imgWhite.setAttribute('src','../img/LOGO YU - para site.png')

  }else{
    if(imgWhite.classList.contains('white')){
        body.classList.remove('white');
        imgWhite.classList.remove('white');
        imgWhite.classList.add('black');
        imgWhite.setAttribute('src','../img/LOGO YU -paraguia .png')
    }
  }
}
function redirect() {
  window.location.pathname = "../quem-eu-sou.html"
}