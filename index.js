var randomNumber1=Math.floor(Math.random() * 6)+ 1; //don't forget the var keyword is necessary in js
//recall we can easily test this in the console if we want

var randomDiceImage= "dice"+ randomNumber1+ ".png"; //used concatenation to change the source of the image

var randomImageSource ="images/"+ randomDiceImage; //enterity of the source attribute

var image1= document.querySelectorAll("img")[0]; //we are selecting two images, hence, querySelectorAll

image1.setAttribute("src", randomImageSource);
//first argument is the attribute you want to change, second is what you change it to

//now everytime we change the website, everything will change it!!

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImageSource2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//player one wins
if (randomNumber1>randomNumber2){

  document.querySelector("h1").innerHTML="Player One Wins! "
}
else if (randomNumber2> randomNumber1){
document.querySelector("h1").innerHTML="Player Two Wins! "
}

else{
  document.querySelector("h1").innerHTML="Draw! "
}
