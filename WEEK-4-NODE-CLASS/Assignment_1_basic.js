// const path =require("path");
// console.log(__dirname +"/index.js")   
// console.log(path.join(__dirname,"index.js"));


//WHAT IS COMMAND LINE INTERFACE TANU SO COMMAND LINE INTERFACE IS HERE YOU 
//SEE THE NODE IS A CLI AND IT TAKE SOME ARGUMENT WHICH IF WE RUN GIVE SOMETHING TO US RIGHT SO 
//THIS IS A CLI AND THE ASSGNMENT IS TO CREATE SOMETHING LIKE THIS CLI WHERE IF
//RUN SOME COMMAND THEN WE GET SOME OUTPUT SHOWN TO US THATS ALL

//ASSIGNMENT 1-COUNT THE WORD USING NORMAL FUNCTION AND ALL

const fs = require("fs");

function main(filename) {
    
    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }

        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] == " ") {
                total++;
            }
        }
        console.log(total + 1);
    });
}

main("a.txt");

