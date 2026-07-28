// 1. Function declaration 
console.log(add(3,4));

function add(a,b){
    return a+b;
}

console.log(add(2,4));

// 2. Function expression
console.log(add(3,4));

const add2 = function add(a,b){
    return a+b;
}

console.log(add2(2,4));

// 2. Arrow function
console.log(add(3,4));

const add3 = (a,b) => {
    return a+b;
}

console.log(add3(2,4));


// IIFE (Immidiatley Invoked Function Expression)

(function greet(){
    console.log("Hello");
})()

//Anonymous 











