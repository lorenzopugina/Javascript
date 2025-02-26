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



// criando herança de classes
class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal { // se uma classe não possui construtor, ela herda o da superclasse
    latir(){
        console.log("Au aU aUuuuu");
    }
} 

const cachorro = new Dog("viraLata");
console.log(cachorro);
cachorro.latir();

console.log("----------------------------------");


// sobrescrita de metodo (polimorfismo), quando a subclasse altera o metodo herdade somente pra ela

class automovel {

    buzinar(){
        console.log("BIBI");
    }
}

class moto extends automovel {
    buzinar(){
        console.log("BIIIIIIIBIIIIIIII");
    }
}

const titan = new moto();
titan.buzinar();

console.log("----------------------------------");

// super copia o metodo da superclasse
class humano{
    constructor(arma){
        this.arma = arma;
        this.vida = 100;
    }

    gritar(palavra){
        console.log(`eu grito ${palavra}`);
    }
}

class guerreiro extends humano{
    constructor(arma){
        super(arma);
        // aqui viriam outras propriedades da classe
    }

}
const heroi = new  guerreiro("lança");
console.log(heroi);
heroi.gritar("BATATA");

console.log("----------------------------------");



// ----------- Arrays

const alunos = ["jonas", "joao", "jessica"];
alunos.push("jonathan");  // .push adiciona itens no final do array
console.log(alunos);

//.lenght retorna quantos elementos tem o array
// .pop retira o ultimo item do array, que pode ser atribuido a uma variavel
const jonnatan = alunos.pop();
console.log(jonnatan);

