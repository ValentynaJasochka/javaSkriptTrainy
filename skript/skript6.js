let counter = 0;

while (counter < 10) {
  
    counter += 1;
    console.log("counter: ", counter);
};
let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
};


const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}