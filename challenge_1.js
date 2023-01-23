
/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

//Test data-1
const MarkWeight = 78
const MarkHeight = 1.69
const JohnWeight = 92
const JohnHeight = 1.95

let MarkMass = MarkWeight/MarkHeight ** 2
console.log(MarkMass);

let JohnMass = JohnWeight/JohnHeight ** 2
console.log(JohnMass);

const markHigherBMI = MarkMass>JohnMass

console.log(markHigherBMI);

//Test data-2
const Mark2Weight = 98
const Mark2Height = 1.88
const John2Weight = 85
const John2Height = 1.76

let Mark2Mass = Mark2Weight/Mark2Height ** 2
console.log(Mark2Mass);

let John2Mass = John2Weight/John2Height ** 2
console.log(John2Mass);

const markHigherBMI2 = Mark2Mass>John2Mass

console.log(markHigherBMI);

/*Coding Challenge #3
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//Data 1
const DolphinsAvgScore = (96+108+89)/3
console.log(DolphinsAvgScore);

const KoalasAvgScore = (88+91+110)/3
console.log(KoalasAvgScore);

if(DolphinsAvgScore>KoalasAvgScore){
    console.log('Dolphins Wins');
}else if(DolphinsAvgScore==KoalasAvgScore){
    console.log('Match draw');
}else{
    console.log('Koalas Wins');
}

//Data Bonus 1:
const Dolphins2AvgScore = (97+112+101)/3
console.log(DolphinsAvgScore);

const Koalas2AvgScore = (109+95+123)/3
console.log(KoalasAvgScore);

if(Dolphins2AvgScore>Koalas2AvgScore){
    console.log('Dolphins Wins');
}else if(Dolphins2AvgScore==Koalas2AvgScore){
    console.log('Match draw');
}else{
    console.log('Koalas Wins');
}
//Data Bonus 2:
const Dolphins3AvgScore = (97+112+101)/3
console.log(DolphinsAvgScore);

const Koalas3AvgScore = (109+95+106)/3
console.log(KoalasAvgScore);

if(Dolphins3AvgScore>Koalas3AvgScore){
    console.log('Dolphins Wins');
}else if(Dolphins3AvgScore==Koalas3AvgScore){
    console.log('Match draw');
}else{
    console.log('Koalas Wins');
}

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
*/

const StevenBill1 = 275;
const tip = StevenBill1 <=300 && StevenBill1>=50 ? (StevenBill1*0.15) : (StevenBill1*0.2) 
console.log(`The tip will be ${tip} and total amount to pay is ${StevenBill1+tip}`)

/*JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores */

const calcAverage = (score1,score2,score3)=>((score1+score2+score3)/2)

const avgDolphins = calcAverage(44,23,71)
const avgKoalas = calcAverage(65,54,49)

const checkWinner = function(avgDolhins,avgKoalas){
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolphins Wins ${avgDolhins} vs ${avgKoalas}`);
    }else if( avgKoalas >= 2 *  avgDolhins){
        console.log(`Dolphins Wins ${avgKoalas} vs ${avgDolhins}`);
    }else {
        console.log(`No one wins`);
    }
}

checkWinner(avgDolphins,avgKoalas)

/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */


// const bill =100;
const calculateTip = function(billvalue){
   return billvalue >=50 && billvalue<=300 ? (billvalue*0.15) : (billvalue*0.2)
}
// calculateTip(100);

const bills = [125,555,44]
// const bill1 = calculateTip(bills[0])
// const bill2 = calculateTip(bills[1])
// const bill3 = calculateTip(bills[2])
// const totalVal = [bill1,bill2,bill3]
// console.log(totalVal);
const tips = [calculateTip(bills[0]),calculateTip(bills[1]),calculateTip(bills[2])] 
const totalBill = bills[2]+tips[2]
console.log("bills",bills,"tips",tips,"total bills of biils2",totalBill);

//Internal challenge of object
// utsav has 3 friends and his best friend is called {}
const obj = {
    name:"Utsav", 
    friendName : ['f1','f2','f3']
}
console.log(`${obj.name} has total ${obj.friendName.length} friends and his best friend is ${obj.friendName[0]}`);

/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.*/

const MarkData = {
    name : "Mark Miller",
    weight : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = (this.weight/this.height**2);
        return this.BMI
    }
}

const johnData = {
    name : "John Smith",
    weight : 92,
    height : 1.95,
    calcBMI : function(){
        this.BMI = (this.weight/this.height**2);
        return this.BMI
    }
}
console.log(MarkData.calcBMI(),"mark");
console.log(johnData.calcBMI(),"john");
johnData.BMI>MarkData.BMI ? console.log( `${johnData.name}'s BMI ${johnData.BMI} is higher than ${MarkData.name}'s BMI(${MarkData.BMI})!`): 
console.log(`${MarkData.name}'s BMI (${MarkData.BMI}) is higher than ${johnData.name}'s BMI(${johnData.BMI})!`);

// if(johnData.BMI>MarkData.BMI){
//     console.log(`${johnData.name}'s BMI (${johnData.BMI}) is higher than ${MarkData.name}'s BMI(${MarkData.BMI})!`);
// }else{
//     console.log(`${MarkData.name}'s BMI (${MarkData.BMI}) is higher than  ${johnData.name}'s BMI(${johnData.BMI})!` );
// }