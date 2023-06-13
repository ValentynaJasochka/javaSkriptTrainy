//============================codewars 1 =============

// function isOpposite(s1, s2) {
//   let str1 = s1.split("");
//   let str2 = s2.split("");
//   if (str1.length !== str2.length || str1.length === 0) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i += 1) {
//     if (
//       !(
//         (str1[i] !== str2[i]) &
//         (str1[i].toUpperCase() === str2[i].toUpperCase())
//       )
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isOpposite("ab", "AB"));
// console.log(isOpposite("aB", "Ab"));
// console.log(isOpposite("aBcd", "AbCD"));
// console.log(isOpposite("abcde", "AbCD"));
// console.log(isOpposite("AB", "Ab"));
// console.log(isOpposite("", ""));

//============================codewars 2 =============
// function makeNegative(num) {
//   return Math.abs(num) * -1;
//  }

// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));

//============================codewars 3 =============
// function getGrade(s1, s2, s3) {
//   const averageGrade = (s1 + s2 + s3) / 3;
//   if (averageGrade >= 90) {
//     return "A";
//   } else if (averageGrade >= 80) {
//     return "B";
//   } else if (averageGrade >= 70) {
//     return "C";
//   } else if (averageGrade >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(getGrade(95, 90, 93));
// console.log(getGrade(100, 85, 96));
// console.log(getGrade(70, 70, 100));
// console.log(getGrade(60, 82, 76));
// console.log(getGrade(58, 62, 70));
// console.log(getGrade(48, 55, 52));

//============================codewars 4 =============

// function betterThanAverage(classPoints, yourPoints) {
//   const ratings = classPoints.push(yourPoints);
//   let summ = 0;
//   for (let i = 0; i < ratings; i += 1) {
//     summ += classPoints[i];
//   }
//   const average = summ / ratings;
//   return yourPoints > average ? true : false;
// }
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

//============================codewars 5 =============
// function fakeBin(x) {
//   const arr = x.split("");
//   //   console.log(arr);
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] < 5 ? (arr[i] = 0) : (arr[i] = 1);
//   }
//   return arr.join("");
// }
// console.log(fakeBin("45385593107843568"));

// function fakBin(x) {
//   return x
//     .split("")
//     .map((n) => (n < 5 ? 0 : 1))
//     .join("");
// }

//============================codewars 6 =============
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }
// console.log(boolToWord(true));
// console.log(boolToWord(false));

//============================codewars 7 =============
// function setAlarm(employed, vacation) {
//   return Boolean(employed & !vacation);
// }
// console.log(setAlarm(true, true));
// console.log(setAlarm(false, true));
// console.log(setAlarm(true, false));

//============================codewars 8 =============
// function repeatStr(n, s) {
//   let arr = [];
//   for (let i = 0; i < n; i += 1) {
//     arr.push(s);
//   }
//   return arr.join("");
// }

// function repeatStr(n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(3, "*"));
// console.log(repeatStr(5, "#"));
// console.log(repeatStr(2, "ha "));

//============================codewars 9 =============

// function otherAngle(a, b) {
//   return 180 - (a + b);
// }
// console.log(otherAngle(30, 60));

//============================codewars 10 =============
// const stringToNumber = (str) => Number(str);
// console.log(stringToNumber("1234"));

//============================codewars 11 =============
// const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);
// console.log(cockroachSpeed(1.09));

//============================codewars 12 =============

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.findIndex(
//     (item) => item === "needle"
//   )}`;
// }
// let haystack_1 = [
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ];
// let haystack_2 = [
//   "283497238987234",
//   "a dog",
//   "a cat",
//   "some random junk",
//   "a piece of hay",
//   "needle",
//   "something somebody lost a while ago",
// ];
// let haystack_3 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   8,
//   7,
//   5,
//   4,
//   3,
//   4,
//   5,
//   6,
//   67,
//   5,
//   5,
//   3,
//   3,
//   4,
//   2,
//   34,
//   234,
//   23,
//   4,
//   234,
//   324,
//   324,
//   "needle",
//   1,
//   2,
//   3,
//   4,
//   5,
//   5,
//   6,
//   5,
//   4,
//   32,
//   3,
//   45,
//   54,
// ];
// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));
// console.log(findNeedle(haystack_3));

//============================codewars 13 =============
// const hero = (bullets, dragons) => {
//   return bullets / 2 >= dragons;
// };

// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));
// console.log(hero(100, 40));

//============================codewars 14 =============
// const descendingOrder = (n) => {
//   return Number(
//     (n + "")
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// };
// console.log(descendingOrder(0));
// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));

//============================codewars 15 =============
// function squareDigits(num) {
//   let arr = (num + "").split("");
//   let newArr = [];
//   for (const item of arr) {
//     let i = Number(item);
//     newArr.push(Math.pow(i, 2));
//   }
//   return Number(newArr.join(""));
// }

// function squareDigits(num) {
//   return Number(
//     ("" + num)
//       .split("")
//       .map(function (val) {
//         return val * val;
//       })
//       .join("")
//   );
// }

// console.log(squareDigits(2112));

//============================codewars 16 =============
// const countSheeps = (arrayOfSheep) => {
//   return arrayOfSheep.filter((item) => item).length;
// };
// const array1 = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// console.log(countSheeps(array1));

//============================codewars 17 =============
// function DNAStrand(dna) {
//   const dnaArr = dna.split("");
//   let newArr = [];
//   for (let i of dnaArr) {
//     switch (i) {
//       case "A":
//         newArr.push("T");
//         break;
//       case "T":
//         newArr.push("A");
//         break;
//       case "C":
//         newArr.push("G");
//         break;
//       case "G":
//         newArr.push("C");
//         break;
//     }
//   }
//   return `${newArr.join("")}, "String ${dna} is"`;
// };

// варіант з рішень
// let pairs = { A: "T", T: "A", C: "G", G: "C" };

// function DNAStrand(dna) {
//   return dna
//     .split("")
//     .map(function (i) {
//       return pairs[i];
//     })
//     .join("");
// }
// console.log(DNAStrand("AAAA"));

// const test = undefined ?? `string`;
// console.log(test);
// const a = "fsdhf";
// console.log(Number(a));

// let billion = 1_000_000_000;
// console.log(billion);

// console.log("true" == true);
// console.log("0" == false);

// const test = [1, 5, 6, 8, 9, 15];
// const test1 = test.splice(0, 4, 100, 200, 300);
// // const test1 = test;
// // test1.push(8);
// // console.log(test1);
// // console.log(test);
// function fn(...ins) {
//   return ins;
// }
// console.log(fn(1, 6, 8, 7, 9));

const names = "Jacob,William,Solomon,Artem";
const phones = "89001234567,89001112233,890055566377";
const namesToArr = names.split(",");
const phonesToArr = phones.split(",");
console.log(namesToArr);
console.log(phonesToArr);

// for (let i = 0; i < namesToArr.length; i +=1){
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }

for (let i = 0; i < phonesToArr.length && i < namesToArr.length; i += 1) {
  console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
}
