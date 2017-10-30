const produto = {
  nome: 'Caneta BIC azul',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  // operador spread
  return { ...objeto }
}

const novoProduto = clone(produto);

novoProduto.nome = 'Caneta BIC preta';

console.log(produto, novoProduto);
