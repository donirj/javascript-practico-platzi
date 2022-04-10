const lista1 = [
    100,
    200,
    300,
    500,
];

//PROMEDIO
function calculaMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    //llama al parametro lista, y reduce recibe una funcion como argumento
    //este metodo permite ir sumando cada elemento
    const sumaLista = lista.reduce(
    //esta es la funcion que recibe el valor acumulado
    //valorAcumulado es lo que se va sumando en cada iteracion
    //el valor por defecto de valorAcumulado es 0, mientras no reciba nada
    //hay un segundo parametro que es nuevoElemento, es el valor del elemento actual
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1
}