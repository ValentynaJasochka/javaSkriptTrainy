// =============Модуль4:THIS Прототити та класси=========================
// ================Завдання 1========================================
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.checkPizza("Smoked"));
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));



// ================Завдання 2========================================
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//    this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//     return this.balance;
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]





// ================Завдання 3========================================
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));



// ================Завдання 7========================================
// =================КОНСТРУКТОР КЛАСУ===============
// class Car {
//   // Change code below this line
//  constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi);

// ================Завдання 9========================================
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// getPrice() {
//   return this.price;
// }
// changePrice(newPrice) {
//   return this.price = newPrice;
// }

//   // Change code above this line
// }

// // ================Завдання 10========================================
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//     return this.items
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1)
//     return this.items
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// ================Завдання 11========================================
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     return this.value = `${this.value}${str}`;
//   }
//   padStart(str) {
//    return this.value = `${str}${this.value}`; 
//   }
//    padBoth(str) {
//     return this.value = `${str}${this.value}${str}`; 
//   }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// // ================Завдання 12  Приватні властивості========================================
// // class Car {
// //   // Change code below this line
// //    #brand;
// //   constructor({ brand, model, price }) {
// //     this.#brand = brand;
// //     this.model = model;
// //     this.price = price;
// //   }
// //   getBrand() {
// //     return this.#brand
// //   }
// //   changeBrand(newBrand) {
// //     this.#brand = newBrand;
// //   }

// //   // Change code above this line
// // }


// // ================Завдання 13  Приватні властивості========================================
// // class Storage {
// //   // Change code below this line
// //    #items;
// //   constructor(items) {
// //     this.#items = items;
// //   }

// //   getItems() {
// //     return this.#items;
// //   }

// //   addItem(newItem) {
// //     this.#items.push(newItem);
// //   }

// //   removeItem(itemToRemove) {
// //     this.#items = this.#items.filter(item => item !== itemToRemove);
// //   }
// // }

// // // Change code above this line
// // const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// // ================Завдання 13  Геттери та сеттери=======================================
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }


// ================Завдання 17 =======================================
// class Car {
//   static #MAX_PRICE = 50000;
  
//   // Change code below this line
//   static checkPrice(price) {
//    console.log(this.#MAX_PRICE);
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//  return  "Success! Price is within acceptable limits"
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"



// ================Завдання 19  =======================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email,accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

//   // Change code above this line

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"




// ================Завдання 20  =======================================
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

   static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [] ;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

console.log(mango.isBlacklisted("poly@mail.com")); // true


