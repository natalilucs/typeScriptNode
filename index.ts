interface dadosAPI{
    nome: string,
    idade: number,

};

function pegarDadosAPI():dadosAPI {
    return {
        nome:  "Natali",
        idade: 28
    };
    
};

let dados = pegarDadosAPI();

let soma;
let a = 2;
let b = "x";

soma = a + "x" ;


// console.log(dados.idade)

console.log(soma);


//treinar com Sayure
//criando a classe
class Pessoa{
    nome!:string //! indica que a inicialização é indefinido; 
    idade:number = 0 // ou pode ser atribuido o tipo de valor através do exemplo = 0;
    cpf:string = "" // string é atribuindo com o valor dentro das " "

    constructor(nome:string,idade:number,cpf:string){ // os parametros do nome, idade e cpf corresponde ao mesmo do atribuidos ao this = *; 
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    escreverPropriedades(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.cpf)

    }
}
//termino criacao classe

let humano = new Pessoa("natali", 26, "000.000.000-00");

humano.escreverPropriedades();

class Carro{
    nome!: string
    ano!: number
    marca!: string
    crlv!:string

    constructor(nome:string, ano:number, marca:string, crlv:string){
        this.nome = nome
        this.ano = ano
        this.marca = marca
        this.crlv = crlv
    }

    mostrarTela(){
        console.log(this.nome)
        console.log(this.ano)
        console.log(this.marca)
        console.log(this.crlv)
    }
}

let novoCarro = new Carro("Camaro", 2021, "Chevrolet", "000.0000.000.000");

novoCarro.mostrarTela();