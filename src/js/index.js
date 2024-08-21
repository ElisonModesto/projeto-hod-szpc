const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarEAtivarBotaoSelecionado(botao);

        EsconderEMostrarImagemDeFundo(indice);

        esconderEMostrarInformacoesAtivas(indice);
    })
})

function esconderEMostrarInformacoesAtivas(indice) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
    informacoes[indice].classList.add("ativa");
}

function EsconderEMostrarImagemDeFundo(indice) {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
    imagens[indice].classList.add("ativa");
}

function desativarEAtivarBotaoSelecionado(botao) {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
}
