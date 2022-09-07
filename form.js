const form = document.getElementById('form');
const fLoc = document.getElementById('fLoc');
const fCod = document.getElementById('fCod');
const fStatus = document.getElementsByName('fStatus');

function findSelection(radioInput) {
  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      return radioInput = radioInput[i].value;
    }
  }
  return null
}

function validaLocacao(text) {
  if (text in locacoesArea) {
    console.log(`Input validado com sucesso`);
    return true
  } else {
    console.log(`Input invalido`);
    alert("Locação invalida!");
  }
}

form.addEventListener('submit', () => {
  if (validaLocacao(fLoc.value)) {
    data = {
      'locacao': fLoc.value,
      'codProduto': fCod.value.toLowerCase(),
      'statusMaterial': findSelection(fStatus),
    }
    jsonText = JSON.stringify(data);
    localStorage.setItem(data.locacao, jsonText);
    window.location.reload();
  }
})
