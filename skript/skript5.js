// const value = 11.15944212;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
// console.log(value.toFixed(2)); //перестало бути числом через метод toFixed
// =====Метод рядків та чейнінг========
let weight = '88,3';
let height = '1.75';
weight = Number(weight.replace(',', '.'));
height = Number(height.replace(',', '.'));
const bmi =Number((weight/Math.pow(height, 2)).toFixed(1));
console.log(bmi)