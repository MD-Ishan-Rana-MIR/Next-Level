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
            // console.log(` ${this.name} says how are you `)
        }
    }
    const studentData = new Student("ishan", 21, "21");
    studentData.studentFun()
    // console.log(studentData)
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
            // console.log(`${this.name} will sleep ${numOfHour} hours `)
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
            // console.log(`${this.name} will take class ${numberOfClass} in a day `)
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

    // console.log(addFun(23, 23))
    // console.log(addFun(23, "23"))

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
        // console.log(`${param.name}`);
        if ("role" in param) {
            // console.log(` ${param.name} ${param.role}`)
        } else {
            // console.log(`${param.name}`)
        }
    }



}



{
    // instanceof type guard 

    class Animal {
        name: string;
        species: string
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

        makeSound() {
            // console.log("I am making sound")
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            // console.log(`I am make bark`)
        }
    }


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makMew() {
            // console.log(` I am mewing`)
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makMew()
        } else {
            animal.makeSound()
        }
    }

    const dog = new Dog("dog", "dog");
    const cat = new Cat("cat", "catting");

    // console.log(getAnimal(cat))


}
{
    // access modifiar 

    class bankAccount {
        readonly id: number;
        name: string;
        protected balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id
            this.name = name;
            this.balance = balance
        }
        addBalance(amount: number) {
            this.balance = this.balance + amount
        }
        getBalance() {
            return this.balance
        }
    }

    const goribManusarAccount = new bankAccount(111, "gorib", 50);
    goribManusarAccount.addBalance(390)
    // console.log(goribManusarAccount)

    class studentBankAccount extends bankAccount {
        constructor(id: number, name: string, balance: number) {
            super(id, name, balance)
        }
        studentAdd(amount: number) {
            // console.log(`${this.balance}`)
            this.balance = this.balance + amount
        }

    }

}

{
    class bankAccount {
        public id: number;
        public name: string;
        protected balance: number
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance
        }
        set addBalance(amount: number) {
            this.balance = this.balance + amount
        }
        get getBalance() {
            return this.balance
        }
    }
    const goribManusarAccount = new bankAccount(111, "ishan", 300);
    goribManusarAccount.addBalance = 300;
    console.log(goribManusarAccount);
    console.log(goribManusarAccount.getBalance);
}


{
    // static 

    class counter {
        static count: number = 0;
        static increment() {
            return counter.count = counter.count + 1
        }
        static decrement() {
            return counter.count = counter.count - 1
        }
    }
    // const instanc1 = new counter();
    // console.log(counter.increment())
    // console.log(counter.increment())
    // console.log(counter.increment())
    // const instanc2 = new counter();
    // console.log(counter.increment())
    // console.log(counter.increment())
    // console.log(counter.increment())


}

{
    class Person {
        getSleep() {
            return `The person is sleeping 8 hours`;
        }
    }
    class Student extends Person {
        getSleep() {
            return `Student sleep is 7 hours`;
        }
    }
    class Developer extends Person {
        getSleep(): string {
            return `Developer is sleeping 6 hours`;
        }
    }

    const sleep = (param: Person) => {
        return param.getSleep();
    };

    console.log(sleep(new Student()));
    console.log(sleep(new Person()));
    console.log(sleep(new Developer()));


    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radious: number
        constructor(radious: number) {
            super()
            this.radious = radious
        }
        getArea(): number {
            return Math.PI * this.radious * this.radious;
        }
    }

    class Rectangle extends Shape {
        width: number;
        height: number;
        constructor(width: number, height: number) {
            super()
            this.width = width;
            this.height = height
        }
        getArea(): number {
            return this.width * this.height
        }
    }

    const calculation = (param:Shape)=>{
        return param.getArea()
    };


    const instanc1 = new Circle(20);
    const instanc2 = new Rectangle(10,20);
    console.log(calculation(instanc1))
    console.log(calculation(instanc2))



}