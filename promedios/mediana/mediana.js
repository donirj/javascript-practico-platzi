function calculaMediaAritmetica(lista){
  // let sumaLista = 0;
  // for (let i = 0; i < lista1.length; i++) {
  //     sumaLista = sumaLista + lista[i];
  // }
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
      }
  )
  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1
}
//CONVERTIR TODO EL CODIGO EN UNA SOLA FUNCION 
//PARA CALCULAR LA MEDIANA DE CUALQUEIR LISTA ENVIADA 
//COMO ARGUMENTO A NUESTRA FUNCION, QUE PUEDE LLAMARSE CALCULARMEDIANA

//2 RETO: CASO DE MEJORA, NUESTRA LISTA DE MEJORA TIENE QUE
//ESTAR ORDENADA, ORDENAR LA LISTA ANTES DE VER SI ES PAR O 
//IMPAR Y TAMBIEN USAR SORT
const lista1 = [
    10,
    20,
    50
]


function esPar(numerito) {
  if(numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista1) {
  //ordena los numeros
    var numerosOrdenados = lista1.sort(function(a,b){
      return a - b;
    });
      //mitadLista1 dice cuanto es la mitad de la lista
    //parseInt le está quitando los decimales
    const mitadLista1 = parseInt(numerosOrdenados.length / 2);
    
    //nueva variable a usar dentro del if
  let mediana;
    if(esPar(numerosOrdenados.length)){
      //busca el elemento anterior a la mitad de la lista
    const elemento1 = numerosOrdenados[mitadLista1 - 1];
    //busca la mitad de la lista
    const elemento2 = numerosOrdenados[mitadLista1];
    //le enviamos en un array elemento1 y elemento2
    const promedioElemento1y2 = calculaMediaAritmetica([elemento1,elemento2,])
    mediana = promedioElemento1y2
  } else {
    mediana = lista1[mitadLista1];
  }
    return mediana;
}




// //mitadLista1 dice cuanto es la mitad de la lista
// //parseInt le está quitando los decimales
// const mitadLista1 = parseInt(lista1.length / 2);
// console.log(mitadLista1)

// function esPar(numerito) {
//   if(numerito % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //nueva variable a usar dentro del if
// let mediana

// if(esPar(lista1.length)){
//     //busca el elemento anterior a la mitad de la lista
//   const elemento1 = lista1[mitadLista1 - 1];
//   //busca la mitad de la lista
//   const elemento2 = lista1[mitadLista1];

//   //le enviamos en un array elemento1 y elemento2
//   const promedioElemento1y2 = calculaMediaAritmetica([
//       elemento1,
//       elemento2,
//   ])
//   mediana = promedioElemento1y2
// } else {
//   mediana = lista1[mitadLista1];
// }


// function calculaMediaAritmetica(lista){
//   // let sumaLista = 0;
//   // for (let i = 0; i < lista1.length; i++) {
//   //     sumaLista = sumaLista + lista[i];
//   // }
//   const sumaLista = lista.reduce(
//       function (valorAcumulado = 0, nuevoElemento) {
//           return valorAcumulado + nuevoElemento;
//       }
//   )
//   const promedioLista1 = sumaLista / lista.length;
//   return promedioLista1
// }