function converterRealParaDolar() {
  const valorInserido = parseFloat(document.getElementById('valorRealParaDolar').value);
  const cotacaoDolar = 5;
  const valorConvertido = valorInserido * cotacaoDolar;
  const textoValorConvertido = "O valor convertido é: R$ " + valorConvertido;
  document.getElementById('valorConvertido').innerHTML = textoValorConvertido;
}

function converterRealParaEuro() {
  const valorInserido = parseFloat(document.getElementById('valorRealParaEuro').value);
  const cotacaoDolar = 5.52;
  const valorConvertido = (valorInserido / cotacaoDolar).toFixed(2);
  const textoValorConvertido = "O valor convertido é: EUR " + valorConvertido;
  document.getElementById('valorConvertido').innerHTML = textoValorConvertido;
}

