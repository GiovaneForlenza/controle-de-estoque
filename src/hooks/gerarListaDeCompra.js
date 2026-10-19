export function gerarListaDeCompra(itens) {
  let listaDeCompra = `
Lista de compra
Criada dia ${new Date().toLocaleDateString("pt-BR")}
Itens pra comprar: ${itens.length}
Valor total da compra estm.: R$${valorTotalDaCompra(itens)}\n
Itens a serem comprados: 
  ${itensASeremComprados(itens)}`;

  console.log(listaDeCompra);
  navigator.clipboard
    .writeText(listaDeCompra)
    .then(() => {
      console.log("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}

function valorTotalDaCompra(itens) {
  let valorTotal = 0;
  itens.forEach((item) => {
    valorTotal += item.preco * (item.quantidade_ideal - item.quantidade);
  });
  return valorTotal;
}

function itensASeremComprados(itens) {
  let listaTotal = "";
  let idx = 1;
  itens.forEach((item) => {
    listaTotal += `  ${idx}: ${item.nome}
        Qnt.: ${item.quantidade_ideal - item.quantidade}
        Valor indiv. R$${item.preco}
        Valor total estim. R$${item.preco * (item.quantidade_ideal - item.quantidade)}\n`;
    idx++;
  });
  return listaTotal;
}
