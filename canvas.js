const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const colorStatusLiberado = '#48e458';
const colorStatusRecebido = '#0082F9';
const colorStatusParado = '#e45848';
let ctxColor;

const xCoord = 0
const yCoord = 1
const width = 2
const height = 3
const textLeftMargin = 7

const locacoesKeys = Object.keys(locacoesArea);
let alocadosData = [];
let alocadosKeys = [];

function selectColors(data) {
  if (data == 'liberado') {
    return ctxColor = colorStatusLiberado
  }
  if (data == 'recebido') {
    return ctxColor = colorStatusRecebido
  }
  if (data == 'parado') {
    return ctxColor = colorStatusParado
  }
}

function selectLocacao(event) {
  let x = event.pageX - canvas.offsetLeft;
  let y = event.pageY - canvas.offsetTop;

  for (let i = 0; i < locacoesKeys.length; i++) {
    const locacoesCoords = locacoesArea[locacoesKeys[i]]
    if (x >= locacoesCoords[xCoord] && x <= locacoesCoords[xCoord] + locacoesCoords[width]
      && y >= locacoesCoords[yCoord] && y <= locacoesCoords[yCoord] + locacoesCoords[height]) {
      fLoc.value = locacoesKeys[i];
      fCod.focus();
    }
  }
}

function searchAlocados() {
  for (let i = 0; i < locacoesKeys.length; i++) {
    data = localStorage.getItem(locacoesKeys[i]);
    if (data) {
      data = JSON.parse(data);
      alocadosData.push(data);
      alocadosKeys.push(locacoesKeys[i]);
    }
  }
}

function highlightAlocados() {
  for (let i = 0; i < alocadosKeys.length; i++) {
    data = alocadosData[i];
    alocadosCoords = locacoesArea[alocadosKeys[i]]

    if (locacoesGrupoArea[alocadosKeys[i]] == undefined) {
      alocadosGrupoCoords = locacoesArea[alocadosKeys[i]]
    } else {
      alocadosGrupoCoords = locacoesGrupoArea[alocadosKeys[i]]//error
    }

    if (data.locacao.length <= 5 && (data.codProduto || data.statusMaterial)) {
      highlightAreas(alocadosGrupoCoords);
      continue
    }
    
    if (data.codProduto || data.statusMaterial) {
      highlightAreas(alocadosCoords)
    } else {
      localStorage.removeItem(data.locacao);
    }
  }
}

function highlightAreas(areaCoords) {
  if (data.statusMaterial) {
    ctx.fillStyle = selectColors(data.statusMaterial);
    ctx.fillRect(...areaCoords);
    ctx.font = 'bold 13px calibri, sans-serif';
    ctx.fillStyle = 'black';
    if (data.locacao.length == 4) {
      ctx.fillText(data.codProduto.toUpperCase(), alocadosCoords[xCoord] + textLeftMargin,
        alocadosCoords[yCoord] + alocadosCoords[width] * 3);
    } else if (data.locacao.length == 5) {
      ctx.fillText(data.codProduto.toUpperCase(), alocadosGrupoCoords[xCoord] + textLeftMargin,
        alocadosGrupoCoords[yCoord] + alocadosGrupoCoords[width] / 4);
    } else {
      ctx.fillText(data.codProduto.toUpperCase(), alocadosCoords[xCoord] + textLeftMargin,
        alocadosCoords[yCoord] + alocadosCoords[width] / 2);
    }
  }
}

canvas.onclick = selectLocacao
searchAlocados();
highlightAlocados()
