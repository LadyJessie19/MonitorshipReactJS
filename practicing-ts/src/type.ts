//exercicio 1

interface User {
    id:number
    name:string
    age:number
    email:string
}

type UserWithoutEmail = Omit<User, 'email'>

type UserType = User | UserWithoutEmail

//exercicio 2

interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
}

type CarWithSelectedProps = Pick<Car, 'brand' | "year" | "model">

type CarType = Car | CarWithSelectedProps

//exercicio 3

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

