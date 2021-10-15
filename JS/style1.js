 
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
