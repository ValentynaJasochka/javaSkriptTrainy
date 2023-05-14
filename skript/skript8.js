
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

function slugify(title) {
  // Change code below this line
    
    const lowerCaseTitle = title.toLowerCase();
    const slug = lowerCaseTitle.split(" ");
    const slugTitle = title.toLowerCase().split(" ").join("-"); // виклики на результатах 
    //роботи попереднього методу
    return slugTitle  
  // Change code above this line
};
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


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