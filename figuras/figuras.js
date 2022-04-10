//cuadrado
console.group("cuadrados")
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log('el perimetro del cuadrado es :' + perimetroCuadrado + "cm")

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd("cuadrados")

//TRIANGULO
console.group("triangulos")

function perimetroTriangulo(ladoTri1, ladoTri2, baseTri3){
    return ladoTri1 + ladoTri2 + baseTri3
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd("triangulos")

//CIRCULO
console.group("circulos")
//pi
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
}
console.log("pi es: " + PI)
//perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd("circulos")

//RECTANGULO
function perimetroRectangulo(baseRect, alturaRect){
    return (baseRect * 2) + (alturaRect * 2)
}

function areaRectangulo(baseRect, alturaRect){
    return baseRect * alturaRect
}

//interaccion con html
//PERIMETROS
//CUADRADO
function calcularPerimetroCuadrado() {
    //este es el input donde metes el valor
    const input = document.getElementById("InputCuadrado");
    //este es el valor que va en el input
    const value = input.value;
    //mi funcion de perimetro que hice arriba
    const perimetro = perimetroCuadrado(value);
    const resultP = document.getElementById("ResultP")
    resultP.innerText = 'el perimetro de tu cuadrado es: ' + perimetro
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resultP = document.getElementById("ResultP")
    resultP.innerText = 'el area de tu cuadrado es: ' + area
}
//TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTriangulo3");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    const resultT = document.getElementById("ResultT")
    resultT.innerText = 'el perimetro de tu triangulo es: ' + perimetro
}
//TRIANGULO
function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangulo3");
    const value3 = Number(base.value);
    const altura = document.getElementById("InputTriangulo4");
    const value4 = Number(altura.value);
    const area = areaTriangulo(value3, value4);
    const resultT = document.getElementById("ResultT")
    resultT.innerText = 'el area de tu cuadrado es: ' + area
}
//CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const resultC = document.getElementById("ResultC")
    resultC.innerText = 'el perimetro de tu circulo es: ' + perimetro
}
//CIRCULO
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    const resultC = document.getElementById("ResultC")
    resultC.innerText = 'el area de tu circulo es: ' + area
}
//RECTANGULO
function calcularPerimetroRectangulo(){
    const input1 = document.getElementById("alturaRectangulo");
    const value = input1.value;
    const input2 = document.getElementById("baseRectangulo");
    const value2 = input2.value
    const perimetro = perimetroRectangulo(value, value2)
    const resultRect = document.getElementById("ResultRect")   
    resultRect.innerText = 'el perimetro de tu rectangulo es: ' + perimetro
}
//RECTANGULO
function calcularAreaRectangulo(){
    const input1 = document.getElementById("alturaRectangulo");
    const value = input1.value;
    const input2 = document.getElementById("baseRectangulo");
    const value2 = input2.value
    const area = areaRectangulo(value, value2)
    const resultRect = document.getElementById("ResultRect")   
    resultRect.innerText = 'el perimetro de tu rectangulo es: ' + area
}