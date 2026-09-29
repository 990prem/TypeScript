"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. STRING
// String stores text
let name = "Prem";
// 2. NUMBER
// Number stores integer and decimal values
let age = 22;
let salary = 25000.50;
// 3. BOOLEAN
// Boolean stores true or false
let isStudent = true;
// 4. ARRAY
// Array stores multiple values of the same type
let marks = [80, 75, 90, 85];
let names = ["Prem", "Rahul", "Aman"];
// 5. TUPLE
// Tuple stores fixed number of values with fixed types and order
let user = ["Prem", 22];
// 6. OBJECT
// Object stores data in key-value pairs
let student = {
    name: "Prem",
    age: 22
};
// 7. ANY
// Any can store any type of value
let value = 10;
value = "Hello";
value = true;
// 8. UNKNOWN
// Unknown can store any value,
// but we need to check its type before using it
let data = "TypeScript";
if (typeof data === "string") {
    console.log(data.length);
}
// 9. NULL
// Null represents no value
let emptyValue = null;
// 10. UNDEFINED
// Undefined means a value has not been assigned
let result = undefined;
// 11. VOID
// Void is generally used when a function does not return anything
function message() {
    console.log("Hello Prem");
}
// 12. NEVER
// Never is used when a function never returns normally
// Example: function always throws an error
function errorMessage() {
    throw new Error("Something went wrong");
}
//# sourceMappingURL=app.js.map