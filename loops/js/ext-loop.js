console.log("Checking routes. ext-loop-exercise");
//Guess Game
// var randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(randomNum);
// while(true){
//     let userGuess = prompt("Guess a number between 1 - 10.");
//     let userGuessInt = Number(userGuess);
//     if(userGuessInt > 0 && userGuessInt < 10 && isNaN(userGuess) === false){
//         for(let i = 0; i < 15; i++){
//             if(userGuessInt === randomNum){
//                 let count = 0;
//                 count++;
//                 alert("Congrats! you entered " + userGuess + " computer entered " + randomNum + " WinCount: " + count);
//                 break;
//             }
//         }
//     }else{
//         alert("Error: invalid input!")
//         break;
//     }
// }

//Return only numbers
// function getNum(input){
//     if(typeof input === 'string'){
//         input = input.split("");
//         //return input;
//         var arr = new Array();
//         for(let i = 0; i < input.length; i++){
//             //let inputInt = parseInt(input[i]);
//             if(input[i] == '1' || input[i] == '2' || input[i] == '3' || input[i] == '4' || input[i] == '5'|| input[i] == '6'|| input[i] == '7'|| input[i] == '8'|| input[i] == '9' || input[i] == '0'){
//                 arr.push(input[i]);    
//             }  
//         }//return arr;
//         arr = arr.join('');
//         return arr;
//     }else{
//         return false;
//     }
// }
// console.log(getNum('abc')) // returns ''
// console.log(getNum('123')) // returns '123'
// console.log(getNum('abc123')) // returns '123'
// console.log(getNum('abc123weg')) // returns '123'
// console.log(getNum('555aaa')) // returns '555'
// console.log(getNum('a5a5')) // returns '55'
// console.log(getNum('ab1c3js4')) // returns '134'

//Getting the numbers out of the mixed string and add them together
// var stringInt = function getNum(input){
//     if(typeof input === 'string'){
//         input = input.split("");
//         //return input;
//         var arr = new Array();
//         for(let i = 0; i < input.length; i++){
//             //let inputInt = parseInt(input[i]);
//             if(input[i] == '1' || input[i] == '2' || input[i] == '3' || input[i] == '4' || input[i] == '5'|| input[i] == '6'|| input[i] == '7'|| input[i] == '8'|| input[i] == '9' || input[i] == '0'){
//             arr.push(input[i]); 
//         }
//     }
//         //arr = arr.join('');
//         return arr;      
//     }else{
//         return false;
//     }
// }
// var funcOut = stringInt("abc123765"); //assigning the function to a variable
// console.log("the output array is a string " + funcOut);
// var realDigits = funcOut.map(Number); // Changing the output array to array od integers
// console.log("Now the output array is array of ints: " + realDigits);
// var sum = realDigits.reduce(myFunction);// using reduce function ot add elements or an array
// function myFunction(total, value){
//     return total + value;
// }
// console.log("Sum of all elements of int array: "+sum) // returns '123'


//Moving each single digit of a number towards ot 5 if it is 5 then return itself
// function moveDigitsTowardFive(number){
//     var digitArr = number.toString().split('');
//     console.log(digitArr);
//     var realDigits = digitArr.map(Number);
//     console.log(realDigits);
//     //return digitArr;
//     //return realDigits;
//     for(let i = 0; i < realDigits.length; i++){
//         if(realDigits[i] > 5){
//             realDigits[i] -= 1;
//         }else if(realDigits[i] < 5){
//             realDigits[i] +=1;
//         }   
//     }
//     //return realDigits;
//     realDigits = realDigits.join("");
//     return realDigits;
// }

// console.log(moveDigitsTowardFive(5)); // returns 5
// console.log(moveDigitsTowardFive(159)); // returns 258
// console.log(moveDigitsTowardFive(456)); // returns 555
// console.log(moveDigitsTowardFive(236)); // returns 345
// console.log(moveDigitsTowardFive(19286538)); // returns 28375547
// console.log(moveDigitsTowardFive(0000)); // returns 1111
// console.log(moveDigitsTowardFive(99)); // returns 88

//replaces the the vowels with the second argument of the function
// function replaceVowels(input, val){
//     if(isNaN(input, val) === true){

//     }
// }