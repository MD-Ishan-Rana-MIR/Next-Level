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
            super(name, age, address)
        }

    }
    const studentData = new Student("abul", 22, "ugenda");
    studentData.getSleep(6);

    class Teacher extends Parent {

        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
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

{
    // type guard of typeof

    type alphaNumeric = number | string

    const addFun = (param1: alphaNumeric, param2: alphaNumeric): alphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    };

    console.log(addFun(23, 23))
    console.log(addFun(23, "23"))

}

{
    // type in guard 

    type User = {
        name: string
    };

    type Admin = {
        name: string;
        role: string
    };

    const adminUserFun = (param: User | Admin) => {
        console.log(`${param.name}`);
        if ("role" in param) {
            console.log(` ${param.name} ${param.role}`)
        }else{
            console.log(`${param.name}`)
        }
    } 



}


// instanceof type guard 

