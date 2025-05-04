import { watch } from "fs";
import { version } from "os";

{


    type user = {
        name: string;
        // role : string;
    };

    const userData: user = {
        name: "Ishan",
        // role : "Full stack developer",
    };

    type user1 = string;

    // const name : user1 = "hablu"


    type User2 = user & { role: string };

    const userTwo: User2 = {
        name: "ishan",
        role: "full stack developer"
    };

    interface User3 extends User2 {
        salary: number;
    }

    const userThree: User3 = {
        name: "Rana",
        role: "Full stack developer",
        salary: 15500
    }




    console.log(userThree)


    interface User4 {
        age: number;
        education: string
    };

    type multiply = (num1: number, num2: number) => number;


    const adddFun: multiply = (num1, num2) => {
        return (num1 * num2);
    };

    console.log(adddFun(10, 5));


    interface Adder {
        add(a: number, b: number): number;
    }

    // const addiction:Adder = (a,b)=>{
    //     return (a+b)
    // }

    // console.log(addiction(10,20))

    const addiction: Adder = {
        add: (a, b) => {
            return (a + b);
        }
    };

    console.log(addiction.add(20, 33));


    type roll1 = number[];

    const Roll1: roll1 = [12, 333, 333]

    interface Roll2 {
        [index: number]: number;
    };


    const roll2: Roll2 = [1, 2, 3];
}


{
    // generic type

    type genericType<T> = Array<T>


    const rollNumbers: genericType<number> = [1, 2, 3, 4, 5];

    const mentors: genericType<string> = [`Mr.X`, `Mr.Y`, `MR.Z`];

    const isBoolean: genericType<boolean> = [true, false, true, false];

    type objectGeneric<A> = Array<A>

    const user: objectGeneric<{ name: string, age: number }> = [
        {
            name: `hablu`,
            age: 21
        },
        {
            name: `kabul`,
            age: 25
        }
    ]
}


// geeric interface 

interface DeveloperType<T> {
    name: string;
    computter: {
        price: number;
        relaseDate: string;
        version: string;
        brand: string;
    };
    watch: {
        name: string;
        price: number;
        brand: string;
    };
    bikes: T;
}



const poorDeveloper: DeveloperType<{ name: string, price: number }> = {
    name: "ishan",
    computter: {
        price: 30000,
        relaseDate: "2024",
        version: "core i5",
        brand: "asus",
    },
    watch: {
        name: "y watch",
        price: 1500,
        brand: "casio",
    },
    bikes: {
        name: "puchare",
        price: 150000
    },
};


type BykeType = {
    name: string, price: number, model: string
}


const richDeveloper: DeveloperType<BykeType> = {
    name: "Ashik",
    computter: {
        price: 10000,
        relaseDate: "2024",
        version: "core i5",
        brand: "asus",
    },
    watch: {
        name: "y watch",
        price: 10000,
        brand: "casio",
    },
    bikes: {
        name: "puchare",
        price: 1500000,
        model: "appache12V"
    },
};


// generic with function 


const createArray = <T>(params: T): T[] => {
    return [params]
}


console.log(createArray<string>("bangladesh"))


const createArrayTwo = <T>(params: T): T[] => {
    return [params]
};

type userData = {
    name: string;
    id: number
}


console.log(createArrayTwo<userData>({ name: "abc", id: 22 }))

const courseWithStudent = <T>(params: T)=> {
    const course = `Next level with nextJs`
    return ({
        ...params,
        course}
    )
};
interface courseInterface {
    name : string;
    email : string,
    id : number
}

console.log(courseWithStudent<courseInterface>({name:"mr.x",email:"mr.x@gmail.com",id:1}));

