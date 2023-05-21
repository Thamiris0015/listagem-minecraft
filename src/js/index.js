const BotaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

BotaoAlterarTema.addEventListener("click", () => {
    const ModoNetherEstaAtivo = body.classList.contains("modo-nether");

    if (ModoNetherEstaAtivo) {
        body.classList.remove("modo-nether");

        ImagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/cubo-de-terra.png")

    } else {
        body.classList.add("modo-nether")
    
        ImagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/cubo-nether.png");
    
    }
});  