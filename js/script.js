let produtos = [
  {
    id: 0,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_goku_deus_super_sayajin_dragon_ball_laranja_71840_1_20201211172218.jpg",

    produto: "Dragon Ball",
    valor: 60.0,
  },
  {
    id: 1,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_shenlong_dragao_magico_dragon_ball_anime_manga_goku_preto_122621_variacao_45291_2_30721f5d877764b31d7a2511c99fd546.jpg",
    produto: "Shenlong",
    valor: 80.0,
  },
  {
    id: 2,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_personagens_street_fighter_ii_2_capcom_arcade_games_preta_128043_1_5ccc6b623ae3f7fd17e8043bf3730650.jpg",
    produto: "Street Fighter",
    valor: 120.0,
  },
  {
    id: 3,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_tokusatsu_jaspion_kamen_rider_flashman_power_rangers_preto_128031_1_79e44a979ea2586ba6329d4a49f7492d.jpg",
    produto: "Jaspion Kamen Rider",
    valor: 60.0,
  },
  {
    id: 4,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_hadouken_shoryuken_tatratrektrugem_street_fighter_meme_branca_128049_1_bd532e7aefcc6d1563723c73d989a7a3.jpg",
    produto: "Street Fighter Meme",
    valor: 90.0,
  },
  {
    id: 5,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camisa_camiseta_feminina_preta_link_treeforce_the_legend_of_zelda_cd_132387_1_34f334665ed888fde264443731b32b37.jpg",
    produto: "The Legend of Zelda",
    valor: 90.0,
  },
  {
    id: 6,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_grogu_baby_yoda_imperial_police_mug_shot_star_wars_preta_cd_105019_1_caccae457558fd439d483392019adeb6.jpg",
    produto: "Baby Yoda ",
    valor: 67.0,
  },
  {
    id: 7,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_deadpool_venom_avengers_vingadores_justiceiro_thor_cinza_chumbo_cd_105025_1_5accac17fd43e63ab0dbdb567057b2c1.jpg",
    produto: " Avengers  ",
    valor: 120.0,
  },
  {
    id: 8,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_don_vito_corleone_el_padrino_o_poderoso_chefao_mafioso_the_godfather_preta_102083_1_44e6425b0af800f4865273ff2817e379.jpg",
    produto: "O Poderoso Chefão",
    valor: 150.0,
  },
];

function lerProdutos() {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  produtos.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="./assets/images/lixo.png" alt="Ícone do Lixo" onclick="deleteProduto(${
                      produto.id
                    })">
                    <img class="editar" src="./assets/images/editar.png" alt="Ícone de Edição" onclick="updateProduto(${
                      produto.id
                    })">
                </div>
            </div>
        `;
    cards.appendChild(card);
  });
}

function createProduto() {
  const form = document.getElementById("form-produto");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const imagem = document.getElementById("imagem").value;
    if (nome && valor && imagem) {
      const novoProduto = {
        id: produtos.length,
        imagem,
        produto: nome,
        valor,
      };
      produtos.push(novoProduto);
      lerProdutos();
      form.reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
}

function deleteProduto(id) {
  if (confirm("Tem certeza que deseja excluir o produto?")) {
    produtos = produtos.filter((produto) => produto.id !== id);
    lerProdutos();
    if (produtos.length === 0) {
      alert("Nenhum produto encontrado!");
    }
  }
}

function updateProduto(id) {
  const produto = produtos.find((produto) => produto.id === id);
  if (produto) {
    const nome = prompt("Novo nome do produto:");
    const valor = parseFloat(prompt("Novo valor do produto:"));
    const imagem = prompt("Nova imagem do produto:");
    if (nome && valor && imagem) {
      produto.produto = nome;
      produto.valor = valor;
      produto.imagem = imagem;
      lerProdutos();
      alert("Produto atualizado com sucesso!");
    } else {
      alert("Produto não encontrado!");
    }
  }
}

lerProdutos();

createProduto();
