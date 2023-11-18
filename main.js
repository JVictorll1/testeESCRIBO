// Número a ser Processado
const numero = 10;

// Chamada da Função descrita logo abaixo
verificarDivisiveis(numero);

// Função que verifica os divisíveis
function verificarDivisiveis(numero) {
    // Validação quando o número for Inteiro positivo e maior que 0
    if(numero > 0) {
        // Variável acumuladora que servirá para realizar o somatório
        let somatorio = 0;

        // Loop responsável por verificar os números que compõem o número indicado
        for(let i = 1; i < numero; i++) {
            // Condição para saber se é divisível ou não por 3 ou 5
            if((i%3 === 0) || (i%5 === 0)) {
                somatorio += i;
            }
        }
        // Aprtesenta o valor do somatório dos divisíveis por 3 ou 5
        console.log(somatorio);
    } else {
        // Resultado negativo para a validação quando o número for Inteiro positivo e maior que 0
        console.log("Número inválido! Permitido apenas Inteiros positivos maiores que 0.");
    }
}