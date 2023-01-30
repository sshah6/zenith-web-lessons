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
// console.log(iBeforeE("ei"), "ie");
// console.log(iBeforeE("theirtheir"), "thierthier");
// console.log(iBeforeE("height"), "hieght");

//==========> 3 <===========

// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]

function filterList(input){
    let array = [];
        for(let i = 0; i < input.length; i++){
            if(typeof input[i] === 'number'){
                // console.log(input[i]);
               array.push(input[i]);
            }
        }
    return array;
}
// console.log(filterList([1, 2, "a", "b"]));
// console.log(filterList([1,2,"aasf","1","123",123]));


// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.


// zipArrays([], []) // returns []
// zipArrays([1], [2]) // returns [1, 2]
// zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns... 

// [
//   1, 
//   'bob', 
//   2, 
//   null, 
//   'a', 
//   'sally',
//   'b',
//   25
// ]

function zipArrays(arr1, arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i ++){
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}
// console.log(zipArrays(['a', 'b'], ['c', 'd'])); // returns... ['a', 'c', 'b', 'd']
// console.log(zipArrays([1], [2])); // returns [1, 2]
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]));
// console.log(zipArrays([], [])); // returns []

// ================================= WARM UP

// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.


const users = [
  {
    firstName: 'Justin',
    lastName: 'Reich',
    dob: '1923-01-01',
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    firstName: 'Sally',
    lastName: 'Smith',
    dob: '1935-03-11',
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    firstName: 'Fred',
    lastName: 'Smith',
    dob: '1999-01-21',
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  },
]

// getUserCredentials(users) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/
function getUserCredentials(user){
    let userPass = new Array();
    for(let i = 0; i < user.length; i++){
        userPass.push({userName: user[i].firstName , password: user[i].password});
        // userPass.push(new Object({username: user[i].firstName , password: user[i].password}));
    }
    return userPass;
}
// console.log(getUserCredentials(users));

// for (let i = 0; i < 10; i++) {
//   console.log("The value of i is " + i);
//    i++;
//    i--;
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

// Create a function, shiftElementsOver, that takes in an array and returns the array with all elements moved one index further into the array. The final element should be moved to the front. Assume the input array will have three or more elements.

function shiftElementsOver(input){
  if(typeof input === 'object'){
    let inputPop = input.pop();
    input.unshift(inputPop);
    return input;
  }
}
// console.log(shiftElementsOver([1, 2, 3, 4, 5])); // returns [5, 1, 2, 3, 4]
 
// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}

function findFavorableNeighborhood(input){

  let schoolRating = 0;
  for(let j = 0; j < input.schools.length; j++){
    schoolRating += input.schools[j].rating;
  }
    if(input.medianHomePrice < 300000 && input.crimeRate === 'low' && schoolRating >= 24){ 
      console.log("Favorable Neighborhood.");
    }else{
      console.log("Neigborhood is not favorable.");
    }
}
// findFavorableNeighborhood(neighborhood1) // returns false due to school rating
// findFavorableNeighborhood(neighborhood2) // returns false due to crime rate
// findFavorableNeighborhood(neighborhood3) // returns true
// findFavorableNeighborhood(neighborhood4) // returns false due to median home price

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
function encodeStr(input){
  let lowerC = input.toLowerCase();
  lowerC = lowerC.replaceAll('i', "1");
  lowerC = lowerC.replaceAll('a', "@");
  lowerC = lowerC.replaceAll('s', "$");
  return lowerC;
}
// console.log(encodeStr('apple')); // returns ‘@pple’
// console.log(encodeStr('codeup')); // returns ‘codeup’
// console.log(encodeStr('SASS')); // returns ‘$@$$’
// console.log(encodeStr('bike')); // returns ‘b1ke’
// console.log(encodeStr('CODEUP'));

//=============> Warm up
// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.


const strs = [
	{
		id: 1,
		str: 'hello'
	},
	{
		id: 2,
		str: 'world'
	},
	{
		id: 3,
		str: 'codeup'
	},
	{
		id: 4,
		str: 'x'
	}
]

// reverseStrings(strs) // returns...

// [
// 	{
// 		id: 1,
// 		str: 'olleh'
// 	},
// 	{
// 		id: 2,
// 		str: 'dlrow'
// 	},
// 	{
// 		id: 3,
// 		str: 'puedoc'
// 	},
// 	{
// 		id: 4,
// 		str: 'x'
// 	}
// ]
function reverseString(obj){
  let arr = [];
  for(let i = 0; i < obj.length ; i++){ 
    let reverse = obj[i].str.split('').reverse().join('');
    arr.push({id: i+1, str: reverse});
  }
 return arr;
}
console.log(reverseString(strs));