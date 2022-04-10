const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    4,
    4,
    4,
    1

]

function calcularMedia() {

    const lista1Count = {};
  //lista de cuantas veces aparece cada elemento
  //en nuestra lista
  lista1.map(
    function (elemento) {
        //quiero saber si el elemento dentro del array ya existe
      if (lista1Count[elemento]) {
          //lista1Count es nuestro elemento, [elemento] es el valor que va guardar
          //se le va sumar 1 al valor que ya estaba guardado
        lista1Count[elemento] += 1;
      } else {
        //cuando el elemento no exista todavia, vamos a crearlo y que aparezca 1 vez
        lista1Count[elemento] = 1;
      }
    }
  );

  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1]
    return moda
}

//lista count va ser convertido en un array de nuevo
//a object entries le enviamos como argumento el objeto que queremos volver array
// const lista1Array = Object.entries(lista1Count).sort(
//   //sort recibe una funcion anonima
//   //esta funcion recibe dos parametros
//   //queremos devolver 1 cuando nuestro nuevo valor sea mayor al valor acumulado
//   //si son iguales, va devolver cero
//   //si valorAcumulado es mayor que nuevoValor devuelve menos 1
//   function (valorAcumulado, nuevoValor) {
//     //si valorAcumulado es mayor que nuevoValor va seguir siendo positivo
//     //si son iguales, da 0
//     //si nuevoValor es mayor, dara numero negativo
//     valorAcumulado - nuevoValor
//   }
// );