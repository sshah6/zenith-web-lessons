console.log("warm up test");
// ================================= WARM UP
// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’
function returnLastTwoChars(input){
    if(typeof input === 'string'){
        return input.slice(-2);
    }
}
// console.log(returnLastTwoChars("cat"), "at");
// console.log(returnLastTwoChars("apple"), "le");
// console.log(returnLastTwoChars("carrot"), "ot");

// EXTRA CHALLENGE
// Create a function, returnLastCharsReversed that takes in two arguments:
//   1. a string of characters
//   2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.
// Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’
console.log("========== ==========  ============")
function returnLastCharsReversed(input, int){
    if(typeof input === 'string'){
        let sliced =  input.slice(-int);
        if(int === 0){
            return "";
        }
         sliced = sliced.split("");
         sliced = sliced.reverse();
         sliced = sliced.join("");
        return sliced;   
    }
}
// console.log(returnLastCharsReversed("codeup", 0), "");
// console.log(returnLastCharsReversed("codeup", 1), "p");
// console.log(returnLastCharsReversed("codeup", 2), "pu");
// console.log(returnLastCharsReversed("codeup", 3), "pue");
// console.log(returnLastCharsReversed("codeup", 4), "pued");
// console.log(returnLastCharsReversed("cat", 3), "tac");

// ##### 2 ########=========================
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’
function iBeforeE(input){
    if(typeof input === 'string'){
        input = input.replaceAll("ei", "ie");
        return input;
    }
}
console.log(iBeforeE("ei"), "ie");
console.log(iBeforeE("theirtheir"), "thierthier");
console.log(iBeforeE("height"), "hieght");