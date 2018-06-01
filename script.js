//TELA INICIAl
$(document).ready(function() {
    $("[value=Entrar]").click(function() {
        var email = $("#email").val(),
            senha = $("#senha").val();

        if (email == ("adm@gymlink.com.br") && senha == ("1234**")){
            window.location.href = "Administrador/telaPrincipal.html";
        } else if (email == ("aluno@gymlink.com.br") && senha == ("1234**")) {
            window.location.href = "homeAluno.html"
        } else{
            $("#erro").text("Digite os dados corretamente!");
        }
    });
});

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

function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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

function AddAluno() {
    var name;
    var sobrenome;
    var elemento;
    name = document.querySelector("[name=nome]").value;
    sobrenome = document.querySelector("[name=sobrenome]").value;
/*    elemento = document.querySelector("#alunos").innerHTML;
    
    elemento.innerHTML = "<p>" + name + " " + sobrenome + "</p>"
*/  }