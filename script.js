// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, descricao, preco){ 
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
}
mostrarProduto(){
 return this.nome + this.descricao + "R$" + this.preco;
 
}

}
class ProdutoDestaque extends Produto{ 
    constructor(nome, descricao, preco, imagem){ 
        super(nome, descricao, preco);
        this.imagem = imagem;
    }

    mostrarProdutoDestaque() {
        return `
            <h1>${this.nome} </h1>
            <h1>${this.descricao} </h1>
            <h1>${this.preco} </h1>
            <h1>${this.imagem} </h1>
        `
    }
}

const produtoDestaque = new ProdutoDestaque("Bolsa de couro: ", "Preta, pequena e de porte chique para festas", "230" , 'https://www.schiaparelli.com/img/modules/2022/10/duo-1117-635a58dfd717f.jpeg?frz-v=114');


  const produto = document.getElementById("produto-destaque");
  produto.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());