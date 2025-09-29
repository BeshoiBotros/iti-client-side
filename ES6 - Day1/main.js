// 1- Write a function that greets a user, using a default parameter for the name.
function greetUser(name = "user") {
    console.log(`Hello, ${name}!`);
}

// 2- Write a function that calculates the total price with a default tax rate parameter.
function calculateTotalPrice(price, taxRate = 0.1) {
    const total = price + (price * taxRate);
    console.log(`Total price: $${total.toFixed(2)}`);
}

// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name = "Anonymous", age = 0, role = "user") {
    return {
        name,
        age,
        role
    };
}

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiplies(...args){
    return args.reduce((acc, curr)=>{return acc * curr}, 1)
}

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiplies2(...args){
    const sum = args.reduce((acc, curr)=>{return acc + curr}, 0)
    return args[0] * sum
}

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function combineStrings(...args) {
    return args;
}

// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];

// 8- Copy an array using the spread operator.
const arr = [1, 2, 3];
const arrCopy = [...arr];

// 9- Merge two objects into one using the spread operator.
const obj1 = {1 : 1, 2: 2};
const obj2 = {3: 3, 4: 4};
const mergedObj = {...obj1, ...obj2};

// 10- Update a property in an object using the spread operator to create a new object.
const updatedMergedObj = {...mergedObj, 2: 20};

// 11- Destructure an array to get the first and second elements into variables.
const [name, age] = ['Beshoy', 23];

// 12- Destructure an array to get the first element and the rest into another array.
const [first, ...rest] = ['Beshoy', 23, 'Backend Developer'];

// 13- Destructure an object to extract two properties into variables.
const user = {name: 'Beshoy', age: 23}
const {myName, myAge} = user;

// 14- Destructure an object and rename the extracted properties.
const {name: userName, age: userAge} = user;

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function displayUserInfo({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}