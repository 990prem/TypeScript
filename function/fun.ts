function greet(name: string) {
    console.log("Hello " + name);
}

greet("Prem");

//optional parameter
// function greet(name: string, age?: number) {
//     console.log(name);
// }

// greet("Prem");
// greet("Prem", 22);

//default parameter
// function greet(name: string, age: number = 20) {
//     console.log(name, age);
// }

// greet("Prem");
// greet("Rahul", 22);

//rest parameter
function add(...numbers: number[]) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(add(10, 20));
console.log(add(10, 20, 30, 40));

//function overloading
function addq(a: number, b: number): number;
function addq(a: string, b: string): string;

function addq(a: any, b: any) {
    return a + b;
}

console.log(addq(10, 20));
console.log(addq("Hello ", "Prem"));
