function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsius = parseFloat(valor);
  console.log(valorEmCelsius);

  var valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
  console.log(valorEmCelsius);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A Temperatura em Fahrenheit é " + valorEmFahrenheit;
  elementoValorConvertido.innerHTML = valorConvertido;
}