function varreduraDisp() {
    for (let i = 0; i < keyList.length; i++) {
        if (locacoesObj[i]["status"]) {
            ctx2.fillStyle = 'rgba(255, 255, 0)';
            //ctx2.drawImage(canvas2, 0, 0,)
            ctx2.fillRect(...locacoesObj[i]["area"]);
            ctx2.font = 'bold 13px calibri, sans-serif';
            ctx2.fillStyle = 'black';
            ctx2.fillText(locacoesObj[i]["produto"],(locacoesObj[i]["area"][0] + 7), locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3] * 0.57);
        }
    }
}

/*Se varreduraDisp() atuar corretamente se tornara desnessesario.*/
function tornaIndisp(x, y, w, h, produto) {
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.fillRect(x, y, w, h);
    ctx.font = 'bold 13px calibri, sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(produto, x + 7, y + h * 0.57);
}

let indexObj = null;
function selecionaArea(evento) {
    let x = evento.pageX - canvas.offsetLeft;
    let y = evento.pageY - canvas.offsetTop;

    for (let i = areasAB; i < keyList.length; i++) {
        if (x >= locacoesObj[i]["area"][0] && x <= locacoesObj[i]["area"][0] + locacoesObj[i]["area"][2]
            && y >= locacoesObj[i]["area"][1] && y <= locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3]) {

            indexObj = i;

            //Exibir locacoesObj[areaSelecinada][nome] no formulário e focar no campo produto
            console.log(`Indice ${indexObj}, locaçao ${locacoesObj[indexObj]["nome"]} foi selecionado!`);
            floc.value = indexObj;
            flocname.value = locacoesObj[indexObj]["nome"];
            fprod.focus();
        }
    }
}

