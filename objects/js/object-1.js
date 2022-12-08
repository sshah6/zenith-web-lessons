

console.log("Checking routes for object-1.");
//objects allow us to group together state (values) and behavior (functions).
// const dog = new Object();
// console.log(typeof dog);

//new way to declare object

//const cat = {};
//console.log(typeof cat);

const cat  = {
    name: "Kitty",
    age: 5
}
console.log(cat);
console.log(cat.name);
console.log(cat.age);

cat.color = 'orange';
console.log(cat);

//we can change the already made properties
cat.age = 8;
console.log(cat.age);

//################  fist exercise  ################
// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//   - brandName
//   - type
//   - volumeInLiters
//   - priceInCents
//   - expirationDate
//   - datesOfPreviousSips (use an array of strings)
//   - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

//Object 1
const drink1 = {
    brandName: "Pepsi",
    type: "Vanilla",
    volumeInLiters: 0.01,
    expirationDate: 29+"th",  //there is a date function available
    dateOfPreviousSips: [1, 5, 7, 8, 10,'6th'],
    isOpen: "yes"   //boolean is prefered
}
console.log(drink1);
console.log(drink1.isOpen);

//Object 2
const drink2 = {};
drink2.brand = 'Coke';
drink2.type = 'strawberry';
drink2.volume = '0.001';
drink2.isOpen = "No";

console.log(drink2);
console.log(drink2.brand);
console.log(drink2['volume']);

//Example
const pets = [
      {
          givenName: 'Spot',
          isDog: true
      },
      {
          givenName: 'Max',
          isDog: false
      },
      {
          givenName: 'Goldy',
          isDog: false
      }
  ];

  pets.forEach(function(pet){
    console.log(pet.givenName);
  })

  for(let i = 0; i < pets.length; i++){
    console.log(pets[i].isDog);
  }

//########### exercises #########



  // !! MINI EXERCISE 2 !!


  const users = [
      {
          givenName: 'Sam',
          age: 21
      },
      {
          givenName: 'Cathy',
          age: 34
      },
      {
          givenName: 'Karen',
          age: 43
      }
  ];

  // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
  let arr = [];
  arr.push(users[0].givenName, users[1].givenName,users[2].givenName,);
  console.log(arr);
  console.log(arr.join(' '));

  let arr1 = [];
  users.forEach(function(user){
    let they = user.givenName;
    arr1.push(they);
    return arr1;
  });
  console.log(arr1.join(' '));

  // 2. Change the names of all users to "John Doe"

//   users.forEach(function(user){
//     user.givenName = "John Doe"
//     console.log(user.givenName);
//   });
  // 3. Increase the current age of all users by 1
    users.forEach(function(user){ 
        console.log(user.age + 1);
    });
  // Can you accomplish each step using iteration?


  // Extras...
    // log the total of all the ages
    let sum = 0;
    for(let i = 0; i < users.length; i++){
        sum = sum + users[i].age;
    }
    console.log(sum);

    // log the average age of all users
    let ave = 0;
    ave = sum/users.length;
    console.log(ave);
    // log all the user information in the following format...

    users.forEach(function(user){
        console.log(`user: ${user.givenName} | age: ${user.age}`);
    })
  /*
      user: Sam | age: 21
      user: Cathy | age: 34
      user: Karen | age: 43
   */
    console.log(users);
  // log the name of the longest given name of a user


  const users1 = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karenufjytfg',
        age: 43
    }
];
let longest;
let len = 0
for(let i = 0; i < users1.length; i++){
    if(users1[i].givenName.length > len){
        len = users1[i].givenName.length;
        longest = users1[i].givenName
        
    }
}console.log(longest);

//=====================> Assigning functionality to an object <===============

 const dog1 = {
      petName: 'Sparky',
      age: 4,
      bark: function() {
          console.log("Woof woof!");
      },                                    //*********************************** */
      eat: function(food) {                 //A method is a function inside an object
          console.log('Dog is eating...' + food);
      },
      agePet: function() {
          this.age += 1;        //(this) refers to the object when its in that object.
      }
  }
  dog1.bark();
  dog1.agePet();
  console.log(dog1);


 const dog2 = {
      petName: 'Dino',
      age: 10,
      bark: function() {
          console.log("Woof woof!");
      },
      eat: function(food) {
          console.log('Dog is eating...' + food);
      },
      agePet: function() {
          this.age += 1;
      }
  }

  dog2.bark(); // when the bark is called, it is calling the function that is associated to it.
  dog2.eat("fruit"); 
  //dog.agePet();
  console.log(dog2);