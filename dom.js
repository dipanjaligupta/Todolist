/*let pra1 = document.createElement('p');
pra1.innerText = "hey I'm dipa and u";
document.querySelector("body").append(pra1);
pra1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText ="this  is h3 ";
document.querySelector("body").append(h3);
h3.classList.add("red");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "this is dipa";
p.innerText = "follow this all ruls";

div.append(h1);
div.append(p);
div.classList.add('div');
document.querySelector("body").append(div);


let inp = document.createElement("input");
document.querySelector("body").append(inp);


let p2 = document.createElement("p2");
p2.innerHTML = "appna college <b>Delta</b>";
document.querySelector("body").append(p2);


let h4 = document.createElement("h4");
h4.innerHTML = "hii this is h4 tag"
h4.classList.add("h4");
document.querySelector("body").append(h4);


let btnn = document.createElement("button");
let inpt = document.createElement("input");
btnn.innerText = "click me";
document.querySelector("body").append(inpt);
document.querySelector("body").append(btnn);

inpt.setAttribute("placeholder", "username");
btnn.setAttribute("id","btn")*/
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "blue", "red", "green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);  z
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  gameSeq.push(randColor);
  gameFlash(randBtn);
  
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerHTML = `Game over ! Your score was <b>${level}</b><br>press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        })
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(usercolor)
}

/*let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("code=",event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    }else if(event.code =="ArrowDown"){
        console.log("character moves backward");
    }else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }
})*/
