// First Case
let condition = false;
if(condition){
    console.log("the condition is true.");
}else {
    console.log('the condition false.');
}

//Second case
let city = "San Antonio";
if(city == "Boston"){
    console.log("city is Boston, got red sox!.");
}else if(city == "San Antonio"){
    console.log("City is San Antonio, Go Spurs.");
}else {
    console.log('we do not know where this is.');
}

//Other case
let city1 = "SA"        //prompt("where is do you live");

if(city1 == "Boston"){
    console.log("city is Boston, got red sox!.");
}else if(city1 == "San Antonio"){
    console.log("City is San Antonio, Go Spurs.");
}else if(city1 == city1){
    console.log(`Go ${city1}...Go!`); //String literal syntax
}else {
    console.log('we do not know where this is.');
}

//Different case

function addNumbers(num1){
    let number;
    if(typeof num1 == "string"){
        number = parseInt(num1);
    }
    return number + 2;
}
console.log(addNumbers("5"));

//other case
//Turnery statement 
let success = true;
let message = success ? "Yes true" : "It was not";
//the question mark asks for true, and : ask for false.
console.log(message);

//Switch statement
var pizzaPref = prompt("Whats your pizza pref?");
switch(pizzaPref){
    case "cheese":
        console.log("Ok, cool, cheese!");
        break;
    case "double cheese":
        console.log("double cheese is pretty good");
        break;
    default:
        console.log("Oh okay, no preferences?");
        break;
}

//checking for git hub, delete later