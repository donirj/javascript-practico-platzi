
function calcularDescuento(precio, descuento) {
  const descuentoCompleto = (descuento *  precio / 100)
  const precioFinal = precio - descuentoCompleto
  return precioFinal
}

function onClickButtonPriceDiscount() {
  const inputPrecio = document.getElementById("InputPrecio");
  const value1 = inputPrecio.value;
  const inputDescuento = document.getElementById("InputDescuento");
  const value2 = inputDescuento.value;
  const precioFinalConDescuento = calcularDescuento(value1, value2)
  const resultP = document.getElementById("ResultP")
  resultP.innerText = 'el precio final de tu producto es: ' + precioFinalConDescuento
    
}
