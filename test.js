// Random JavaScript Code Example

const appName = "DemoApp";
const version = "1.0.0";

function greet(name) {
    return `Hello, ${name}! Welcome to ${appName}.`;
}

const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 25 },
    { id: 4, name: "David", age: 30 }
];

console.log(greet("Ankit"));

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

function calculateAverageAge(data) {
    const total = data.reduce((sum, user) => sum + user.age, 0);
    return total / data.length;
}

console.log("Average Age:", calculateAverageAge(users));

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}

const emp = new Employee(101, "Rahul", 50000);
console.log(emp.annualSalary());

const numbers = [5, 10, 15, 20, 25, 30];

const squares = numbers.map(num => num * num);
console.log(squares);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log("Fetching data...");
    await delay(1000);
    return {
        status: "success",
        records: 5
    };
}

async function main() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

main();

const settings = {
    theme: "dark",
    language: "en",
    notifications: true
};

Object.entries(settings).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

const randomValues = [];

for (let i = 0; i < 10; i++) {
    randomValues.push(Math.floor(Math.random() * 100));
}

console.log(randomValues);

const sorted = [...randomValues].sort((a, b) => a - b);
console.log(sorted);

const highest = Math.max(...randomValues);
const lowest = Math.min(...randomValues);

console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);

const text = "Playwright Automation with JavaScript";

const words = text.split(" ");
console.log(words);

const upper = text.toUpperCase();
console.log(upper);

const contains = text.includes("Automation");
console.log(contains);

const today = new Date();

console.log(today.toISOString());

console.log("Execution Completed Successfully.");