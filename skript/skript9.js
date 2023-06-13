// ================Maсиви==================
const friends = [
    {name: 'Poli', age: 9,},
    {name: 'Tima', age: 11,},
     {name: 'Maks', age: 40,},
    {name: 'Valya', age: 38,},
];
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
//   friend.online = 'falce';
// }
// console.table(friends);
 
// friends[1].vocation = 'yes';
// console.table(friends);


// const valuesArr = [];
// for (const friend of friends) {
//     const test = Object.values(friend)
//   console.log(test);
//   console.log(test[0]);
//   let name = test[0]
//   valuesArr.push(name);
// };
// console.log(valuesArr)



for (const friend of friends) {
  if (friend.age > 20) {
   console.log(`${friend.name} старикашки`)
  }
  else {console.log(`${friend.name} малявки`);}
  
}
  


// const users = {
//   name: 'Poli',
//   age: 9,
//   online: true,
//   location: 'Oslo',
//   stats: {
//     folovers: 2040,
//     vievs: 5089,
//   },
// }
// const {name, age, online,...newArr} = users
// console.log(users);
// console.log(name);
// console.log(newArr);
// const { location, stats: { folovers, vievs }, } = newArr;
// console.log(location, folovers, vievs);