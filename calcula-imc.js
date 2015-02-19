var paciente = {peso:75, altura:1.7, nome:"Lula Molusco"};
var imc = 0;

var peso = document.getElementById("peso-1").textContent;
var altura = document.getElementById("altura-1").textContent;
var nome = document.getElementById("nome-1").textContent;


if (paciente.altura !== 0) {
    imc = paciente.peso / (paciente.altura * paciente.altura);
} else {
    console.log("altura tem que ser diferente de zero");
}
