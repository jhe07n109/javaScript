const precos = {
    prego: 0.5,
    martelo: 25,
    furadeira: 150,
    arame: 10
  };

  function calcularPreco() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const resultado = document.getElementById("resultado");

    if (!produto || isNaN(quantidade) || quantidade <= 0) {
      resultado.textContent = "Preencha os campos corretamente.";
      return;
    }

    const precoUnitario = precos[produto];
    const total = precoUnitario * quantidade;

    resultado.textContent = Preço total: R$ ${total.toFixed(2)};
}