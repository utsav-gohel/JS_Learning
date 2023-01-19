
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
