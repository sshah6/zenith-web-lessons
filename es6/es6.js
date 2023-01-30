//reduce functions returns a new array 
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = numbers.filter((n)=>{
//     return n % 2 === 0;
// })
// console.log(evens);

//Map functions alter the whole array and creat a new array
// var incremented = numbers.map((n) =>{
//     return n + 1;
// });
// console.log(incremented);

//The above code with es6 syntax
// const numbersNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evensNew = numbersNew.filter(n => n%2===0);
// console.log(evensNew);
// const incrementedNew = numbers.map((n => n + 1));
// console.log(incrementedNew);

//
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((previous, current) =>{
    return previous + current;
}, 0);
// console.log(sum);

// Using reduce on objects
const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((previous, current)=>{
    return previous + current.sales;
}, 0);
console.log(totalSales);

//Using reduce function to 
