let sales: number = 123_456_789;
let course: string = 'Typerscript';
let is_published: boolean = true;
let numbers: number[] = [1, 2, 3];
let user: [number, string] = [1, 'Mosh']
enum Size { Small = 1 , Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize)
function calculateTax(income: number): number {
    return 0;
}
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void

}

let employee: Employee = {
    id: 1, 
    name: '', 
    retire: (date: Date) => { console.log(date); }
}

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
type Quantity = 50 | 100;
let quantity: Quantity = 50;

function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!')
}

greet(null)

type Customer = {

    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

