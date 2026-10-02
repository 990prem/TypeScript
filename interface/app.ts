interface User {
    name: string;
    age: number;
    phone?: string;
}

const user: User = {
    name: "Prem",
    age: 22
};

//extends interface
interface User {
    name: string;
}

interface Student extends User {
    age: number;
}

const student: Student = {
    name: "Prem",
    age: 22
};