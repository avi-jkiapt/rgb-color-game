/*var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
];*/
var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	h1.style.background = "steelblue";
  messageDisplay.textContent="";
	numSquare =3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}

	}
});
hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	h1.style.background = "steelblue";
  messageDisplay.textContent="";
	numSquare =6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {

			squares[i].style.background = colors[i];

			squares[i].style.display = "block";


	}
});
resetButton.addEventListener("click",function(){
     colors= generateRandomColors(numSquare);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     messageDisplay.textContent="";
     this.textContent="New Colors";
     for (var i = 0; i < squares.length; i++) {
     	squares[i].style.background = colors[i];
     }
     h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
           var clickedClor = this.style.background;
           if(clickedClor === pickedColor){
	          messageDisplay.textContent = "Correct !!";
	          resetButton.textContent = "Play Again?";
	          changeColrs(clickedClor);
	          h1.style.background = clickedClor;
	        }
	       else
	            {
		          this.style.background = "#232323";
		          messageDisplay.textContent = "Try Again !!";
	            }
	});


}

function changeColrs(color){

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = color;
}
}

function pickColor()
{
	var ran = Math.floor(Math.random() * colors.length);
	console.log(ran);
    return colors[ran];
}

function generateRandomColors(num){
	var array = [];
for (var i = 0; i < num; i++) {
	array.push(randomColor());

	}

	return array;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
