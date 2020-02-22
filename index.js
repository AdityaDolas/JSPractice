console.log("Hello World !");
var myVar;
myVar = 299;
myVar = "Aditya";
myVar = true;
myVar = false;

var amount = 400;
if (amount < 1000) {
  console.log("It is less than 1000");
}

var a = 5;
var b = "5";
console.log("a: " + a);
console.log("b: " + b);
if (a == b) {
  console.log("a and b are equal using ==.");
} else if (a === b) {
  console.log("a and b are equal using ===.");
} else {
  console.log("a and b are not equal.");
}

var year = 2000;
var reminder = year % 2;
console.log(reminder);

var p1 = 500;
var p2 = 600;

console.log("p1: " + p1);
console.log("p2: " + p2);

var highScore = p1 < p1 ? p1 : p2;
console.log("highScore" + highScore);

var a = 1;
while(a<=10){
    console.log(a);
    a++;
}

var a = 1;
do{
console.log(a);
a++
} while (a<=10);


console.log("Prime Numbers")
for (var i=1; i<50;i++){
    
    if(i%2==0){
        console.log(i)
        continue;
    }
}

console.log("Addition using function parameters");

function myFunction(a,b){
    var myVar = a+b;
    console.log(myVar);
}
myFunction(3,6);


console.log("Calculate Loan");
function calculateLoan(amount,month,interest,name){
    var result=amount+month-interest;
    console.log("Loan of "+name+ " is "+result);
}

calculateLoan(200,2,23,"Aditya");

var mv = [10,20,30];
console.log(mv);
console.log("Length of an array: "+mv.length);
var reverseArray=mv.reverse();
reverseArray.join();
console.log("reverseArray "+reverseArray);

