
console.log("Checking routes, array lesson");

//forEach function
//var names = ["Alex", "oh", "Pan", "Alicia"];

// names.forEach(function(name){  //the forEach function takes in a function, also a named function if available
//     console.log(name);
// });

//Named function passed in forEach function
//var names = ["Alex", "oh", "Pan", "Alicia"];

// function printNames(name){
//     // for(let i = 0; i < name.length; i++){
//     //     console.log(name[i]) ;
//     // }
//     console.log(names);
// }
//console.log("Printing", printNames(names));

//names.forEach(printNames);


//With arrow funtion
// names.forEach((arr) => {
//     console.log(arr);
// });

//############# For each loop exercise #############
// names.forEach(function(name, i, x){
//     console.log(name, i, x)
// });

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

//=========================> Bonus questions  <=================
// 1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
let foods = ['aburger', 'taco', 'eburrito', 'broth', 'steak', 'ucheckin', 'lamd', 'goat'];
//Note: first is looking at the first element of an array and the second[]is looking at the first element of element of array, like: two dimensional
for(let i = 0; i < foods.length; i++){
    let firstChar = foods[i][0];
    if(firstChar == 'a' || firstChar == 'e' || firstChar == 'i' || firstChar == 'o' || firstChar == 'u'){
        console.log(foods[i]);
    }
}

// ####Create an array of random numbers
let randomArr = [];
for(let i = 0; i < 10; i++){
var random = Math.floor(Math.random() * (100 - 20) + 20);
console.log("Random " + random);
randomArr.push(random);
}
console.log(randomArr);

// 2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
//let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
var total = 0;
function addEvenNums(num){
    for(let i = 0; i < randomArr.length; i++){
        if(num[i] % 2 === 0){
            total = total + num[i];
        }
    }
    return total;
}
console.log("Sum of all even numbers in random array: ",addEvenNums(randomArr));

// 3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
// otherwise, the function should return the string ‘input num NOT in input array’ (edited) 

//Check if number is in an array
function checkIfNumInArray(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            console.log("Value exist");
        }
        else{
            console.log("Value does not exist");
        }
    }
}
checkIfNumInArray(randomArr, 50);

//// ============================= ARRAYS AND FUNCTIONS EXAMPLES

// !! Write a function, logNums, that takes in an array and logs each number in the array !!
let arrNum = [1, 2, 3, 4, 5, 6, 7];
arrNum.forEach(function(arr){
    console.log(arr);
})
// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
let stringArr = ['h', 'e', 'l', 'l', 'o'];
console.log(stringArr.join(""));

// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!
function returnArrSum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    console.log(total);
}
returnArrSum(arrNum);

//==================> Manipulation of arrays <================
const nums = [1, 2, 3];
//we can remove or add elements but we cannot assign another value to this array name.

//##########3 mini exercises ###########3
/*
    1. Create an array the string elements 'April', 'May', 'June'
    2. Add 'July' in the correct place of the array
    3. Add 'March' in the correct place of the array
    4. July is too hot; remove it from the array.
    Console log the result and verify you get ['March', 'April', 'May', 'June']
 */
const months = ['April', 'May', 'June']; //declaring and assigning values to an array
months.push['July'];            //adds an element at the end of an array
months.unshift['March'];        //remove an element from the beginning of an array
months.pop['july'];              //removes from the end of an array
console.log(months);

// slice(val1, val2) method will cut and make another array, if no parameter entered then it take the whole array.
const pies = [
    "cherry",
    "apple",
    "key lime",
    "huckleberry",
    "rhubarb"
];

console.log(pies.slice(0, 3));//cutting the array from 0 to index 3 element
console.log(pies.slice(2));     //cuts from index 2 till the end
console.log(pies.slice(2, 2));  //does nothing, just an empty array
console.log(pies.slice(pies.length - 3)); //gives the 3 last elements or array

// what if we assign an array name to a variable
const x = [1, 2, 3];
const y = x;

console.log(x);
console.log(y);
//x array will change as we change the y array and vice-versa

console.log(x.push(4));
console.log(x, y);

//if we want to copy and have a brand new copy of the original we use slice(0), that way if we change one it does not effect the other one.

const z = x.slice(0);
console.log(z);
x.push(5);
console.log(x, y, z);

//#############################  Sorting array #######################

console.log(pies);
pies.sort();        //Sorting the array in default form, which is alphabetical order
console.log(pies);

// *********** Reversing an Array *********** 
pies.reverse(); //reverse manipulates the original array after its called, it means the array is changed even if we do not store it in a variable.
console.log(pies);

//=============> split / join =============>
//split and join does not manipulate the original array
let string = 'Bob,Sally,Mary';

console.log(string.split(" "));//splits with the first space it hits and go on.
console.log(string.split(","));//splits with on the first comma it hits
console.log(string.split("a"));//split with the "a" when encounters
console.log(string.split(""));//spits all the letters in the array, individually.

// const arrJoin = string.join("");
// console.log(arrJoin);
// const arrJoin1 = (string.join(","));
// console.log(arrJoin1);
// const arrJoin2 = string.join("**");
// console.log(arrJoin2);

// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */

const namesInMyRow = ['oh', 'said', 'pan', 'chu'];
console.log(namesInMyRow);

namesInMyRow.sort();
console.log(namesInMyRow);

namesInMyRow.reverse();
console.log(namesInMyRow);

const namesOfTwo = namesInMyRow.slice(0, 2);
console.log(namesOfTwo);

const namesJoin = namesInMyRow.join(" ");
console.log(namesJoin);

const namesJoinByUnderScore = namesInMyRow.join("_");
console.log(namesJoinByUnderScore);

