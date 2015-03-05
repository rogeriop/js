

var botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", function() {

     event.preventDefault(); 
     var cNome = document.querySelector("#campo-nome");
     var cPeso = document.querySelector("#campo-peso");
     var cAltura = document.querySelector("#campo-altura");
 
    
 
     var novoPaciente = "<tr class='paciente'>"+
                    "<td class='info-nome'>"+cNome.value+"</td>"+
                    "<td class='info-peso'>"+cPeso.value+"</td>"+
                    "<td class='info-altura'>"+cAltura.value+"</td>"+
                    "<td class='info-imc'>"+cPeso.value/(cAltura.value*cAltura.value)+"</td>"+
                "</tr>";
    
    
    var todosOsPacientes = document.querySelector("table");
    todosOsPacientes.innerHTML = todosOsPacientes.innerHTML + novoPaciente;
    
    cNome.value = "";
    cPeso.value = "";
    cAltura.value = "";
    
});



