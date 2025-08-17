/*const favMovie = "avatar";
let guess = prompt("guess my favorite movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong guess.please try again");

}
if(guess == favMovie){
    console.log("congrats");
}else{
    console.log("you quit")
}*/
const favMovie = "avatar";
let guess = prompt("guess my favorite movie");

while(guess != favMovie){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess.please try again");

}
if(guess == favMovie){
    console.log("congrats");
}