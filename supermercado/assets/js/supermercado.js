
let itens = [];

document.querySelector('.lista-cadrastro input[type=submit]')
    .addEventListener('click', () => {
        let nomeProduto = document.querySelector('input[name=nome_produto]');
        let precoProduto = document.querySelector('input[name=price]');

        itens.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        /*
        <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>R$ 20,00</span></h3>
        </div>
        */
        let listaProdutos = document.querySelector('.lista-produtos');
        listaProdutos.innerHTML = ""; //esvazia o loop
        let soma = 0;

        itens.map(val => {
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML += `
            <div class="lista-produto-single">
            <h3>`+ val.nome + `</h3>
            <h3 class="price-produto"><span>R$ `+ val.valor + `</span></h3>
        </div>
            `;
        });

        soma = soma.toFixed(2);
        nomeProduto.value = "";
        precoProduto.value = "";

        let elementoSoma = document.querySelector('.soma-produto h3');
        elementoSoma.innerHTML = `R$` +soma
    })

document.querySelector('button[name=limpar]')
    .addEventListener('click', () => {
        itens = [];
        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produto h3').innerHTML = `R$ 0,00`;
        
        
    })

