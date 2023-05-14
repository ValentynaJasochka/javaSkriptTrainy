// const number = 10;
// const result = number + '15';
// const result = number  + 10 + '15';
// const result = '15' + number;//==При додаванні домінуючий тип данних рядки
// const value = 'Hello';
// const result = `${value}  world`; //=======Конкатенація данних=====
// const number = 10;
// const result = number - '15'; //==При відніманні домінуючий тип данних числа, не рядки
// const result = '15'- number  ;
// const result = '15'/ number;
// console.log(result)


// =====Шаблонні рядки======
const companyName = 'Camel bots';
const stockBots = 100;
const repairBots = 50;
const message =`${companyName} has ${stockBots + repairBots} bots in stock!`
console.log(message)