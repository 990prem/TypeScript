function printValue<T>(value: T): T {
    return value;
}

console.log(printValue<number>(10));
console.log(printValue<string>("Prem"));

function show<T>(items: T[]) {
    console.log(items);
}

show<number>([1, 2, 3]);
show<string>(["A", "B", "C"]);