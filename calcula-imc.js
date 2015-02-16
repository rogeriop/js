var peso = 75;
var altura = 1.7;
var paciente = "Lula Molusco"

var imc = 0;

if (altura !== 0) {
    imc = peso / (altura * altura);
} else {
    console.log("altura tem que ser diferente de zero");
}
