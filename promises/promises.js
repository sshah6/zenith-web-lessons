// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));

// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//         console.log(data);
//     })
//     .catch(function(error) {
//         // handle errors
//     });

// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( userObj  => {
//             // do something with the username login 
//             console.log(userObj.login);
//         });
//     });
// });

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( userObj => {
//             // do something with each username
//             console.log(userObj.login);
//         })
//     })
//     .catch(error => console.error(error));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }

// // later on...

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let random = Math.random();
//         if (random > 0.5) {
//             console.log(random);
//             resolve();
//         } else {
//             console.log(random);
//             reject();
//         }
//     }, 1500);
// });

// console.log(myPromise); // a pending promise

// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }

// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

// =================== Fetch Bonuses 

// -- Ex. 1

// In your data directory, create a profiles.json file with the following...

// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }

// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.



// -- Ex. 2

// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in



// -- Ex. 3

// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.



// -- Ex. 4

// Create star-chars.json file in your data folder and paste in the following...

    [
      {
        "name": "Rey",
        "coolness": 9
      },
      {
        "name": "Luke Skywalker",
        "coolness": 9
      },
      {
        "name": "Darth Vadar",
        "coolness": 10
      }
    ]

// Create a function that fetches this array and returns an array of homeworlds for the characters.
// It will look something like the following...

    ['Jakku', 'Tatooine', 'Tatooine']

// Check out the curriculum on Promise.all() to work with multiple fetch requests at once.