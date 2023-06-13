
// =======1 задача============

// const array = [1, 2, 3, 4, 5];
// const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
// const lastElement = array[lastElementIndex];

// const a = [firstElement];
// a.push(lastElement)

// console.log(firstElement);
// console.log(lastElementIndex);
// console.log(lastElement);
//   console.log(a);

// =======2 задача============

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words=message.split(delimiter)
//   // Change code above this line
//   return words;
// };
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// =======  3 задача============

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const separeteMessage = message.split(" ");
//     const wordCounter = separeteMessage.length;
//     const totalPrice = wordCounter * pricePerWord;


// console.log(separeteMessage);
//     console.log(wordCounter);
//     console.log(totalPrice );
//    // Change code above this line
// };
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));




// =======4 задача============

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string = array.join(delimiter);

//   // Change code above this line
//   return string;
// };
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));




// =======5 задача============

// function slugify(title) {
//   // Change code below this line
    
//     const lowerCaseTitle = title.toLowerCase();
//     const slug = lowerCaseTitle.split(" ");
//     const slugTitle = slug.join("-");
//     return slugTitle
  
//     // console.log(lowerCaseTitle);
//     // console.log(slug);
//     // console.log(slugTitle);

//   // Change code above this line
// };
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// =======5 задача - удосконалена============

// function slugify(title) {
//   // Change code below this line
    
//     const lowerCaseTitle = title.toLowerCase();
//     const slug = lowerCaseTitle.split(" ");
//     const slugTitle = title.toLowerCase().split(" ").join("-"); // виклики на результатах
//     //роботи попереднього методу
//     return slugTitle
//   // Change code above this line
// };
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// // =======        6 задача============

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// =======        7 задача============

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients)
 


// =======        8 задача============

// const firstArray = ["Mango", "Poly"];
// const secondArray = ["Ajax", "Chelsea"];
// const maxLength = 3;
// const array = firstArray.concat(secondArray);
// console.log(array);
// const curentLength = array.length;
// console.log(curentLength);
// let message;
// if (curentLength <= maxLength) {
//     message = array;
// }
// message = array.slice(0, maxLength);
// console.log(message);



// =======        9 задача============


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
  
// const array = firstArray.concat(secondArray);
//     const curentLength = array.length;
//     console.log(array);
//     console.log(curentLength);
// let newArrey;
// if (curentLength <= maxLength) {
//     newArrey = array;
// }
//     newArrey = array.slice(0, maxLength);
//     console.log(newArrey);
//   return newArrey
//     // Change code above this line
//   };
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// consosle.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// consosle.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// consosle.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// consosle.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// consosle.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));






// =======  9  задача============

// function calculateTotal(number) {
//     let sumTotal = 0;
// for (let i = 1; i <= number ; i +=1 ) {
//  sumTotal += i;
// };

// return sumTotal

// };

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));




// =======  10  задача============
// function findLongestWord(string) {
//     const stringsSeparate = string.split(" ");
//     console.log(stringsSeparate);
//     let lagestWord = '';
//     let lagestWordNumber
//     for (let i = 0; i < stringsSeparate.length; i += 1) {
//         let wordString = stringsSeparate[i];
//         let wordLengthNumber = i;
//         let wordLength = wordString.length;
//         console.log(wordString, wordLength,wordLengthNumber);
//         if (lagestWord < wordLength) {
//             lagestWord = wordLength;
//             lagestWordNumber = wordLengthNumber;
//         }
//     }
//     return stringsSeparate[lagestWordNumber];
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));




// =============== 23задача=============
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = 0; i <= max - min; i += 1) {
//         numbers.push(min + i);
    
// }
//   // Change code above this line
//   return numbers;
// };
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));


// =============== 23задача=============
// function filterArray(numbers, value) {
//     const newNumbers = [];
//     for (const number of numbers) {
//         if (number > value) {
//             newNumbers.push(number);
//         }
//     }
//    return newNumbers
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// =============== 24задача=============
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
  

//   return fruits.includes(fruit) ? true : false; ; // Change this line
// };
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


// =============== 25задача=============
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const arrayNew = [];
//     let maxLength
//     if (array1.length >= array1.length) {
//         maxLength = array1.length;
//     }
//     maxLength = array2.length;

