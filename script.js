// 1- Create a function to calculate Average to a group of numbers (at least 10 numbers)
function Average() {
    var sum= [5+20+10+30+50+60+80+90+40+60];
    return sum/10;
  }
  console.log(Average());


// 2-Write a function that takes the base and height of a triangle and return its area
function Area(base,height){
    var Area=(base*height)*0.5;
    return Area
}
console.log(Area(50,60));

// 3- Create a function that takes the age in years and returns the age in days and print it on console
function Age() {
    var Age=20;
    return Age*365;
}
console.log(Age());

// 4- Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum
function Calc(num1,num2){
    return num1+num2;
}
console.log(Calc(10,50));

// 5- Create a function that takes an array containing only numbers and return the first element
function array() {
    var array=["Marco","mohamed",'ahmed',"fady","shehab","mostafa","Taha","mahmoud","gasser","yasser"]
    return array[0];
}
console.log(array());

// 6- Create a function show your name in HTML document
var myname="Marco Mina"
function showMyName() {
    return myname;
}
document.getElementById("name").innerHTML = myname;

// 7-Write a function that takes an integer hours and converts it to second .
function Calch(hours) {
    return hours*3600
}
console.log(Calch(1));

// 8- Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
function Calc_3(num1,num2,num3) {
    if (num1+num2+num3>350) {
        return true
    }else{
        return false 
    }
}
console.log(Calc_3(100,600,70));

// 9
function Calc_9(x) {
    if (x==0) {
        return true ;  
    } else{
        return false ;
    }
} 
console.log(Calc_9(0))

// 10 
function Calc_10(num1,num2) {
    return num1%num2;
}
console.log(Calc_10(12,5));

// 11- Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function Calc_11(num1,num2) {
    if (num1 > num2) {
        return "The Biggest";
      } else if (num1 < num2) {
        return "The Smallest";
      } else {
        return "Equal";
      }
}
console.log(Calc_11(5,10));

// 12- Check if input variable is a number or not
function Calc_12(input) {
    if (typeof input == 'number') {
        return"The input is a number";
      } else {
        return "The input is not a number";
      }
}
console.log(Calc_12(20));

// 13- Write a JavaScript function to get the current date
function date() {
    const d = new Date();
    return d;
}
console.log(date());