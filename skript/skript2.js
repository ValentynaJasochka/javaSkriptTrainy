// ==================Типи данних========================
// console.log(typeof true)
// console.log(typeof NaN)
// console.log(typeof "")
// console.log(typeof 4)
// const result = 10 + `10`
// console.log(result)
// console.log(typeof result)
// const result = 10 + Number(`10`)
// console.log(result)
// console.log(typeof result)
// const result = 10 + Number(`10.5 px`)
// console.log(result)
// console.log(typeof result)
// Nan Ніколи нічому не дорівнює
// console.log(NaN === NaN)
// console.log(isNaN(NaN))
// console.log(Number.isNaN(NaN))
// console.log(isNaN(`12px`)); // 1.конвертує до числа, 2. перевіряє, чи там NaN
// console.log(Number.isNaN(`12px`)) // 1. Перевіряє, чи там NaN
// ========Приклад використання NaN====
const produktPrice1 = 100;
const produktPrice2 = undefined;
console.log(produktPrice1 * 2 + Number.isNaN(produktPrice2) * 3);

// console.log(Boolean(null))
// console.log(Boolean(false))
// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(""))

// const price = 100;
// let total = 90;
// total += price;
// console.log(total);
// total -= 10;
// console.log(total);
// total *= 2;
// console.log(total);
// total **= 2; //степінь
// console.log(total);
// total /= 10000;
console.log(total);
