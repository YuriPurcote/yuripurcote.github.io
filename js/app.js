const comeco = document.getElementById('comeco');
const inicio = document.getElementById('inicio');
const perfil = document.getElementById('perfil');
comeco.addEventListener("click", function(e) {
    inicio.classList.add("d-none");
    perfil.classList.remove("d-none");
});
