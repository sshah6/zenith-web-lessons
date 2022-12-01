//
(function (){  //We put all our javascript code inside this to prevent early JS code run before HTML and CSS
    
    //console.log("hello functions"); //just checking if the files are connected

    //First function
    
    let message = myFunction("Alex");
    function myFunction(name){
        return "Thank you " + name + " you have used my function.";
    }
    //console.log(message);
    
    //Second function
    
    function fight(person1, person2){
        console.log(person1 + " punched " + person2 + " right in the kisser.");
    }
    //fight("Billy", "Bob");
    
    //Third function
    
    function isEven(num){
        //its good to assign variables as much as possible
        let number = num;
        let answer = (number % 2 == 0);
        return answer;
    }
    // console.log(isEven(1234567456));
    // console.log(isEven(4567876543));
    // console.log(isEven(true));
})();

// Arrow functions
const sayHello = (name) =>{
    //let message = "Hello " + name + ".";
    //or we can use another using back ticks
    let message = `Hello ${name}.`
    return message;
}
//console.log(sayHello("Alex"))


//################### Practice to creating functions ##############

//1. understand the problem, read and reread it
//2. Devise the problem and Pseudo code it
//3. Carry out the plan, and write code
//4. once its working see if you can make it better

//Example: create a function that take in a string and remove the first letter and returns the rest
//if no input given, returns false.
//if one character is given return and empty string


//########## Pseudo Code
//create a function with one argument
//check is its a string, if not return false
//check for number of characters
//if empty return empty
//remove the first char of the string and return the rest

function removeFirstChar(input){
    // if(typeof(input) !== 'string')
    // return false;
    // if(input.length === 0)
    //     return input;
    // else
    //     return input.slice(1);
//## In turnary condition way
    if(typeof input !== 'string') return false;
    return (input.length === 0) ? input : input.slice(1);
}
console.log(removeFirstChar("Hello"), "ello");
console.log(removeFirstChar("call"), "all");
console.log(removeFirstChar("1"), "");
console.log(removeFirstChar("",""));
console.log(removeFirstChar(" Hello"), "Hello");
console.log(removeFirstChar(" Hello "), "ello ");