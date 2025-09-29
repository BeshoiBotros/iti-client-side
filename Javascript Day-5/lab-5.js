// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

function sum(a, b) {
  return a + b;
}

const add = function(a, b) {
  return a + b;
};

console.log(sum(3, 4));
console.log(add(3, 4));

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
const factorial = function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

console.log(factorial(5)); // Output: 120
// console.log(fact(5)); error because 'fact' is not defined globally.

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
    console.log('Number of arguments:', arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log('Argument', i + 1 + ':', arguments[i]);
    }
}

showInfo();
showInfo('Hello', 'Beshoy');
showInfo('Hello', 'Beshoy', 'Botros', 'Hanna', 'Ibrahim');

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
    console.log("Before change:");
    console.log("x:", x, "y:", y);
    console.log("arguments[0]:", arguments[0], "arguments[1]:", arguments[1]);

    // change x and y
    x = x * 2;
    y = y + "!";
    
    console.log("After change:");
    console.log("x:", x, "y:", y);
    console.log("arguments[0]:", arguments[0], "arguments[1]:", arguments[1]);
}
mutate(1, "Beshoy");

// the result of arguments[0] and arguments[1] does not change
// because arguments object is not linked to the parameters after the initial assignment

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().

function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(2, 5, 3)); // this will out 10
console.log(sumAll()); // this will out 0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

function sumAll(){
    return Array.prototype.reduce.call(arguments, (a, b)=>{ return a + b; });
}

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue(){
    if (arguments.length == 0){ return "0 -> 'none'" }
    else if (arguments.length == 1) { return `1 -> ${arguments[0]}`; }
    else if (arguments.length == 2) { return `2 -> ${arguments[0]}, ${arguments[1]}`; }
    else{ return 'Too many'; }
}

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

let funcs = [
  function(x) { return x -= 1 },
  function(x) { return x -= 1 },
  function(x) { return x -= 1 }
];

let start = 10;

for (let i = 0; i < funcs.length; i++) {
  start = funcs[i](start);
}

console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

function makeMultiplier(factor){
    return function(n){
        return n * factor;
    };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log(double(7));
console.log(triple(7));

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

// function once(fn){
//     let signal = false;
//     return function(){
//         if (!signal){
//             signal = true;
//             return fn();
//         }
//     }
// }

// function greet() {
//   console.log("Hello, running fn...");
//   return "done";
// }

// let runOnce = once(greet);

// console.log(runOnce());
// console.log(runOnce()); 
// console.log(runOnce());
// console.log(runOnce()); 

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
function once(fn){
    let signal = false;
    let result = null
    return function(){
        if (!signal){
            signal = true;
            result = fn();
        }
        return result;
    }
}

function greet() {
  console.log("Hello, running fn...");
  return "done";
}

let runOnce = once(greet);

console.log(runOnce());
console.log(runOnce()); 
console.log(runOnce());
console.log(runOnce()); 

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

function makeCounter(start){
    let count = start;

    return {
        inc:   ()=> { count += 1; },
        dec:   ()=> { count -= 1; },
        value: ()=>{ return count; }
    };
}

let c = makeCounter(0);
c.inc();
console.log(c.value());
c.inc();
console.log(c.value());
c.inc();
console.log(c.value());
c.inc();
console.log(c.value());
c.inc();
console.log(c.value());

c.dec();
console.log(c.value());

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start){
    let total = start;

    return function(x){
        total += x;
        return total;
    };

}

let adder1 = makeAdder(0);
let adder2 = makeAdder(0.1);

console.log(adder1(5));
console.log(adder1(10));

console.log(adder2(1));
console.log(adder2(1));
console.log(adder2(1));

// 15.Implement memoize1(fn). Show it caches slowSquare(9) twice.

function memoize1(fn){
    cache = {};
    let result;
    return function(x){
        if (x in cache){
            console.log('X in cache, and its value = ');
            return cache[x];
        }
        else{
            console.log('X not in cache, and will add its value that = ');
            result = fn(x);
            cache[x] = result;
            return result;
        }
    }
}

function slowSquare(n) {
  return n * n;
}

let memo1 = memoize1(slowSquare);
console.log(memo1(9));
console.log(memo1(9));

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let user = {
    name: "Beshoy",
    sayHi: function() {
        console.log("Hi " + this.name);
    }
};

//user.sayHi(); // Hi beshoy
// let f = user.sayHi;
//f(); // Hi undefined becase we do not pass this -> object user, so he did not know the username
// to solve it we will set f = user.sayHi.call(user);

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
let user2 = {
    name: "Sara"
}

user.sayHi.call(user2);
let f = user.sayHi.bind(user2);
f();

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

let greeter = {
    greet : function(greeting, sign){
        console.log(`${greeting} ${this.name} ${sign}`);
    }
}

const person = {
    name: "Beshoy Botros"
}

greeter.greet.apply(person, ["Hello", "!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.

let greetLara = greeter.greet.bind({ name : 'Lara' });

greetLara("Hello", "!");
greetLara("HI", "!");
greetLara("Hola", "!");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

function sayHello(obj){
    return greeter.greet.bind(obj, "Hello");
}

let hi11 = sayHello({name : 'Beshoy'});
let hi12 = sayHello({name : 'Beshoy Botros'});

hi11('#');
hi11('!');

hi12('!!');
hi12('^^');

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function test(){
    let argsArray = Array.from(arguments);
    console.log(argsArray.slice());

    let revArray = argsArray.slice().reverse();
    console.log(revArray);
}
test(1, 2, 3);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
const arr = [5, 2, 11, 7]

let mx_num = Math.max.apply(null, arr);
console.log(mx_num);

let mx_num2 = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mx_num2){
        mx_num2 = arr[i];
    }
}
console.log(mx_num2);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

let mxCall = Math.max.call(null, ...arr);
console.log(mxCall);

// while using call i were need to use spread operator cause call needs parameters unlike apply needs array instead of passing parameter

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
const User = {
    name: "Beshoy",
    age: "23",
    userInfo: function(){
        console.log(`User: ${this.name} Age: ${this.age + 1}`);
    },
}

let u = User;
u.userInfo();

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

let testTemplate = `
Hello World ${5},
this is multi lines templates
`
console.log(testTemplate);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
console.log(i);
console.log(j);
if (true){
    var i = 5;
    let j = 9;

    console.log(i);
    console.log(j);
}

// in let j the compiler raise error in log it before the if unlike var i it can log inside and outside if condition

// 28. Write code that tries to log x before let x = 5;.

console.log(x); //error casue x undfined till now
let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

const array = [1, 5, 8, 6];
array.push(10);
// error: array = [1, 5, 8, 9, 10] re assign the array variable

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

const square = (n) => {
    return n * n;
}
console.log(square(5));
