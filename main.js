class Alocado {
    constructor(locacao, codigo, status) {
        this.locacao = locacao;
        this.codigo = codigo;
        this.status = status;
    }

    alterarStatus(novoStatus) {
        this.status = novoStatus;
    }
}

teste = new Alocado("a20","plm0000","liberado")
let jsonData = JSON.stringify(teste);


var fs = require('fs');
fs.writeFile("json.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

fs.readFile('json.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(JSON.parse(data));
  });