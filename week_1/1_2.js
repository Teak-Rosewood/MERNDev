const prompt = require("prompt-sync")();
let f_name = prompt("Enter you first name: ");
let l_name = prompt("Enter you first name: ");
let gender = prompt("Enter 1 for Male and 2 for Female: ");
if(gender == 1){
    console.log("Your name is", f_name, l_name, "and you are a Male");
}
else{
    console.log("Your name is", f_name, l_name, "and you are a Female");
}
count = 0;
for (let i = 0; i < 100; i++){
    count = count + i;
}
console.log("Sum of 100 numbers: ", count);