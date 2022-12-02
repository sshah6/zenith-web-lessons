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

