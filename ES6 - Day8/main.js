import greetUser, {DataFetcher} from "./utils.js";
// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
greetUser("Beshoy Botros");

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message);
    }
);

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Welcome!");
        }, 1000);
    });
}

const result = await waitAndGreet();
console.log(result);

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

await fetchUserData();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array
async function fetchPostTitles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts.slice(0, 3).map(post => post.title);
}

console.log(await fetchPostTitles());

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
async function simpleTimer() {
    for (let i = 1; i <= 3; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                console.log(i);
                resolve();
            }, 1000);
        });
    }
}
await simpleTimer();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function safeJsonParse(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        console.log("Parsed JSON:", result);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
    }
}

safeJsonParse('{"name": "Omar"}');
// safeJsonParse('{"name: "Omar"}');


// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchCompletedTodosCount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    const todos = await response.json();
    return todos.filter(todo => todo.completed).length;
}
console.log(await fetchCompletedTodosCount());

// 9. in utils.js
const dataFetcher = new DataFetcher();
console.log(await dataFetcher.getUser(1));