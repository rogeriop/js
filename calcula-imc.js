function montaPaciente (tr) {

     var nome = tr.getElementsByClassName("info-nome")[0]; // pega tr do nome do paciente atual
     var peso = tr.getElementsByClassName("info-peso")[0]; // pega tr do peso do paciente atual
     var altura = tr.getElementsByClassName("info-altura")[0]; // pega tr do altura do paciente atual
 
     var paciente = {
         nome : nome.textContent,
         peso : peso.textContent,
         altura : altura.textContent,
         pegaImc : function() {
                        if(this.altura != 0){
                             var imcDoPaciente = this.peso / (this.altura * this.altura);
                             return imcDoPaciente;
                         }else{
                             console("altura tem que ser diferente de zero");
                         }
         
                    }
     
     }
    return paciente;
}

function percorreArray (array, comportamento) {

    for(var posi = 0; posi <= array.length - 1; posi++){
        var trPaciente = array[posi];
        comportamento(trPaciente);
    }
}


function calculaTodosImcs () {
    
    var trs = document.getElementsByClassName("paciente");

    percorreArray(trs, function(trPaciente){

        var paciente = montaPaciente(trPaciente);
        imcCalculado =  paciente.pegaImc();
        var trImc = trPaciente.getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual
        trImc.textContent = imcCalculado;

        console.log(imcCalculado); // 25


    });

}

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", calculaTodosImcs);
botao.addEventListener("click", function(){
    console.log("Botão que calcula IMCs foi clicado")});


//for(var posi = 0; posi <= trs.length - 1; posi++){
//
//    var trPaciente = trs[posi];
//    var trImc = trPaciente.getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual
//
//    var paciente = montaPaciente(trPaciente);
//    imcCalculado =  paciente.pegaImc();
//    trImc.textContent = imcCalculado;
//
//    console.log(imcCalculado); // 25
// 
//}
    
