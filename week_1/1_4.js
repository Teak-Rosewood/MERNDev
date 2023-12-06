function square(a){
    return a*a;
}

function root(a){
    return Math.sqrt(a);
}

function sumOfFunc(a, b, func){
    return func(a) + func(b);
}

a = 5;
b = 6;
console.log("Sum of Squares:", sumOfFunc(a, b, square));
console.log("Sum of Roots:", sumOfFunc(a, b, root));