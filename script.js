"use strict";

const prompt = require(`prompt-sync`)();

///// Projeto 2/////// - Jokenpô
// O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
// Pedra ganha da tesoura, mas perde para o papel;
// Tesoura ganha do papel, mas perde para a pedra;
// Papel ganha da pedra, mas perde para a tesoura.
// E para esse projeto você deve desenvolver um programa capaz de :
// Receber o elemento escolhido pelo usuário;
// Escolher um elemento aleatório para o computador;
// Comparar os dois elementos e declarar um vencedor.
// Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

// Requisitos
// Para esse projeto, os requisitos fundamentais serão:
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do computador;
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

let rodadas = prompt("Quantas rodadas?");
let vitorias = 0;
let derrotas = 0;
let empates = 0;
let jaken = 0;
let joken = 0;
let jogar = "";
//let i = 1;
const options = ["0: Pedra", "1: Papel", "2: Tesoura"];

for (let i = 1; i <= rodadas; i++) {
  joken = Math.floor(Math.random() * 3);
  jaken = +prompt(`Qual vai tentar? \n ${options} \n`);
  while (jaken != 0 && jaken != 1 && jaken != 2) {
    jaken = +prompt(`Qual vai tentar? \n ${options} \n`);
  }
  if (
    (jaken == 0 && joken == 2) ||
    (jaken == 1 && joken == 0) ||
    (jaken == 2 && joken == 1)
  ) {
    vitorias++;
    console.log(
      `Ganhou com ${options[jaken]} e o computador com ${options[joken]}`
    );
  } else if (
    (jaken == 0 && joken == 1) ||
    (jaken == 1 && joken == 2) ||
    (jaken == 2 && joken == 0)
  ) {
    derrotas++;
    console.log(
      `Perdeu com ${options[jaken]} e o computador com ${options[joken]}`
    );
  } else {
    empates++;
    console.log(
      `Empate com ${options[jaken]} e o computador com ${options[joken]}`
    );
  }
  //i++;
  if (i + 1 > rodadas) {
    if (vitorias > derrotas) {
      console.log(
        `Parabéns, você venceu com ${vitorias} vitórias, ${derrotas} derrotas e ${empates} empates.`
      );
    } else if (derrotas > vitorias) {
      console.log(
        `Que pena, você perdeu com ${vitorias} vitórias,  ${derrotas} derrotas e ${empates} empates.`
      );
    } else {
      console.log(
        `Você empatou com ${vitorias} vitórias,  ${derrotas} derrotas e ${empates} empates.`
      );
    }
    jogar = prompt("Deseja jogar novamente?(S/N)");
    if (jogar == "S") {
      i = 1;
      rodadas = prompt("Quantas rodadas?");
      vitorias = 0;
      derrotas = 0;
      empates = 0;
    }
  }
}
