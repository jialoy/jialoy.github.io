var about = document.getElementById("about");
var research = document.getElementById("research");
var teaching = document.getElementById("teaching");
var cv = document.getElementById("cv");
var aboutLink = document.getElementById("aboutLink");
var researchLink = document.getElementById("researchLink");
var teachingLink = document.getElementById("teachingLink");
var cvLink = document.getElementById("cvLink");

aboutLink.addEventListener("click", function() {
	research.style.display = "none";
	teaching.style.display = "none";
	cv.style.display = "none";
	about.style.display = "block";
});

researchLink.addEventListener("click", function() {
	about.style.display = "none";
	teaching.style.display = "none";
	cv.style.display = "none";
	research.style.display = "block";
});

teachingLink.addEventListener("click", function() {
	about.style.display = "none";
	research.style.display = "none";
	cv.style.display = "none";
	teaching.style.display = "block";
});

cvLink.addEventListener("click", function() {
	about.style.display = "none";
	research.style.display = "none";
	teaching.style.display = "none";
	cv.style.display = "none";
});