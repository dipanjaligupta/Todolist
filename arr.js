// ANS 1 //
let dice = Math.floor(Math.random()*6) + 1 
console.log(dice);
// ANS  2 //
const car = {
    cname:"Maruti Suzuki",
    model:"Maruti Suzuki Dzire",
    color:["red","yellow","green"],
}
console.log(car.cname)
// ANS  3 //
const person = {
    name:"dipa",
    age:"18",
    city:"Lalganj"

};
person.city = "New York";
person.country = "United statea";
console.log(person);
//



































/*let arr = [7,9,0,-2];
n = 3;
ans = arr.slice(1,length-1);
console.log(ans);

let str ="   heloo";
str = str.trim();
if(str.length === 0 ){
    console.log("string is blank")
}
else {
    console.log("string is not blank");
}



let str ="DipanjaliGupta";
let idx = 3;
if(str[idx] == str[idx].toLowerCase()){
console.log("charater is lower case")
}else{
    console.log("charater is upper case")
}
let strr = "   dipa    "
strr = strr.trim();
console.log(strr);
let str ="DipanjaliGupta";
let idx = 9;
if(str[idx] == str[idx].toLowerCase()){
console.log("charater is lower case")
}else{
    console.log("charater is upper case")
}
//array present in this list yes or not//
let arr = ["hello",'a',23,64,99,-6];
let item = 4;

if(arr.indexOf(item) != -1){
    console.log("Element exists in array");
}else{
    console.log("Element does not exist in array");

}
for(let i=15; i>=1; i=i-2){
    console.log(i);
}
for(let i=1; i<=15; i= i+2){
   console.log(i); 
}
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] === num){
        arr.splice(i,1)
    }
}
console.log(arr);
let num = 287152;
count = 0;
while(num > 0){
    num = Math.floor(num / 10)
    count++;
}
console.log(count)
let num = 287152;
let sum = 0;
let copy = num;
while (copy > 0){
     let digit = copy % 10;
    sum = sum + digit;
    copy = Math.floor(copy / 10);
    
}
console.log(sum);

let n = prompt("Enter any num");
n = parent(n);
fact = 1;
for(let i=n; i<n; i++){
    fact = fact * i; 
}
console.log(n)
let dice = Math.floor(Math.random()*6) + 1 
console.log(dice);*/
/*const car = {
    cname:"tototo",
    model:"uqine",
    color:["red","yellow","green"],
}
console.log(car.cname)
const person = {
    name:"dipa",
    age:"18",
    city:"azamgharh"

};
console.log(person);
// create a randome number using function//
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();
function printInfo(name,age){
    console.log(`${name} ' s  age is ${age}`);
}
printInfo("dipanjali",18);
// Average of 3 numbers //
function calAvg(a,b,c){
let avg = (a+b+c)/3;
console.log(avg);
}
calAvg(3,5,5);
function printTable(n){
    for(let i=n; i<=n*10; i=i+n){
        console.log(i)
    }
}
printTable(20);
function sum(a , b){
    return a+b;
}*/
/*let s = sum(3,4);
console.log(s);
function sum(a,b){
    return a+b;
}
console.log(sum(sum(1,2), 3));
//create a function that returns the concatenation of all strings in an array//
let str = ["hello","bye","fii","!"];
function conCat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}*/
/*const calculator = {
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};*/

 
 /*let largest = 0;
 for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
 }
 console.log(largest);*/
/*let arr = [2,10,5,8];
n = 6;
 function largest(arr,n){
 for(let i=0; i<arr.length; i++){
    if(n < arr[i]){
        n = arr[i];
    }
 }
 return n;
 
 }
 let rel = largest(arr,n);
 console.log(rel);*/
 /*let arr = [4,5,6,6,2,7,8,9,1,90,7];
 let num = 5;
 function getElements(arr,num){
    for(let i=0; i<arr.length;i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }(
    }
 }
getElements(arr,num);*/
/*let str = "absncklslsadcrklk";
function getUnique(str){
    let ans = "";
    for(let i = 0;i<str.length; i++){
        let currchar = str[i];
        if(ans.indexOf(currchar) == -1){
            ans = ans + currchar;
        }
    }
    return ans;
}
console.log(getUnique(str));*/

//Higher Order Functions ///Takes one or Multiple functions ar arguments//
/*function MultipleGreet(func,n){
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
MultipleGreet(greet,10)
//Higher Order Functions //Returns a function
function oddEvenTest(request){
    if(request == "odd"){
        let odd  =  function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request = "odd";*/
/*let greet = "hello";//global scope//

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    
    function innerGreet(){
        console.log(greet);//lexical scope//
    }
    innerGreet();
}
console.log(greet);
changeGreet();*/
//Methods(Shorthand)//
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};
