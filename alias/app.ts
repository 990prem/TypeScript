type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Prem",
    age: 22
};

type Value = string | number | null;

let a: Value;

function abcd(obj: Value) {
    console.log(obj);
}

abcd("prem");
abcd(10);
abcd(null);


///intersection

type Employee = {
    name: string;
    salary: number;
};

type Developer = {
    language: string;
};

type DeveloperEmployee = Employee & Developer;

const person: DeveloperEmployee = {
    name: "Prem",
    salary: 30000,
    language: "JavaScript"
};