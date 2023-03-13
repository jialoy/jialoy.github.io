console.log("If you are reading this, welcome to my page. I like apples, climbing, research, and dinosaurs, not necessarily in that order. My favourite dinosaurs are the troodon and the stegosaurus, because they have big brains and tiny brains respectively.");

var about = document.getElementById("about");
var research = document.getElementById("research");
var teaching = document.getElementById("teaching");
var sidethings = document.getElementById("sidethings");
//var cv = document.getElementById("cv");
var aboutLink = document.getElementById("aboutLink");
var researchLink = document.getElementById("researchLink");
var teachingLink = document.getElementById("teachingLink");
var sidethingsLink = document.getElementById("sidethingsLink");
//var cvLink = document.getElementById("cvLink");

aboutLink.addEventListener("click", function() {
	research.style.display = "none";
	teaching.style.display = "none";
	//cv.style.display = "none";
	about.style.display = "block";
	sidethings.style.display = "none";
});

researchLink.addEventListener("click", function() {
	about.style.display = "none";
	teaching.style.display = "none";
	//cv.style.display = "none";
	research.style.display = "block";
	sidethings.style.display = "none";
});

teachingLink.addEventListener("click", function() {
	about.style.display = "none";
	research.style.display = "none";
	//cv.style.display = "none";
	teaching.style.display = "block";
	sidethings.style.display = "none";
});

sidethingsLink.addEventListener("click", function () {
	about.style.display = "none";
	research.style.display = "none";
	//cv.style.display = "none";
	teaching.style.display = "none";
	sidethings.style.display = "block";
});

//cvLink.addEventListener("click", function() {
//	about.style.display = "none";
//	research.style.display = "none";
//	teaching.style.display = "none";
//	cv.style.display = "block";
//	sidethings.style.display = "none";
//});