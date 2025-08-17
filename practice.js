//  WRITE A JS FUNCTION THAT RETURNS ARRAY ELEMENTS LARGER THAN A NUMBER //
/*let arr = [2,3,4,5,4,5,6,8];
let num = 5;
function largest(lar,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 5){
            console.log(arr[i]);
        }
    }
}
largest();*/
//WRITE A JS FUN TO EXTRACT UNIQUE CHARACTERS FROM A STRING.//
//EXAMPLE : STR = "AALALFIRIR"
//REL = "AFILR";
/*let str = "abcdedff";
function getUnique(str){
   let  ans = "";
    for(let i=0; i < str.length; i++){
        let currchar = str[i]
        if(ans.indexOf(currchar) == -1){
            ans += currchar;
        }
       
    }
    return ans;
}
console.log(getUnique(str));
//OUTPUT IS :  abcdef //*/
/*let city = ["Australia","Germany","United states of America"];
function getElements(city){
    let lar = city[0];//assume this is large//
    for(let i = 0; i < city.length; i++)
    {
          if(city[i].length > lar[i].length)  {
                    lar = city[i];
        }  
        
    }
    console.log("Longest city name:", lar);
}
getElements(city);*/
/*
let country = ["Australia","Germany","united states of america"];
function LongestName(country){
  let ansIdx = 0;
  for(let i=0; i < country.length; i++){
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if(currLen > ansLen){
       ansIdx = i;
    }
  }
  return country[ansIdx];
}
console.log(LongestName(country));
let str = "aapnacollege";
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++);{
      if (
    charAt(i) == "a" ||
    charAt(i) == "e" ||
    charAt(i) == "i" ||
    charAt(i) == "o" ||
    charAt(i) == "u"
  ) {
    count++; 
   }
    
   }
 return count; 
}*/
/*console.log("hii threre");
setTimeout(()=>{
console.log("appana")
},4000)

console.log("Welcome to");
const square = (n) => n*n;
 console.log(square(4));*/
 /*let id = setInterval(() =>{
    console.log("Hello world");
 },2000)
 setTimeout(() =>{
    clearInterval(id);
 },10000);

 const avg = (a,b) =>{
   console.log((a+b)/3);
 };

const isEven = (n) =>{
    if(n%2 == 0){
        return "Even"
    }else{
        return "odd"
    }
}*/
//this uses
/*const student = {
    name:"dipa",
    marks:95,
    prop:this,
    getName: function (){
    console.log(this);
    return this.name;
    },
    getMarks: () => {
    console.log(this);//Parent's scope -> window;
    return this.marks;
    },
    getInfo1: function(){
        setTimeout(() =>{
            console.log(this);//student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);//window
        },2000);
    }

};*/
/*const obj = {
    message: 'Hello , world',

    logMessage(){
        console.log(this.message);
    }
};
setTimeout(obj.logMessage,2000);
let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);

//
const arrayAvg = (arr) =>{
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total / arr.length;
};
let arr = [1,2,3,4,5,6];
console.log(arrayAvg(arr));*/
//FOR EACH LOOP//
/*let arr = [1,2,4,44,8];
let print = function (el){
    console.log(el);
}
arr.forEach(print);
let arr = [2,3,4,5,5];
arr.forEach((el) =>{
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});*
let arr = [
    {
        name:"dipa",
        marks:78,
    },
    {
        name:"Ankita",
        marks:85,
    },
    {
        name:"vishal",
        marks:80,
    }
];
arr.forEach((student) => {
    console.log(student);
});; 
//reduce function
let nums = [1,2,4,4];
let final = nums.reduce((res,el) => res + el );
console.log(final);
//output is 11 //
let arr = [3,4,4,3,2,4,90,2];
let max = -1;
for(let i=0; i< arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);

let arr = [3,4,4,3,2,4,90,2];
let max = arr.reduce((maxs,el) =>{
 if(maxs < el){
    return el;
 }else{
    return maxs;
 }
});
console.log(max);*/
//use here every method//
/*let nums = [10,20,30,2];
let ans = nums.every((el) =>el % 10 ==0);
console.log(ans);
//find min num using reduce method //
let nums = [10,20,30,40,5];
let min = nums.reduce((min,el) =>{
    if(min < el){
        return min;
    }else{
        return el;
    }
});
console.log(min);*/
//find min using function //
/*let nums = [10,20,30,40,4];
function getMin(nums){
    let min = nums.reduce((min,el) =>{
        if(min < el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}*/

//USE THE REST funtion
function sum(...args){
    return args.reduce((sum, el) => sum + el);
}
function min(...args){
    return args.reduce((min,el) => {
        if(min > el){
            return el;
        }else{
            return min;
        }
    });
}