class Student1 {
    public name: string = "Prem";
}

const s1 = new Student1();

console.log(s1.name);


//private
// class Student2 {
//     private marks: number = 90;

//     showMarks() {
//         console.log(this.marks);
//     }
// }

// const s1 = new Student();

// console.log(s1.marks); 

//protected
// class Student {
//     protected name: string = "Prem";
// }

// class CollegeStudent extends Student {
//     showName() {
//         console.log(this.name); 
//     }
// }

// const s1 = new CollegeStudent();

// console.log(s1.name); 