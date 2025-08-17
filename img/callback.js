//callback hell //
/*h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000);
  });
});*/
// promise//
/*function saveToDB(data){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        console.log("your data was saved : ",data);
    }else{
        console.log("your data was not  saved ");  
    }
}*/
/*
//promise charning//
function saveToDB(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success: ,data was saved");
        }else{
            reject("failure : ,weak connection ");
        }
    });
}
saveToDB("appna college")
.then((result) => {
    console.log("data1 saved");
    console.log("promise was resolved",result);
    return saveToDB("hello world");
})
.then((result) =>{
    console.log("data2 saved");
    console.log("promise was resolved",result);
    return saveToDB("hello dipa");
})
.then((result) =>{
    console.log("data3 saved");
    console.log("promise was resolved",result);
})
.catch((error) => {
    console.log("promise was reject");
    console.log("error of promise ",error);
});*/
/*h1 = document.querySelector("h1");
function changeColor(color, delay) {
 return new Promise ((resolve,reject) => {
    setTimeout(() => {
    h1.style.color = color;
    resolve("color change");
  }, delay);
 });
}

changeColor("red",1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("blue",1000);
})
.then(() => {
    console.log("blue color was completed");
    return changeColor("green",1000);
})
.then(() => {
    console.log("green color was completed");
})*/

/*let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("error",e);
    }
}*/
// Get random cat facts //
/*let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
})
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ",e);
        return "no fact found";
    }
}*/
//get random image //
/*let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
  console.log(link);

});
 let url = "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("error",e);
        return "No image found";
    }
}*/
/*const url = "https://catfact.ninja/fact";
async function  getJokes(){
    try{
        const config = {headers: {Accept:"appliction/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }
}*/

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let state_province = document.querySelector("input").value;
  console.log(state_province);
  let strArr = await getColleges(state_province , country);
  console.log(strArr);
  show(strArr);
});
let country = "india";
function show(strArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of strArr) {
    /*console.log(col.name);*/
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(state_province, country) {
  try {
     let url = `http://universities.hipolabs.com/search?name=${state_province}&country=${country}`;
    let res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log("Error:", e);
    return [];
  }
}
