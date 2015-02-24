
var trs = document.getElementsByClassName("paciente");
 
for(var posi = 0; posi <= trs.length - 1; posi++){
     var nome = trs[posi].getElementsByClassName("info-nome")[0]; // pega tr do nome do paciente atual
     var peso = trs[posi].getElementsByClassName("info-peso")[0]; // pega tr do peso do paciente atual
     var altura = trs[posi].getElementsByClassName("info-altura")[0]; // pega tr do altura do paciente atual
     var imc = trs[posi].getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual
 
     var paciente = {
         nome : nome.textContent,
         peso : peso.textContent,
         altura : altura.textContent
     }
 
     if(paciente.altura != 0){
         var imcDoPaciente = paciente.peso / (paciente.altura * paciente.altura);
 
         imc.textContent = imcDoPaciente;
 
         console.log(imcDoPaciente); // 25
     }else{
         console("altura tem que ser diferente de zero");
     }
 
}