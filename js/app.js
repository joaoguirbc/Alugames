function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name').textContent;

     if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert(`O jogo ${nomeJogo} foi devolvido.`);
     } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
     }
}

function qtdJogosAlugados() {
    let quantidade = 0
    for (let i = 1; i < 4; i++) {
        jogo = document.getElementById(`game-${id}`);
        if (jogo.classList.contains('dashboard__item__img--rented')) {
            quantidade++
        }
    }
    return quantidade
}

console.log(qtdJogosAlugados())