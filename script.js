// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, descricao, preco) {
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
    }
  
    mostrarProduto() {
      return `
        <h2><strong>${this.nome}</strong></h2>
        <h3>${this.descricao}</h3>
        <h1>${this.preco}</h1>
      `;
    }
  }
  
  class ProdutoDestaque extends Produto {
    constructor(nome, descricao, preco, imagem1) {
      super(nome, descricao, preco);
      this.imagem1 = imagem1;
    }
  
    mostrarProdutoDestaque() {
      return `
        <div class="row">
          <div id="" class="col order-last">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
              <h1><strong>${this.nome}</strong></h1>
              <img src="${this.imagem1}">
              <h3>${this.descricao}</h3>
              <h1>${this.preco}</h1>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  const produto = new ProdutoDestaque(
    "Red Doublegibson",
    "Gibson EDS-1275 Cherry Double Neck 5.03kg 1992 Electric Guitar with HD F/S Accessories",
    "$58.815",
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgZz3UxLuyPpBkm89KSlkjXp0_JXtOT6mFboYOkIZD2rhCgEN06d-oyAn65qjZXWyx3jAIYDYPWe4Da9varooZTJpvOBmtrAERicSHY7l_&usqp=CAE'
  );
  console.log(produto.mostrarProdutoDestaque());
  
  const produtoDestaque = document.getElementById("produtoDestaque");
  produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque());
  
  const prodsec = new ProdutoDestaque(
    "Fender Stratocaster",
    "Fender Stratocaster Sunburst Electric Guitar",
    "$2999.99"
  );
  console.log(prodsec.mostrarProdutoDestaque());
  
  const produtosec = document.getElementById("produtosec");
  produtosec.insertAdjacentHTML('afterbegin', prodsec.mostrarProduto());
  
  const prodterc = new ProdutoDestaque(
    "Gibson Black Ebony",
    "Gibson Flying V B-2 Satin Ebony Guitar",
    "$19999.99"
  );
  console.log(prodterc.mostrarProdutoDestaque());
  
  const produtoterc = document.getElementById("produtoterc");
  produtoterc.insertAdjacentHTML("afterbegin", prodterc.mostrarProduto());
  
  const prodquar = new ProdutoDestaque(
    "PRS Custom 24",
    "PRS Custom 24 Blue Burst Electric Guitar",
    "$2999.99"
  );
  console.log(prodquar.mostrarProdutoDestaque());
  
  const produtoquar = document.getElementById("produtoquar");
  produtoquar.insertAdjacentHTML("afterbegin", prodquar.mostrarProduto());
  
  const prodquin = new ProdutoDestaque(
    "Ibanez RG550",
    "Ibanez RG550 Genesis Collection Desert Sun Yellow Electric Guitar",
    "$1499.99"
  );
  console.log(prodquin.mostrarProdutoDestaque());
  
  const prodquinElemento = document.getElementById("prodquin");
  prodquinElemento.insertAdjacentHTML('afterbegin', prodquin.mostrarProduto());
  
  const prodsex = new ProdutoDestaque(
    "Gretsch G2622 Streamliner",
    "Gretsch G2622 Streamliner Center Block Double Electric Guitar",
    "$799.99"
  );
  console.log(prodsex.mostrarProdutoDestaque());
  
  const prodsexElemento = document.getElementById("prodsex");
  prodsexElemento.insertAdjacentHTML('afterbegin', prodsex.mostrarProduto());
  
  const prodset = new ProdutoDestaque(
    "Epiphone Les Paul",
    "Epiphone Les Paul Standard '50s Electric Guitar",
    "$599.99"
  );
  console.log(prodset.mostrarProdutoDestaque());
  
  const prodsetElemento = document.getElementById("prodset");
  prodsetElemento.insertAdjacentHTML('afterbegin', prodset.mostrarProduto());
  