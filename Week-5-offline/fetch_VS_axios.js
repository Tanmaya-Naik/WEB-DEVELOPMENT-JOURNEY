//axios vs fetch

        // function main(){
        //     fetch("https://jsonplaceholder.typicode.com/todos/1")
        //     .then( async respone => {
        //         const json =await respone.json();
        //         console.log(json);
        //         //await response.text()
        //     });
        // }

//SLIGHTLY CLEANER THAN ABOVE

const axios= require("axios");


// async function main() {
//     const response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const json=await response.json();
    
// }


async function main() {
    const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response.data);
}
main();
