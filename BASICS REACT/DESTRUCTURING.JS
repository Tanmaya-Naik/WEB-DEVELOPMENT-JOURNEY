// const empl={
//     id:1,
//     name:"Tanmaya",
//     age:"33",
//     department:"computer",
//     address:{
//         city:"cttack",
//         country:"vietnam"
//     },
// };

// const name=empl.name;
// const age=empl.age
// const address=empl.address;

//lets destructure

// const {name:fullname="Nikesh", age}=empl;
// const {address:{city}}=empl;



// // console.log(fullname);
// // console.log(age);
// console.log(city);

// function display(empl){
//     console.log(`The emplyoee is ${empl.name} and age is ${empl.age} `);
// }
// display(empl);

// const fruits=["apple","banana","mango","jackfruit","graps","gauva"];

// const [fruit1, ,fruit2,...rest]=fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(rest);

const itemsArray = [
  { item: "apple", price: 150, category: "fruit" },
  { item: "book", price: 299, category: "stationery" },
  { item: "pen", price: 75, category: "stationery" },
  { item: "backpack", price: 430, category: "bags" }
];


const [, , {item},...rest]=itemsArray;

console.log(item);
console.log(rest);
