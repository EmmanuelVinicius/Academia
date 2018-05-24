//      Home        \\
var anuncio = document.getElementsByClassName("anuncio"),
    titulo = document.getElementsByClassName("titulo"),
    conteudo = document.getElementsByClassName("conteudo");

    var fotos = [];
    for (var i = 0; i < anuncio.length; i++) {
        anuncio[i].style.b;
        
    }















//      Ficha Aluno     \\
var d = new Date();
var days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var dia = document.getElementById("semana").innerHTML = days[d.getDay()];
if (d == 1) {
}
else if (d == 2) {
}
else if (d == 3) {
}
else if (d == 4) {
}
else if (d == 5) {
}
else if (d == 6) {
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//      Tela Login      \\
function vldUsuario() {
    var email = document.getElementById("email"),
        senha = document.getElementById("senha"),
        erro = document.getElementById("erro")

    if (email.value == "adm@gymlink.com.br" && senha.value == "1234**") {
        window.location.href = "telaPrincipal.html";
    } else if(email.value == "aluno@gymlink.com.br" && senha.value == "1234**"){
        window.location.href = "homeAluno.html";
    } else {
        erro.innerHTML = "Digite os dados corretamente!";
        email.value = "";
        senha.value = "";
    }
}