//=====================МОдуль 4 Колбеки та стрілочні функції======================


function fnA(message, callback) {
    console.log('message');
    console.log(callback);
    callback();
}

function fnB() {
    console.log('виведемо щось');
};
fnA('fdhasjd', fnB);


// ============Функція зворотнього виклику===========
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готує ${dish}`);
    };
    return makeDish;
};
const mango = makeSheff('Mango');// повертає mango = function (dish){console.log(`${name} готує ${dish}`)}
console.log(mango);
mango('котлети');// тобто котлети записуються в dish f Манго вже в name
mango('пиріг');


const arr = [2, 4, 6];
const result = arr.filter((el) => el * 2);
console.log(result);





const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average);


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {});


const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];
const colors = data.flatMap((elem) => elem.c)
  
const newColors = new Set(colors);
console.log(newColors);