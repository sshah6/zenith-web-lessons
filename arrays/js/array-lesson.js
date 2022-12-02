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