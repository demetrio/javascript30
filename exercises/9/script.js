const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello there! This is just a simple console.log');

// Interpolated
console.log('This is an interpolated console.log. So, hello my name is %s.', 'Demetrio');

// Styled
console.log('%cI am a console.log, but with styles', 'font-size: 15px; background-color: grey;');

// warning!
console.warn('This is a warn made with console.warn');

// Error :|
console.error('This is error. This is an error made with console.error');

// Info
console.info('Fun Fact: 29th May is officially “Put a Pillow on Your Fridge Day”.');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Nope, thats wrong!');

// clearing
console.log('If you use console.clear(); you can clear this console');

// Viewing DOM Elements
console.log('================================');
console.log('If you use console.dir(p); you can see all the information about "p"');
console.log('================================');

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.age}`);
    console.log(`This is ${dog.years}`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Dog');
console.count('Dog');
console.count('Cat');
console.count('Dog');
console.count('Cat');

// timing
console.time('fetch!');
// cool stuff goes here...
console.timeEnd('fetch!');

// table
console.table(dogs);
