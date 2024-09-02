const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qualquer hospital pode fazer aborto legal?"
        alternativas: [
            "Sim, qualquer hospital plenamente habilitado e inscrito no sistema de saúde da Vigilância Sanitária pode fazer qualquer procedimento legal vigente no país, inclusive os hospitais privados."

            "Não pois é errado."
        ]
    },
    {
        enunciado: " Em quais casos o aborto é permitido no Brasil?",
        alternativas: [
            "Se a gravidez é decorrente de estupro.",
            "Em nenhum caso é permitido.",
        ]
    },
    {
        enunciado: "Quem deve oferecer o serviço de aborto?",
        alternativas: [
            "Qualquer hospital que ofereça serviços de ginecologia e obstetrícia deve ter equipamento adequado.",
            "Nenhum hospital pode oferecer o serviço de aborto."
        ]
    },
    
        
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();