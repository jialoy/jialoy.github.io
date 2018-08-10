var about = document.getElementById("about");
var research = document.getElementById("research");
var aboutLink = document.getElementById("aboutLink");
var researchLink = document.getElementById("researchLink");
var cvLink = document.getElementById("cvLink");

aboutLink.addEventListener("click", function() {
	research.style.display = "none";
	about.style.display = "block";
});

researchLink.addEventListener("click", function() {
	about.style.display = "none";
	research.style.display = "block";
})

cvLink.addEventListener("click", function() {
	about.style.display = "none";
	research.style.display = "none";
	alert("cv download to be added once updated");
})