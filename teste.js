// node arquivo.js para executar

const arredondar = 10/3;

console.log(arredondar.toFixed(2)); 
// toFixed(decimais) arredonda o valor para a quantidade de decimais desejada, devolve como string


(function (){
    console.log("eu mesmo me chamei");
})();  // função que se auto executa, não requer nome mas pode ter


// Objetos

const pessoa = {
    idade: 21,
    nome: 'Lorenzo',
    forte: false,
    dizerOi: function () {
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

pessoa.altura = 1.81;

console.log(pessoa);

pessoa.dizerOi();