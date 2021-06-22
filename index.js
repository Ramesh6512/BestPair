
var randomno = Math.floor(Math.random() * 7)+1;
var randomimg = "images/img"+randomno+".jpg";
document.querySelectorAll("img")[0].setAttribute("src",randomimg);

var randomno1 = Math.floor(Math.random() * 7)+1;
var randomimg1 = "images/fem"+randomno1+".jpg";
document.querySelectorAll("img")[1].setAttribute("src",randomimg1);

if(randomno>randomno1){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomno1>randomno){
document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
