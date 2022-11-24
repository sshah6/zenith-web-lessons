//
(function (){  //We put all our javascript code inside this to prevent early JS code run before HTML and CSS
    
    console.log("hello functions"); //just checking if the files are connected

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
    console.log(isEven(1234567456));
    console.log(isEven(4567876543));
    console.log(isEven(true));
})();

// Arrow functions
const sayHello = (name) =>{
    //let message = "Hello " + name + ".";
    //or we can use another using back ticks
    let message = `Hello ${name}.`
    return message;
}
console.log(sayHello("Alex"))
