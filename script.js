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

function criarProdutoDestaque(nome, descricao, preco, imagem) {
  try {
    if (nome && descricao && preco && imagem) {
      const produtoDestaque = new ProdutoDestaque(nome, descricao, preco, imagem);
      const produtoDestaqueElemento = document.getElementById("produtoDestaque");
      produtoDestaqueElemento.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());
    } else {
      throw new Error("Todos os campos devem ser preenchidos!");
    }
  } catch (error) {
    console.log("Erro ao criar produto destaque:", error.message);
  }
}

function criarProduto(nome, descricao, preco) {
  try {
    if (nome && descricao && preco) {
      const produto = new Produto(nome, descricao, preco);
      const produtoElemento = document.createElement("div");
      produtoElemento.innerHTML = produto.mostrarProduto();
      document.body.appendChild(produtoElemento);
    } else {
      throw new Error("Todos os campos devem ser preenchidos!");
    }
  } catch (error) {
    console.log("Erro ao criar produto:", error.message);
  }
}

const nome = "Red Doublegibson";
const descricao = "Gibson EDS-1275 Cherry Double Neck 5.03kg 1992 Electric Guitar with HD F/S Accessories";
const preco = "$58.815";
const imagem = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgZz3UxLuyPpBkm89KSlkjXp0_JXtOT6mFboYOkIZD2rhCgEN06d-oyAn65qjZXWyx3jAIYDYPWe4Da9varooZTJpvOBmtrAERicSHY7l_&usqp=CAE";

criarProdutoDestaque(nome, descricao, preco, imagem);

const prodsec = new Produto(
  "Fender Stratocaster",
  "Fender Stratocaster Sunburst Electric Guitar",
  "$2999.99"
);
console.log(prodsec.mostrarProduto());

const produtosec = document.getElementById("produtosec");
produtosec.insertAdjacentHTML('afterbegin', prodsec.mostrarProduto());

const prodterc = new Produto(
  "Gibson Black Ebony",
  "Gibson Flying V B-2 Satin Ebony Guitar",
  "$19999.99"
);
console.log(prodterc.mostrarProduto());

const produtoterc = document.getElementById("produtoterc");
produtoterc.insertAdjacentHTML("afterbegin", prodterc.mostrarProduto());

const prodquar = new Produto(
  "PRS Custom 24",
  "PRS Custom 24 Blue Burst Electric Guitar",
  "$2999.99"
);
console.log(prodquar.mostrarProduto());

const produtoquar = document.getElementById("produtoquar");
produtoquar.insertAdjacentHTML("afterbegin", prodquar.mostrarProduto());

const prodquin = new Produto(
  "Ibanez RG550",
  "Ibanez RG550 Genesis Collection Desert Sun Yellow Electric Guitar",
  "$1499.99"
);
console.log(prodquin.mostrarProduto());

const prodquinElemento = document.getElementById("prodquin");
prodquinElemento.insertAdjacentHTML('afterbegin', prodquin.mostrarProduto());

const prodsex = new Produto(
  "Gretsch G2622 Streamliner",
  "Gretsch G2622 Streamliner Center Block Double Electric Guitar",
  "$799.99"
);
console.log(prodsex.mostrarProduto());

const prodsexElemento = document.getElementById("prodsex");
prodsexElemento.insertAdjacentHTML('afterbegin', prodsex.mostrarProduto());

const prodset = new Produto(
  "Epiphone Les Paul",
  "Epiphone Les Paul Standard '50s Electric Guitar",
  "$599.99"
);
console.log(prodset.mostrarProduto());

const prodsetElemento = document.getElementById("prodset");
prodsetElemento.insertAdjacentHTML('afterbegin', prodset.mostrarProduto());
