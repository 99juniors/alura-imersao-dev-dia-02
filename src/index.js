function Converter() {
  const valorInserido = parseFloat(document.getElementById('valor').value);
  const cotacaoDolar = 5;
  const valorConvertido = valorInserido * cotacaoDolar;

  const textoValorConvertido = "O valor convertido é: R$ " + valorConvertido;
  document.getElementById('valorConvertido').innerHTML = textoValorConvertido;
}