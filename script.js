let indexObj;
let color;
const colors = [['yellow'],['lightgreen'],['crimson']]
const InicioBotoesCanvas = 70;
const quantidadeBotoesCanvas = 5;

function varreduraIndispStorage() {
    for (let i = 0; i < keyList.length; i++) {
        if (localStorage.getItem(i) !== null) {
            let retornoStorage = localStorage.getItem(i);
            let objRetornado = JSON.parse(retornoStorage);
            if (objRetornado['status'] == null) {
                localStorage.removeItem(i);
            } else {
                changeColor(objRetornado['status']);
                tornaIndisp(...objRetornado['area'], objRetornado['produto'], color);
            }
        }
    }
}

function changeColor (statusObj) {
    if (statusObj == 'liberado'){ color = colors[0]};
    if (statusObj == 'producao'){ color = colors[1]};
    if (statusObj == 'parado'){ color = colors[2]};
}

function tornaIndisp(x, y, w, h, produto, color) {
    ctx2.fillStyle = color;
    ctx2.fillRect(x, y, w, h);
    ctx2.font = 'bold 13px calibri, sans-serif';
    ctx2.fillStyle = 'black';
    ctx2.fillText(produto, x + 7, y + h * 0.57);
}

function selecionaArea(evento) {
    let x = evento.pageX - canvas.offsetLeft;
    let y = evento.pageY - canvas.offsetTop;

    for (let i = areasAB; i < keyList.length - quantidadeBotoesCanvas; i++) {
        if (x >= locacoesObj[i]["area"][0] && x <= locacoesObj[i]["area"][0] + locacoesObj[i]["area"][2]
            && y >= locacoesObj[i]["area"][1] && y <= locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3]) {

            indexObj = i;
            preparaForm()
        }
    }
    for (i = InicioBotoesCanvas; i < (InicioBotoesCanvas + quantidadeBotoesCanvas); i++) {
        if (x >= locacoesObj[i]["area"][0] && x <= locacoesObj[i]["area"][0] + locacoesObj[i]["area"][2]
        && y >= locacoesObj[i]["area"][1] && y <= locacoesObj[i]["area"][1] + locacoesObj[i]["area"][3]) {

            indexObj = i - InicioBotoesCanvas;
            preparaForm()
        }
    }
}

function preparaForm() {
    floc.value = indexObj;
    flocname.value = locacoesObj[indexObj]["nome"];
    fprod.focus();
    console.log(`Indice ${indexObj}, locaçao ${locacoesObj[indexObj]["nome"]} foi selecionado!`);
}

function statusRadioValue() {
    const radio = document.getElementsByName('status');
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            fstatus = radio[i].value;
        }
    }
}