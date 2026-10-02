function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("Prem");
printValue(100);

// Another common Type Guard: instanceof
class Dog {
    bark() {
        console.log("Bark");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

function sound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}