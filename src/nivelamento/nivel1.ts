let idade:number; //forma 1 (não definir um valor)

const nome = 'Jefferson'; // forma 2 (já passando um valor)

const sobreNome:string = 'Oliveira'; // forma 3 (sintaxe do typescript)

type usuario = {'nick':string, 'age':number }; // tipagem especial

let jogador:usuario = {nick: 'Jefferson', age:18};

let jogadorVelho:usuario = {nick: 'Toin', age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age >= 21) {
        console.log(`Acesso liberado: o jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos.`);
    } else{
        console.log(`${usuarioAtual.nick} não pode acessar, idade ${usuarioAtual.age} anos não permitida!`);
    }
};

verificarIdade(jogador);
verificarIdade(jogadorVelho);

type veiculo = {'modelo':string, 'ano':number };
let carroVelho:veiculo = {modelo: 'Palio', ano:2004};
let carroNovo: veiculo = {modelo: 'Kicks', ano:2026};

function verificarCarro(veiculo){
    if(verificarCarro.modelo){
        console.log(`Você selecionou o ${carroVelho}`);
        }
    }

verificarCarro();