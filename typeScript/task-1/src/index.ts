
{
    // 1st problem 

    const message: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
    console.log(message)
}

{
    // 2nd problem 
    const myFun = (name: string, age: number, role: "admin" | "user" | "guest" = "admin") => {
        return ` name ${name} age ${age} role ${role} `
    };

    console.log(myFun(`abc`, 23))

}

{
    // task 3 
    type Person = {
        Name: string;
        Address: string;
        Hair: string;
        Eye_color: string;
        Income: number;
        Expense: number;
        Hobbies: string;
        Family: string;
        Members: string;
        Job: string;
        Skills: string;
        Marital: string;
        Status: string;
        Friends: string
    }
}


{
    // Task 4 
    interface Book {
        name: string;
        price: number;
    };

    interface Magazine {
        publishDate: string;
        price: number
    };

    type BookMagagineType = Book | Magazine;
    type BookMagagineIntersection = Book & Magazine;
}

{

    // task 5 

    const revStringFun = (data: string) => {
        const reverseStr = data.split("").reverse().join("");
        return reverseStr
    }

    console.log(revStringFun(`hello`))


}


{
    // const spreadFun = (num1: number, num2: number, num3: number): number []  => {
    //     const data:number = 12;
    //     return [
    //         num1,
    //         num2,
    //         num3,
    //        data
    //     ]

    // }


    const  obj1 = {
        name : "abc",
        age : 21,
        role : "developer"
    }
    const mainObj = {
        ...obj1
    }
    
    const spreadFun = (...data:string[]):string[]=>{
        return data
    };
    console.log(spreadFun("dd","ee","ff"))
}