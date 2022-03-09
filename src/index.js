function converterRealParaDolar() {
  const valorInserido = parseFloat(document.getElementById('valorRealParaDolar').value);
  const cotacaoDolar = 5;
  const cotacaoBitcoin = 197142.05;
  const valorConvertido = (valorInserido / cotacaoDolar).toFixed(2);
  const valorEmBitcoin = valorInserido / cotacaoBitcoin;

  const textoValorConvertido = "O valor convertido em Dólar é: U$ " + valorConvertido;
  const textoValorConvertidoEmBitcoin = "O valor convertido em BTC é: BTC " + valorEmBitcoin;

  document.getElementById('valorConvertido').innerHTML = textoValorConvertido;
  document.getElementById('valorConvertidoEmBitcoin').innerHTML = textoValorConvertidoEmBitcoin;
}

function converterRealParaEuro() {
  const valorInserido = parseFloat(document.getElementById('valorRealParaEuro').value);
  const cotacaoEuro = 5.52;
  const cotacaoBitcoin = 197142.05;
  const valorConvertido = (valorInserido / cotacaoEuro).toFixed(2);
  const valorEmBitcoin = valorInserido / cotacaoBitcoin;

  const textoValorConvertido = "O valor convertido em EUR é: € " + valorConvertido;
  const textoValorConvertidoEmBitcoin = "O valor convertido em BTC é: BTC " + valorEmBitcoin;

  document.getElementById('valorConvertido').innerHTML = textoValorConvertido;
  document.getElementById('valorConvertidoEmBitcoin').innerHTML = textoValorConvertidoEmBitcoin;
}