//     for (let i = 0; i <= maxLength; i += 1) {
//           if (array1.includes(array1[i]) && array2.includes(array1[i])) {
//               arrayNew.push(array1[i]);
//         }
//     }
//     return arrayNew;
//  // Change code above this line
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// =============== 25 задача удосконалена =============
// function getCommonElements(array1, array2) {
//     const arrayNew = [];
//     for (let i = 0; i <= array1.length; i += 1) {
//           if (array2.includes(array1[i])) {
//               arrayNew.push(array1[i]);
//         }
//     }
//     return arrayNew;
    
//  }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// =============== 27задача=============
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// =============== 29задача=============

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const evenNumbers = [];
//     const numbers = [start];
//     let member = start;
//     for (let i = 0; i <= end - start; i +=1) {
//         member += 1;
//         numbers.push(member);
//         if (!(numbers[i] % 2)) {
//     evenNumbers.push(numbers[i])
// }
//     }
//     return  evenNumbers
//     // Change code above this line
// };
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));



// =============== 29задача поліпшена=============
// function getEvenNumbers(start, end) {
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
//                if (!(i % 2)) {
//             evenNumbers.push(i)
//         }
//     }
//     return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
    


// =============== 32 задача=============
// function includes(array, value) {
//   // Change code below this line
//     let message;
// for (const member of array) {
//     if (value === member) {
//         message = true;
//         break;
//     }
//     message = false
//     }
//     return message
//   // Change code above this line
// };
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



// function checkAge(age) {
//  return  age>=18 ? "You are an adult" :"You are a minor"
  
// };
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// };
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));


// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.shift();
// console.log(fruits.length);
// console.log(fruits);
// shoppingCart.shift();
// console.log(fruits.length);
// console.log(fruits);
// shoppingCart.shift();
// console.log(fruits.length);
// console.log(fruits);

// let i = 0; // ми вже маємо оголошену змінну і присвоєне значення

// for (; i < 3; i++) { // немає необхідності в "початку"
//   console.log(i); // 0, 1, 2
// }

// let i = 0;
// for (; i < 3; i++) {
  
//     console.log(i);

// }

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);




//===================Домашня робота №7=================

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; ) {
//     let max = langs[i];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];            
//         }        
//     }
//     let cutedElement = langs.indexOf(max);
//     let cutedArr = langs.splice(cutedElement, 1);
//     result.push(max)
// }
// console.log(result);

//===================Домашня робота №7/2=================

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length - 1; i += 1) {
    
//     for (let j = 0, changed; j < langs.length - 1; j += 1) {
           
//         if (langs[j]> langs[j+1]) {
//             changed = langs[j]; 
//             langs[j] = langs[j + 1];
//             langs[j + 1] = changed;
//         }     
        
//     }
   
// }
// console.log(langs);

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }
// // console.log(fillArray(2, 10));

// const validNumber = Number("51");
// console.log(!(Number.isNaN(validNumber)));


// let max = langs[0];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//         }
//         console.log(max);
// }
//     let max1 = langs[1];
//     for (let j = 1; j < langs.length; j += 1) {
//         if (max1 > langs[j] && !result.includes(langs[j])) {
//             max1 = langs[j];            
//         }
//         console.log(max1);
// }
//     let max2 = langs[2];
//     for (let j = 2; j < langs.length; j += 1) {
//         if (max2 > langs[j] && !result.includes(langs[j])) {
//             max2 = langs[j];           
//         }
//          console.log(max2);
// }
//     let max3 = langs[3];
//     for (let j = 3; j < langs.length; j += 1) {
//         if (max3 > langs[j] && !result.includes(langs[j])) {
//             max3 = langs[j];                       
//         }
//         console.log(max3);
// }
//     let max4 = langs[4];
//     for (let j = 4; j < langs.length; j += 1) {
//         if (max4 > langs[j] && !result.includes(langs[j])) {
//             max4 = langs[j];           
//         }
//          console.log(max4);
// }
//     let max5 = langs[5];
//     for (let j = 5; j < langs.length; j += 1) {
//         if (max5 > langs[j] && !result.includes(langs[j])) {
//             max5 = langs[j];           
//         }
//          console.log(max5);
//     }


