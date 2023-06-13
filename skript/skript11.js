// =============Модуль 3: Об'єкти=========================
// ============завдання 8========================
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

// ============завдання 10========================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key)
//    values.push(apartment[key])

// }
// console.log(keys);
// console.log(values);

// ============завдання 13========================
/**
//  * Counts the number of keys in the object
//  * @param {Object} object 
//  * @returns  number of keys
//  */
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (key in object) {
//    if (object.hasOwnProperty(key)) {
//      propCount += 1;
//    }
// }
//   // Change code above this line
//   return propCount;
// };
// console.log(countProps({}));
// console.log({ name: "Mango", age: 2 });
// console.log(countProps({}));

// ============завдання 14========================
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//     let prop = Object.keys(object);
//     propCount = prop.length;
//   return propCount;
//   // Change code above this line
// };
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ============завдання 15========================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// ============завдання 16========================
// /**
//  * Find total salary all employees
//  * @param {Number} salaries
//  * @returns total salary
//  */
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries)
//   for (const item of values) {
//       totalSalary += item;
//   }
//   // Change code above this line
//   return totalSalary;
// };
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ============завдання 17========================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log( hexColors);
// console.log(rgbColors);

// ============завдання 18========================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const product of products) {
//  if (productName === product.name) {
//        return product.price;
//         }
//     }
//     return null
// };
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ============завдання 19========================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// /**
//  *Return array of keys properties
//  * @param {String} key
//  * @returns array of keys properties
//  */
// function getAllPropValues(propName) {
//   // Change code below this line
//     const arr = [];
//     for (const product of products) {
//         if (propName in product ) {
//             arr.push(product[propName]);
//         }
//     }
//     return arr
//   // Change code above this line
// };
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ============завдання 20========================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         if (productName === product.name ) {
//              return product.price * product.quantity;
//               };
//     }
//      return 0
//   // Change code above this line
// };
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ============завдання 23========================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//    icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// ============завдання 25========================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//     today: { low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;

// ============завдання 26========================

// // Change code below this line
// function calculateMeanTemperature(forecast) {

// const {
//     today: { low: todayLow,
//         high: todayHigh},
//             tomorrow: { low: tomorrowLow,
//         high: tomorrowHigh}
// } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };
// console.log (calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log (calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// ============завдання 27========================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// ============завдання 28========================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ============завдання 29========================

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings)

// ============завдання 31========================
// // Change code below this line
// function add(...args) {
//     // console.log(args);
//     let total = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         total += args[i];
//     }
//     return total;

//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, ));
// console.log(add(74, 11, 62, 46, 12, 36));

// ============завдання 32========================
// // Change code below this line
// function addOverNum(min,...args) {
//   let total = 0;

//     for (const arg of args) {
//       if (arg > min ) {
//          total += arg;
//       }
//   }
//   return total;
//   // Change code above this line
// };
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ============завдання 33========================
// // Change code below this line
// function findMatches(copies,...args) {
//   const matches = []; // Don't change this line
//        for (const iterator of args) {
//         console.log(!!~(copies.indexOf(iterator)));
//         if (!!~(copies.indexOf(iterator))) {
//          matches.push(iterator);
//         }
//     }

//   // Change code above this line
//   return matches;
// };
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ============завдання 34========================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(bookName, updateBookName) {
//      return `Updating book ${bookName} to ${updateBookName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// ============завдання 35========================
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const indexToDelete = this.books.indexOf(oldName);
//       this.books.splice(indexToDelete, 1, newName);
//       return this.books

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// ============завдання 41========================
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         console.log(this.potions);
//        return this.potions;
//     },
//     addPotion(newPotion) {
//         const newName = newPotion.name;
//         let oldPotion;
//         for (const potion of this.potions) {
//             if (potion.name === newName) {
//                 oldPotion = potion;
//             }
//         }
//              if (this.potions.includes(oldPotion)) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//         this.potions.push(newPotion);
//          return this.potions;
//     },
//     removePotion(potionName) {
//         let removePotion;
//         let removePotionIndex = -1;
//          for (const potion of this.potions) {
//              if (potion.name === potionName) {
//             removePotionIndex = this.potions.indexOf(potion);
//             }
//         };

//         if (!~removePotionIndex) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(removePotionIndex, 1);
//         return this.potions
//     },
//      updatePotionName(oldName, newName) {
//     let removePotion;
//         let removePotionIndex = -1;
//          for (const potion of this.potions) {
//              if (potion.name === oldName) {
//                  potion.name = newName;
//             }
//          };
//          return this.potions
//   },

// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпадають видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
// ];

// function optimizeProduct(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i].id === arr[j].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }
// optimizeProduct(products);

// console.log(products);

// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {
//   const daySpead = 7;
//   const nightSpead = 2;
//   let days = 0;
//   let total = 0;
//   while (total < depth) {
//     total += daySpead;
//     days += 1;
//     if (total < depth) {
//       total -= nightSpead;
//     }
//   }

//   return `виповзе за ${days} днів`;
// }

// console.log(calcDays(42)); //виповзе за 8 днів
// console.log(calcDays(17)); //виповзе за 3 дні
// console.log(calcDays(18)); //виповзе за 4 дні
