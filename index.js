//In let keyword we can declare value at any point of time.
let age;
age = 19;
console.log(age);

//In const keyword we have to assign certain value to the varibale at the time of initialization.
// const birthyear;
const birthyear = 2002;
// birthyear = 1555;  -- In const keyword we can assign value only once at the time of initialization. 
console.log(birthyear);

//types of operators

//math operators
//Calculate Age based on current year and birth year
const CurrentYear = 2023;
const CurrentAge = CurrentYear - 2002;
console.log(CurrentAge);
console.log(2**3); // 2**3 means 2*2*2

const Fname = "Utsav"
const Lname = "Gohel"
console.log(Fname+' '+Lname);

//Assignment operators
let x = 10+5;
x+=10;
x*=4;
x++;
++x;
x--;
--x;
console.log(x);

//Compariosn operators
let age1 = 16;
let age2 = 18;
let age3 = 16;
console.log(age1>age2);
console.log(age1<age2);
console.log(age1>=age3);
