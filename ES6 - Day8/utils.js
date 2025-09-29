function greetUser(name){
    console.log("Hello, " + name + "!");
}

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
export class DataFetcher{
    async getUser(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.json();
    }
}

export default greetUser;