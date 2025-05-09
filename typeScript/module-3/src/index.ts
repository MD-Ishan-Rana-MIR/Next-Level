{
    class Student {
        // name: string;
        // role: number;
        // age: string;
        // parameters propertis
        constructor(public name: string, public role: number, public age: string) {
            // this.name = name;
            // this.role = role;
            // this.age = age
        }
        studentFun() {
            console.log(` ${this.name} says how are you `)
        }
    }
    const studentData = new Student("ishan", 21, "21");
    studentData.studentFun()
    console.log(studentData)
    studentData.age
    studentData.role
    studentData.age
}

{
    // inheritance 

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHour: number) {
            console.log(`${this.name} will sleep ${numOfHour} hours `)
        }
    }

    class Student extends Parent {
        

        constructor(name: string, age: number, address: string) {
            super(name,age,address)
        }

    }
    const studentData = new Student("abul", 22, "ugenda");
    studentData.getSleep(6);

    class Teacher extends Parent  {
        
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation
        }

    
        getClass(numberOfClass: number) {
            console.log(`${this.name} will take class ${numberOfClass} in a day `)
        }

    }
    const teacherData = new Teacher("mosihur", 22, "ugenda", "teacher");
    teacherData.getSleep(6);
    teacherData.getClass(6)


}