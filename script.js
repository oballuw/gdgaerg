const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você quer ajudar o planeta?",
        alternativas: [
            {
                texto: "eu não quero!",
                afirmacao: "Você não tem empatia"
            },
            {
                texto: "eu quero!",
                afirmacao: "Você tem empatia"
            }
        ]
    },
    {
        enunciado: "Você se importa com o meio ambiente?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: ",uma boa pessoa"
            },
            {
                texto: "não",
                afirmacao: ",uma má pessoa"
            }
        ]
    },
    {
        enunciado: "Quando você come algo com uma embalagem de papel e não tem um lixo perto,o que você faz??",
        alternativas: [
            {
                texto: "jogo na rua",
                afirmacao: ",não se importa com nada"
            },
            {
                texto: "guardo no bolso até achar um lixo",
                afirmacao: ",se importa com os mínimos detalhes"
            }
        ]
    },
    {
        enunciado: "Você já jogou algum lixo na rua? ",
        alternativas: [
            {
                texto: "Não",
                afirmacao: ",uma lenda"
            },
            {
                texto: "Sim",
                afirmacao: ",não liga para consequências"
            }
        ]
    },
    {
        enunciado: "Você se importa com o aquecimento global?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "e uma pessoa padrão na sociedade"
            },
            {
                texto: "Sim",
                afirmacao: "e com bom senso"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Em resumo, o estado do ambiente em 2049 dependerá de uma interação complexa de progresso tecnológico, decisões políticas, escolhas sociais e cooperação global. Embora os desafios sejam grandes, há também potencial para uma transformação positiva através da inovação e da acção colectiva para garantir um futuro sustentável para o nosso planeta.";
}

mostraPergunta();