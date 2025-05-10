//  Problem 1
const formatString = (input: string, toUpper: boolean = true): string => {
    if (toUpper === true) {
        return input.toUpperCase()
    } else if (toUpper === false) {
        return input.toLowerCase()
    }
    else {
        return input.toUpperCase()
    }
};


console.log(formatString("a"))
console.log(formatString("a", true))
console.log(formatString("a", false))


// Problem 2
type bookType = {
    title: string;
    rating: number;
};

const filterByRating = (items: bookType[]): bookType[] => {
    return items.filter((item) => item.rating >= 4);
};

const book: bookType[] = [
    {
        title: "Book A",
        rating: 4.5
    },
    {
        title: "Book B",
        rating: 3
    },
    {
        title: "Book C",
        rating: 4
    }
];

console.log(filterByRating(book));

// Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays([1, 2], [3, 4], [5], [3, 4, 5]));

// Problem 4

class Vehicle {
    private _make: string;
    year: number;
    constructor(_make: string, year: number) {
        this._make = _make;
        this.year = year
    }
    getInfo(): string {
        return `Make ${this._make}, Year : ${this.year} `
    }

}
class Car extends Vehicle {
    private model: string;

    constructor(_make: string, year: number, model: string) {
        super(_make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Walton", 2020, "chomolloko");
console.log(myCar.getInfo())
console.log(myCar.getModel())


// Problem 5


const processValue = (value: string | number): number | string => {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
};

console.log(processValue("hello"))
console.log(processValue(10))


// problem 6 


interface Product {
    name: string;
    price: number
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, item) => {
        console.log(max, item)
        return item.price > max.price ? item : max
    })
}
const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));


// problem 8 


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000); 
    });
}

squareAsync(4).then(console.log);        
// squareAsync(-3).catch(console.error);