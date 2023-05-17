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



  const produto = new ProdutoDestaque("Doublegibson vermelha: ", "Gibson EDS-1275 Braço Duplo Cereja 5.03kg 1992 Guitarra elétrica com estojo rígido F/S", 58.815 , 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgZz3UxLuyPpBkm89KSlkjXp0_JXtOT6mFboYOkIZD2rhCgEN06d-oyAn65qjZXWyx3jAIYDYPWe4Da9varooZTJpvOBmtrAERicSHY7l_&usqp=CAE');
  console.log(produto.mostrarProdutoDestaque());
  
  const produtoDestaque = document.getElementById("produtoDestaque");
  produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque());