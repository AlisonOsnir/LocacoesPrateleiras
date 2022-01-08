function varreduraDisp() {
    for (let i = 0; i < keyList.length; i++) {
        if (locacoesObj[i]["disp"] == false) {
            ctx2.fillStyle = 'rgba(255, 255, 0)';
            //ctx2.drawImage(canvas2, 0, 0,)
            ctx2.fillRect(...locacoesObj[i]["area"]);
            ctx2.font = 'bold 13px calibri, sans-serif';
            ctx2.fillStyle = 'black';
            ctx2.fillText(locacoesObj[i]["produto"], (locacoesObj[i]["area"][0] + 9), locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3]*0.5);
        }
    }
}

function selecionaArea(evento) {
    let x = evento.pageX - canvas.offsetLeft;
    let y = evento.pageY - canvas.offsetTop;

    for (let i = areasAB; i < keyList.length; i++) {
        if (x >= locacoesObj[i]["area"][0] && x <= locacoesObj[i]["area"][0] + locacoesObj[i]["area"][2]
            && y >= locacoesObj[i]["area"][1] && y <= locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3]) {

             //apenas leva ao formulário preenchendo com locaçao selecionada, ao enviar e tornar disp==false a varreduraDisp atua   
            console.log(`${locacoesObj[i]["nome"]} selecionada!`);
            tornaIndisp(...locacoesObj[i]["area"], locacoesObj[i], locacoesObj[i]["produto"])
        }
    }
}
