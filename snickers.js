
var aboutUs=document.querySelectorAll("a")[4];
aboutUs.style.border="3px solid";
var bodImg=document.querySelectorAll("img")[1];
// function for blck button

function toBlack(){

document.querySelector("body").classList.add("black");
document.querySelectorAll("a")[3].style.border="3px solid";
aboutUs.style.border="0px";
bodImg.setAttribute("src",'BLACK.png');
document.querySelectorAll("h1")[1].style.color="black";
document.querySelectorAll("h1")[2].style.color="black";
document.querySelectorAll("h1")[3].style.color="black";
document.getElementsByTagName('label').style.color="black";
}
//function for grey button
function togray(){
document.querySelector("body").classList.remove("black");
document.querySelector("body").classList.add("gray");
bodImg.setAttribute("src",'GREY.png');
document.querySelectorAll("h1")[0].style.color="black";
document.querySelectorAll("h3")[0].style.color="black";
document.querySelectorAll("a")[3].style.border="0px solid";
document.querySelectorAll("a")[5].style.border="3px solid";
aboutUs.style.border="0px";

for(var i = 0;i<6;i++){

	document.querySelectorAll("a")[i].style.color="black";
}






}

//black candy
var blackButton=document.querySelectorAll("a")[7];

blackButton.addEventListener("click",toBlack);

//grey can dy

var greyButton=document.querySelectorAll("a")[8];
greyButton.addEventListener("click",togray);



//blue button

var blueButton=document.querySelectorAll("a")[6];
blueButton.addEventListener("click",function (argument) {
	// body...
	bodImg.setAttribute("src",'BLUE.png');


})