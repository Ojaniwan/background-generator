var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.getElementById("button1");


function generateColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
		for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
		}
	return color;
}


function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")"; 

		css.textContent = body.style.background + ";";
}

function randomColor() {
	
	color1.value = generateColor()
	color2.value = generateColor() 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button1.addEventListener("click", randomColor);
button1.addEventListener("click", setGradient);
window.onload = randomColor()
window.onload = setGradient()

