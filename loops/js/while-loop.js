console.log("Checking routes.");

//While loop
//As long as the condition is true, it loops thro the code again and again
let iteration = 0;
while(iteration < 10){
    //console.log(`while loop # ${iteration}`);
    iteration++;
}

//do-while loop
iteration = 0;
do{
    //console.log(`do-while loop # ${iteration}`);
    iteration++;
}while(iteration < 10);

//for loops
for(let i = 0; i < 10; i++){
    //console.log("Looping till the condition is met: " + i);
}
//Note: if you wanna loop every other number, put i+=2 and so on and so forth. 
//Ex: 
let array = ["pears", "melon", "grapes", "onions"];
for(let i = 0; i < array.length; i++){
    if(array[i] === 'melon'){
        console.log("Wait... " + array[i] + " is a fruit!");  
    }else{
        fruitMessage(array[i]);
    }  
}
function fruitMessage(input){
    console.log(`${input} are awesome!`);
}


//Break and continue
//Note: break stops the loop once the condition is met.
//ont the other hand continue, runs the rest of the loops after the condition is met.

let numArray = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] === 4){
        //console.log(numArray[4]);
        continue;
    }else{
        console.log(numArray[i]);
    }
}