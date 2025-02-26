document.addEventListener('DOMContentLoaded', () => {
    const produtoInput = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotal = document.getElementById('valor-total');
    const botaoReiniciar = document.getElementById('botao-reiniciar'); // Certifique-se de ter esse botão no HTML

    let total = 0; // Valor inicial

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
        listaProdutos.innerHTML = ''; // Remove todos os produtos da lista
        total = 0; // Reseta o total
        valorTotal.textContent = 'R$0.00'; // Atualiza o total exibido
    }

    // Adiciona evento ao botão reiniciar, se existir
    if (botaoReiniciar) {
        botaoReiniciar.addEventListener('click', reiniciar);
    }

    // Expor funções globalmente se necessário
    window.adicionar = adicionar;
    window.limpar = limpar;
    window.reiniciar = reiniciar;
});
