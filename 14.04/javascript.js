const precos={//dicionario
  "Martelo":19.90,
  "prego":10.90,
  "furadeira":119.90,
  "arame":59.90,
};

 const estoque={
  "Martelo":100,
  "prego":4,
  "furadeira":6,
  "arame":1000
 }

let qtd = document.getElementById("Quantidade").value;

console.log(qtd);

function Calcularpreco(){
  let qtd = document.getElementById("Quantidade").value;
  let escolha = document.getElementById("Produto").value;
  let valor
}