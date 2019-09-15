var name1=prompt("Player 1 name");
var name2=prompt("Player 2 name");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+ randomNumber1 +".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+ randomNumber2 +".png";
var randomImageSource="images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


console.log("Player 1= "+randomNumber1);
console.log("Player 2= "+randomNumber2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=name1 +" wins";

}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML=name2+" wins";

}
else{
  document.querySelector("h1").innerHTML="Its a draw";

}
