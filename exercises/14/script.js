// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100
console.log('===============================================');
let name = 'Wes';
let name2 = name;
name = 'Demetrio';
console.log(name, name2); // Demetrio Wes
console.log('===============================================');
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);
const team = players;
console.log(`Created a "copy" of players, called team[${team}]`);
team[3] = 'Lux';
console.warn(
  "Now team[3] = 'Lux' and because of that, players is changed too: "
);
console.log(players);
console.log('===============================================');

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
console.log('With slice (players.slice()) we can create a new COPY');
console.log(team2);

// or create a new array and concat the old one in
console.warn(
  'Using the the new ES6 Spread const team4 = [...players]; is also an option'
);
// or use the new ES6 Spread
const team4 = [...players];
console.log(team4);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

console.warn('This happens with objects too');

const captain = person;
captain.number = 99;

console.log(person);

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};

//console.clear();
console.log(wes);

console.warn('This is only 1 level deep!!');

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
