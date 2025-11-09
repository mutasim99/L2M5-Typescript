function addNumber(num1: number, num2: number): number {
    return num1 + num2
}



const addNumber2 = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(addNumber2(12, 16));

const poorUser: {
    name: string,
    balance: number;
    totalBalance: object;
} = {
    name: 'Mutasim Billah',
    balance: 6,

    totalBalance(value: number) {
        return this.balance = value + this.balance
    }
};

const arr: number[] = [2, 4, 5];

const squareArr = arr.map((element: number) => element * element);
console.log(squareArr);
