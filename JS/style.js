/* to change stlye  */
var imgWhite = document.getElementById('imgWhite');
var body = document.getElementById('all');

imgWhite.onclick = acessou;


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
  