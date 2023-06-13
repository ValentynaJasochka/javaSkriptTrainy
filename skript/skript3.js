// Додаткова практика //
// Example 9 - Метод sort
// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.
// Спробувати робити умову в самому методі сорт

// const sortByModel = (cars, order) =>
//   [...cars].sort(({ model: a }, { model: b }) =>
//     order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
//   );

// console.log(sortByModel(cars, "asc"));
console.table(sortByModel(cars, "desc"));

// Створити функцію яка повертає кількість автомобілів(amount) які не знаходяться на розпродажі (Властивість onSale)
// const amountOnSale = cars
//   .filter(({ onSale }) => !onSale)
//   .reduce((sum, { amount }) => (sum += amount), 0);

// console.log(amountOnSale);
