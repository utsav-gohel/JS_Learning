//In let keyword we can declare value at any point of time.
let age;
age = 16;
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

//String and templetes literals

//Example of string literals.
const firstName = 'utsav'
const job = 'developer'
const birthYear = 2002;
const year = 2023
const utsav = "I'm "+firstName+',a '+(year-birthYear)+' years old '+job+'!'
console.log(utsav);

//Example of templates literals.
const utsv = `I'm ${firstName} ,a ${year-birthYear} years old ${job} !`
console.log(utsv);

//If-Else statements 
const isOldEnough = age>=18  //here we apply condition in variable that return true if age>=18
console.log(age);
if(isOldEnough){
    console.log('You can start driving the vehicle');
}else{
    console.log('You can not start drive the vehicle as you below 18');
    const currntAge = CurrentYear - birthYear
    const data = currntAge-18
    console.log(`You can start driving the vehicle after ${data} years`);
}

// if(age>=18){
//     console.log('You can start driving the vehicle');
// }else{
//     console.log('You can not start drive the vehicle as you below 18');
// }

 //Type conversation
 const myData = 100;
 console.log(typeof(100),typeof(String(100)));
 console.log(Number("utsav"));
 console.log(typeof(NaN));
 console.log(typeof(String(23)),typeof(23));

 let n ='1'+1
 n=n-1;
 console.log(n);

 console.log('10'-'4'-'3'-2+'5');

 //Truthy and falsy values
 const money = 0;
 if(money){
    console.log("Don't spend it");
 }else{
    console.log('You should find the resources to earn money!!');
 }

 //Logical operators
 const hasDrivingLicense = true;
 const hasGoodVision = false;
 console.log(hasDrivingLicense&&hasGoodVision);
 console.log(hasDrivingLicense||hasGoodVision);
 console.log(!hasDrivingLicense);
 console.log(!hasGoodVision);

 const isTired = true;
 if(hasDrivingLicense && hasGoodVision &&!isTired){
     console.log('you able to drive');
 }else{
    console.log('please do not drive');
 }

 //The switch statement
 const day = 'wednesday'

 switch (day) {
    case 'monday':
        console.log('Plan course structure');
        break;
    case 'tuesday' :
        console.log('prepare theory videos');   
        break;
    case 'wednesday' :
        // console.log('prepare theory videos');   
        // break;
    case 'thursday' :
        console.log('write code examples');   
        break;
    case 'friday' :
        console.log('Record videos');   
        break;
    case 'saturday' :
        // console.log('Upload videos');   
        // break;
    case 'sunday' :
        console.log('Enjoy Weekend');   
        break;
    default:
        console.log('Not a valid day');
        break;
 }

 //Ternary operators
 const marks = 90;
 marks >= 80 ? console.log("You passed this exam") : console.log("Please re-appear in exam");

 //start with challenge 4 in challenge branch