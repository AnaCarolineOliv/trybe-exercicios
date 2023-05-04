let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let maiorValor = 0;

for (let i = 0; i < numbers.length; i+= 1) {
  console.log(numbers[i]);
  result += numbers[i];
  
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}
console.log('soma:', result);
console.log('Maior valor é:', maiorValor);

let media = result/numbers.length;
console.log('A média é:', media);

if (media >=20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}
