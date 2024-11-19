// script.js
// Obtém o botão que abre a modal
var botao = document.getElementById("botao-palavra");

// Obtém a modal
var modal = document.getElementById("modal");

// Obtém o botão de fechar
var fechar = document.getElementsByClassName("close")[0];

// Quando o usuário clicar na palavra do cabeçalho, abre a modal
botao.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, fecha a modal
fechar.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora da modal, ela também se fecha
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
