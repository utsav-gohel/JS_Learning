'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// const interface = 'Audio';
// const private = 534;
///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');
///////////////////////////////////////
// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
///////////////////////////////////////
// Arrow functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Arrays 
// declaration type -1 
const friends = ['Utsav','wooyoo','mocha','Apollo']
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
//declaration type -2 
const years = new Array(1991,1992,1984,2002)
console.log(friends[friends.length-2]);

//change elemenets in array  (we can do changes in array even if it is declare with const as it is not primitive data type)
friends[4] = "teddy"
friends[2] = "atlas"
// console.log(friends);

//Different Expermiment with Array.
const myname = "Utsav";
const ExArray = [myname,"hey",1212-100,friends]
console.log(ExArray);

const CalcAge = function(birthYear){
  const age = 2023-birthYear
  console.log(age);
}

const bYear = [1991,2002,1998]
const age1 = CalcAge(bYear[0])
const age2 = CalcAge(bYear[1])
const age3 = CalcAge(bYear[bYear.length-1])
// console.log(age1,age2,age3);

//Array Function -- push,pop,unshift,splice,map,index
const nameFun = ['utsav','mocha']
nameFun.push('bear')
//Add element at first value
nameFun.unshift("Hey")
//Remove Last element from array
nameFun.pop()

//Remove First element from array
nameFun.shift()

if(nameFun.includes('utsav')){
  console.log("You have friend called utsav");
}
console.log(nameFun,nameFun.indexOf('mocha'));

// Objects -- it contains key and value pair and (we can acces with (.) like name.value ,we can acces with (['']))
const ObjExample = {
  name : "utsav",
  contact : 1452369787,
  age : 2023-2001,
  friends : ["don't want to reveal names"]
}
console.log(ObjExample.name);
console.log(ObjExample['age']);
console.log(ObjExample ['na'+'me']);

let value =  "age";
if(ObjExample[value]){
  console.log(ObjExample[value]);
}else{
  console.log("not exist");
}
// console.log(ObjExample[value]);

//We can add more object value like below
ObjExample.email = "utsav@gmail.com"
ObjExample['dog'] = "Samoyed"
console.log(ObjExample);

// Method in objects.
const methodObject = {
  firstName : "utsav",
  driverLicense : false,
  myAge : function(birthYear){
    const myage = 2023-birthYear;
    console.log(myage);
    return myage
  },
  getsummary :function(){
    console.log(`${this.firstName} is a ${this.myAge(2002)} years old developer, and he has ${this.driverLicense == true? "a driving license":"not driving license"}`);
  }
}
methodObject.getsummary();


