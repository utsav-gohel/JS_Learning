
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

