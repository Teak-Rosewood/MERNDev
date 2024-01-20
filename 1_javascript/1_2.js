// Question Set 1 

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
let count = 0;
for (let i = 0; i <= 100; i++){
    count += i;
}
console.log("Sum of 100 numbers: ", count);


// Question Set 2

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
biggest_num = nums[0];
for (i in nums){
    if(nums[i]%2 == 0)
    {
        console.log(nums[i]);
    }
    if(nums[i] > biggest_num){
        biggest_num = nums[i];
    }
}


console.log("Biggest number:", biggest_num)

const person = {
    f_name: "John",
    l_name: "Doe", 
    gender: 1
};
console.log(person.f_name)

// Question Set 3

function changeTense(sum) {
    console.log("sum of the two numbers were:" ,sum)
}

function NumSum (a, b, myCallback){
    let sum = a+b;
    myCallback(sum);
    return sum;
}

function changeTense(sum) {
    console.log("sum of the two numbers were:" ,sum)
}
let a = 10
let b = 20
let sum = NumSum(a, b, changeTense)

// Question Set 4 (Assignment)

// Question 1
// Create a counter in Javascript, counts down from 30 to 0

function printNumber(num){
    if(num > 0){
        setTimeout(function timout(){
            console.log("Number Count:", num);
            printNumber(num-1);
        }, 1000)
    }
}
printNumber(30);

// Question 2
// calculate the time it takes between a setTimeout call and the inner function ac

const t = new Date().getTime();
setTimeout(function printNumber(){
    var a = new Date().getTime() - t
    console.log("Number printing:", 10);
    console.log("Actual Time Taken:", a);
}, 500);

// Question 3 
// Create a terminal clock (Hours:Minutes:Seconds)

const second = 1000
const minute = second * 60;
const hour = minute * 60;

function DisplayTime(){
    setTimeout(function timeout(){
        var d = new Date();
        console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
        DisplayTime()
    }, 1000);
}
DisplayTime();