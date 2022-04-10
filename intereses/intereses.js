
function interesSimple(capital, tasa, meses){
    var intereses = (capital * tasa * meses) / 100
    return intereses
  }

  
function interesCompuesto(capital, tasa, meses){
    var interesesComp = capital * (1 + (tasa/100))**meses;
    return interesesComp
  }


function calcularInteresSimple(){
    const input1 = document.getElementById("Input1")
    const value1 = input1.value;
    const input2 = document.getElementById("Input2")
    const value2 = input2.value; 
    const input3 = document.getElementById("Input3")
    const value3 = input3.value;
    const interesesRespuesta = interesSimple(value1, value2, value3)
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "tus intereses serán: " + interesesRespuesta + ' pesos'

}

function calcularInteresCompuesto(){
    const input1 = document.getElementById("Input1")
    const value1 = input1.value;
    const input2 = document.getElementById("Input2")
    const value2 = input2.value; 
    const input3 = document.getElementById("Input3")
    const value3 = input3.value;
    const interesCompRespuesta = interesCompuesto(value1, value2, value3)
    const resultP = document.getElementById("ResultP")
    resultP.innerText = 'tu interes compuesto es de: ' + interesCompRespuesta + ' pesos'

}