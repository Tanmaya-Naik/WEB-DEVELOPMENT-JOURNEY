//------------------ARROW FUNCTION----------------------

// function sum(a,b){
//     return a+b;

// }
// 


// const sum=(a,b) => {
//     return a+b;
// }

// const ans=sum(2,3);
// console.log(ans);


//----------------MAP-----------------
//given you an array, give me back a new array in which every element is multiplied by 2
//[1,2,3,4,5] => [2,4,6,8,10]

//MAP IS À FUNCTION WHICH TAKE AN INPUT ARRAY AND A FUNCTION AS SECOND PARAMETER AND RETURN ARRAY

// const input=[1,2,3,4,5]
// // function transform(i){
// //     return i*9;
// // }
// const ans=input.map(function(i){
//     return i*2;
// });
// console.log(ans);







//-----------------FILTERING-------------

//what if i tell u, given and input array, give me back all the even vlaue from it

const arr=[1,2,3,4,5];

const ans=arr.filter(function(n){
    if(n %2 ==0){
        return true;
    }
    else{
        return false;
    }
});

console.log(ans);
// const arr=["Tanmaya","Ramu","Shubhrata","Tanu","Tami","Tamu"];

// const ans=arr.filter(function(n){
//     if(n.startsWith("T")){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(ans);










//ASSIGNMENT-CREATE A MAP FUNCTION THAT TAKES 2 INPUTS
//AN ARRAY, AND A TRANSFORMATION CALLBACK/FUNCTION
//AND TRANSFORMS THE ARRAY INTO A NEW ONE USING THE TRANSFORMATION FN