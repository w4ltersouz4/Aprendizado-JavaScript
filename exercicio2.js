// CÁLCULO DE IMC

/*
Walter de Araújo Souza tem 21 anos, pesa 90 kg
tem 1.88 de altura e seu IMC é .......
Walter nasceu em 2003
*/

const nome = 'Walter';
const sobrenome = 'de Araújo Souza';
const idade = 22;
const peso = 90;
const altura = 1.90;

let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg.'); //concatenando com + e aspas
console.log('Tem ' + altura + ' de altura e seu IMC é ' + imc + '.');
console.log(nome, 'nasceu em', anoNascimento +'.'); //concatenando com vírgula e aspas
console.log(`${nome} ${sobrenome} tem ${idade} anos`); //concatenando com cifrão ($) e variável entre {chaves}