
const notes = [
    {
      course: "edu fisic",
      note: 10,
      credit: 2
    },
    {
      course: "programacion",
      note: 8,
      credit: 5
    },
    {
      course: "finanzas personales",
      note: 7,
      credit: 5
    }
  ]
  
  //MULTIPLICAR CADA NUMERO DE LA LISTA POR SU PESO
  //aqui usamos map, creamos un nuevo arreglo de solo numeros a partir de multiplicar cada nota con sus creditos
  const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
  })
  console.log(notesWithCredit)
  //SUMAR TODOS LOS ELEMENTOS DEL ARREGLO DE ELEMENTOS MULTIPLICADOS POR SU PESO
  //notesWithCredito  es una nueva variable que tiene como resultado la suma de todos los elementos del arreglo sumOfNotesWithCredit
  //la funcion reduce recibe una funcion con dos parametros: el valor acumulado y el nuevo elemento de los arrays
  const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal){
    return sum + newVal;
  })
  console.log(sumOfNotesWithCredit)
  //SUMAR TODOS LOS PESOS (CREDITOS)
  //crear nuevo arreglo credits unicamente con los creditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sus elementos
  const credits = notes.map(function (noteObject) {
    return noteObject.credit;
  })
  console.log(credits)
  // nueva variable sumOfCredits que recorra el arreglo credits y sus elementos
  const sumOfCredits = credits.reduce(
  function (sum = 0, newVal){
    return sum + newVal;
  }
  );
  console.log(sumOfCredits)
  //DIVISION ENTRE AMBAS SUMAS
  //solo falta dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits
  const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits
  console.log(promedioPonderadoNotasConCreditos)