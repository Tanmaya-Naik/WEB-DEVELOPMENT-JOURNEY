// let counter=1;
// console.log(counter);
// let updateCounter=()=>{
//     counter++;
//     console.log(counter);
// }

// setInterval(updateCounter,1000);  

let counter = 0; 

const updateCounter = () => {
  counter++; 
  console.log(counter); 

  setTimeout(updateCounter, 1000);
};

updateCounter();
