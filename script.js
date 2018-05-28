//      Home        \\
var anuncio = document.getElementsByClassName("anuncio"),
    titulo = document.getElementsByClassName("titulo"),
    conteudo = document.getElementsByClassName("conteudo");

    var fotos = [];
    for (var i = 0; i < anuncio.length; i++) {
        anuncio[i].style.b;
        
    }


//      Ficha Aluno     \\
var f = new Date();
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var d = document.getElementById("semana").innerHTML = dias[f.getDay()];


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
        window.location.href = "Administrador/telaPrincipal.html";
    } else if(email.value == "aluno@gymlink.com.br" && senha.value == "1234**"){
        window.location.href = "homeAluno.html";
    } else {
        erro.innerHTML = "Digite os dados corretamente!";
        email.value = "";
        senha.value = "";
    }
}


//      Atividades      \\
function aleatorio() {
    var braco = ["Deltóide", "Biceps", "Triceps", "Flexor", "Braquiorradial"];
    var torax = ["Peitoral Superior", "Peitoral Inferior", "Abdomem", "Grande Dorsal", "Serrátil"];
    var costas = ["Trapézio", "Teres Maior", "Latíssimo Dorsal", "Erecto Spinae", "Obliquo Externo"];
    var perna = ["Gluteos","Coxa Interna", "Coxa Externa", "Panturrilha", "Fibular"];

    
    for (var i = 5 - 1; i >= 0; i--) {
        document.getElementsByClassName("bra")[i].textContent = braco[i];
        document.getElementsByClassName("bra1")[i].textContent = braco[i];
        document.getElementsByClassName("tor1")[i].textContent = torax[i];
        document.getElementsByClassName("tor")[i].textContent = torax[i];
        document.getElementsByClassName("per")[i].textContent = perna[i];
        document.getElementsByClassName("cos")[i].textContent = costas[i];
    }
}