document.addEventListener('DOMContentLoaded', () => {
    const produtoInput = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotal = document.getElementById('valor-total');
    const botaoReiniciar = document.getElementById('botao-reiniciar');

    let total = 0;

    function adicionar() {
        const produtoSelecionado = produtoInput.value;
        const quantidade = parseInt(quantidadeInput.value, 10);

        if (!produtoSelecionado || isNaN(quantidade) || quantidade <= 0) {
            alert('Por favor, selecione um produto e insira uma quantidade válida.');
            return;
        }

        const [produtoNome, produtoPreco] = produtoSelecionado.split(' - R$');
        const preco = parseFloat(produtoPreco) * quantidade;

        const novoProduto = document.createElement('section');
        novoProduto.classList.add('carrinho__produtos__produto');
        novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${preco.toFixed(2)}</span>`;

        listaProdutos.appendChild(novoProduto);

        total += preco;
        valorTotal.textContent = `R$${total.toFixed(2)}`;
    }

    function reiniciar() {
        listaProdutos.innerHTML = '';
        total = 0;
        valorTotal.textContent = 'R$0.00';
    }

    if (botaoReiniciar) {
        botaoReiniciar.addEventListener('click', reiniciar);
    }

    window.adicionar = adicionar;
    window.reiniciar = reiniciar;
});
