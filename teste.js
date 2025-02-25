// node arquivo.js para executar

const arredondar = 10/3;

console.log(arredondar.toFixed(2)); 
// toFixed(decimais) arredonda o valor para a quantidade de decimais desejada, devolve como string


(function (){
    console.log("eu mesmo me chamei");
})();  // função que se auto executa, não requer nome mas pode ter


// ----- criando um objeto
const user = {
    idade: 21,
    nome: 'Lorenzo',
    forte: false,
    dizerOi: function () {
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

user.altura = 1.81;
user.dizerOi();

// ------------ Criando classes para serem instanciadas

class pessoas {
    nome;
    idade;
    anoNascimento;

    // constructor sempre é execuado quando uma pessoa é instanciada
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }

    introduzirSe(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

}

// criando objetos de classes (instancias)
const joao = new pessoas('Joao', 37);
joao.introduzirSe();


function compararIdades(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }
    else{
        console.log("Idades iguais!");
    }
}

const jonatas = new pessoas('Jonatas', 31);
const leonado = new pessoas('Leonardo', 20);

compararIdades(jonatas, leonado);

