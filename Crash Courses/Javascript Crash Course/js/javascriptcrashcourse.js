/*
    alert('Hello World') this command pops up an alert on the screen saying hello world 
*/
/*
    console.log('Hello World')
    console.error('this is an error');
    console.warn('this is a warning'); 
*/

//var, let, const - Do not use var anymore because var is global
/* difference between let and const is that let can be changed e.g.
const age = 30;
age = 31;
console.log(age);
*/

/*
const name = "John"; 
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof john);
// says what type it is in console
*/

/*
    const s = "Hello World";

    console.log(s.length)
    console.log(s.toUpperCase);

    console.log(s.substring(0,5).toUpperCase());
    //splits by letter
    console.log(s.split(''));
*/

/*
    const s = ("technology, computers, it, code");
    console.log(s.split(", "));
    split by names
*/

//arrays - variables that hold multiple values

/*  
    const fruits = ['apples', 'oranges', 'pears'];
    console.log(fruits[1]);
    arrays are 0 based, start from 0.
*/

// to add something to an array:

/*
    const fruits = ['apples', 'oranges', 'pears'];
    fruits[3]= 'grapes';
    console.log(fruits);
*/

// another way that most people use to add something to the end:

/*
const fruits = ['apples', 'oranges', 'pears'];
fruits.push('mangoes');
console.log(fruits);
*/

//How to add stuff to the start:

/*
const fruits = ['apples', 'oranges', 'pears'];
fruits.unshift('strawberries');
console.log(fruits);
*/

//How to take the last one off the array

/*
    const fruits = ['apples', 'oranges', 'pears'];
    fruits.pop('pears');
    console.log(fruits);
*/

//To check if something is an array:

/*
    const fruits = ['apples', 'oranges', 'pears'];  
    console.log(Array.isArray(fruits));
    // says true because it is an array
    console.log(Array.isArray('pears'));
    //says false because it is not an array
*/

//To find the index of an array string:

/*
    const fruits = ['apples', 'oranges', 'pears']; 
    console.log(fruits.indexOf('pears'));
    console.log(fruits);
*/

//Working with inner elements
/*
const person = {
    firstName:'Albert',
    lastName:'Jordaan',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street:'50 main st',
        city: 'Dunedin',
        Region: 'Otago'
    }
}
console.log(person.firstName, person.lastName)
console.log(person.hobbies[1]);
console.log(person.address.city);

//Can pull stuff out to work on it
const {firstName, lastName, address: {city}} = person;
console.log(firstName);
//To take out an inner string and display it
console.log(city);

//You can directly add properties
person.email ='albert.jordaan@outlook.com';
console.log(person);
*/

/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos[1].text); //outputs: meeting with boss
*/

//To convert to JSON to send to a server, must convert to send to a server:

/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

/*
//for loop:
for (let i=0; i<=10; i++) {
    console.log(`For loop number: ${i}`);
}


//while loop:
let i= 0;
while (i<10){
    console.log(`While loop number: ${i}`);
    i++;
}
*/
/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

for (let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}

for (let eachoutput of todos){
    console.log(eachoutput.text);
}
*/

//forEach, map, filter

//forEach
    todos.forEach(function(eachoutput){
    console.log(eachoutput.text);
})

//map
    todos.map(function(eachoutput){
    console.log(eachoutput.text);
})

