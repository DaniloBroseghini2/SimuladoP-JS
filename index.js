/* 1 Verificar se um número é primo */

function numeroPrimo() {
    var P = prompt("Digite um número:");
    if (P <= 1) return "não é primo";
    for (let i = 2; i <= Math.sqrt(P); i++) {
      if (P % i === 0) return "não é primo";
    }
    return "é primo";
  }
/* Essa função primeiro pede o valor de P atraves do prompt, 
depois de receber esse valor executa varias validações,
 com a primeira sendo se o P for menor ou igual a 1 ja te retorna que não pode ser um número primo,
 depois ele verifica se número pode ser dividido por 1 ou por ele mesmo, 
 caso ele não atenda esses requisitos também retorna que não é um número primo,
 e por fim se ele passar pelas duas validações sem ser barrado a função vai retornar que ele é um número primo */

  /* 2 Verificar se um número é um quadrado perfeito */

  function quadradoPerfeito() {
    var QuadradoP = prompt("Digite um número:");
    if (Math.sqrt(QuadradoP) % 1 === 0)
    return "É um quadrado perfeito";
    else return "Não é um quadrado perfeito";
  }




  /* 3 Inverter uma string */

  function inverterString() {
    var inverter = prompt("Digite um número:");
    return inverter.split("").reverse().join("");

}


/* 4 Remover elementos duplicados de uma matriz */

function removerRepetidos(matriz) {
    return matriz.filter((valor, índice) => matriz.indexOf(valor) === índice);
  }
  
  var matriz = prompt("Digite uma matriz separada por vírgulas:");
  matriz = matriz.split(",").map((x) => parseInt(x));
  var novaMatriz = removerRepetidos(matriz);
  console.log(novaMatriz);



  /* 5 Verificar se uma palavra é um anagrama */
  function Anagramas (palavra1, palavra2) {
    if (palavra1.length !== palavra2.length) {
      return false;
    }
  
    var letras1 = palavra1.split("").sort().join("");
    var letras2 = palavra2.split("").sort().join("");
  
    return letras1 === letras2;
  }
  
  var palavra1 = prompt("Digite a primeira palavra:");
  var palavra2 = prompt("Digite a segunda palavra:");
  
  if (Anagramas(palavra1, palavra2)) {
    console.log("As palavras são anagramas!");
  } else {
    console.log("As palavras não são anagramas.");
  }