AOS.init();

const dataDoAniversario = new Date ("Aug 11, 2023 20:00:00");
const stampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval (function(){
    const agora = new Date();
    const stampeAgora = agora.getTime();

    const tempoParaOEvento = stampDoAniversario - stampeAgora;

    const diasParaOEvento = Math.floor(tempoParaOEvento / (1000 * 60 * 60 * 24));
    const horasParaOEvento = Math.floor((tempoParaOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosParaOEvento = Math.floor((tempoParaOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosParaOEvento = Math.floor((tempoParaOEvento % (1000 * 60)) / 1000);

    document.getElementById('contagem').innerHTML = `${diasParaOEvento} dias, ${horasParaOEvento}:${minutosParaOEvento}:${segundosParaOEvento}`;

    if (tempoParaOEvento < 0) {
        document.getElementById('contagem').innerHTML = `Até o proximo ano`;
    }
},1000)
