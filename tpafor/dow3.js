let soma = 0;
let num = 10;  // inicia-se com o número 10

do {
    soma += num;  // adiciona o número à soma
    num += 5;  // incrementa o número em 5 a cada iteração
} while (soma <= 50);  // continua até a soma ser maior que 50

console.log("A soma final é:", soma);  //mostra o total da soma
