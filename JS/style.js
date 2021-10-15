/* INDEX.HTML */

var imgWhite    = document.getElementById('imgWhite');
var body        = document.getElementById('all');
var botaoAcesso = document.getElementById('acesso');


botaoAcesso.style.visibility = 'hidden';
imgWhite.onclick             = acessou;
botaoAcesso.onclick          = redirect;
// window.onload = function(){
//   body.style.transition = 'all 1s';
// }

function acessou() {
  if(imgWhite   .classList.contains('black')){
    botaoAcesso .style.visibility = 'visible';
    body        .classList.add('white');
    imgWhite    .classList.add('white') ;
    imgWhite    .classList.remove('black');
    imgWhite              .setAttribute('src','../img/LOGO YU - para site.png')
    
  }else{
    if(imgWhite.classList.contains('white')){
      botaoAcesso .style.visibility = 'hidden';
      body        .classList.remove('white');
        imgWhite  .classList.remove('white');
        imgWhite  .classList.add('black');
        imgWhite            .setAttribute('src','../img/LOGO YU -paraguia .png')
    }
  }
}

function redirect() {
  setTimeout(function(){ 
    window.location.pathname = "quem-eu-sou.html"
  }, 500); 
}


/* evento de mouse */
//identificar -capturar,atribuir ao mouse
var triangulo = document.querySelector('.cursorTRI')

/* captura do movimento */
document.addEventListener('mousemove',function (m) {
  let xPOS = m.pageX;
  let yPOS = m.pageY;
  triangulo.style.left  =xPOS+'px';
  triangulo.style.top   =yPOS+'px';
  
});
