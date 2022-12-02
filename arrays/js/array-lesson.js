console.log("Checking routes, array lesson");

//forEach function
//var names = ["Alex", "oh", "Pan", "Alicia"];

// names.forEach(function(name){  //the forEach function takes in a function, also a named function if available
//     console.log(name);
// });

//Named function passed in forEach function
var names = ["Alex", "oh", "Pan", "Alicia"];

function printNames(name){
    // for(let i = 0; i < name.length; i++){
    //     console.log(name[i]) ;
    // }
    console.log(names);
}
//console.log("Printing", printNames(names));

names.forEach(printNames);


//With arrow funtion
names.forEach((arr) => {
    console.log(arr);
});

//############# For each loop exercise #############
// names.forEach(function(name, i, x){
//     console.log(name, i, x)
// });

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }