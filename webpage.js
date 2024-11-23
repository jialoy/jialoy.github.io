console.log("If you are reading this, welcome to my page. I like apples, climbing, research, and dinosaurs, not necessarily in that order. My favourite dinosaurs are the troodon and the stegosaurus, because they have big brains and tiny brains respectively.");

const home = document.getElementById("home");
const research = document.getElementById("research");
const spacer = document.getElementById("spacer");

const homeLink = document.getElementById("homeLink");
const researchLink = document.getElementById("researchLink");

homeLink.addEventListener("click", function() {
	homeLink.style.visibility = "hidden";
	spacer.style.display = "block";
	research.style.display = "none";
	home.style.display = "block";
});

researchLink.addEventListener("click", function() {
	homeLink.style.visibility = "visible";
	spacer.style.display = "none";
	home.style.display = "none";
	research.style.display = "block";
});

/**
 * Dynamic adjustment of spacer element to ensure consistent y scroll across sections
 */
function adjustSpacer() {
	const spacer = document.getElementById("spacer");

	const heightsArray = [...document.querySelectorAll('.has-height')].map(el => el.offsetHeight);
	const contentHeight = heightsArray.reduce((sum, currentHeight) => sum + currentHeight, 0);
	const viewportHeight = window.innerHeight;
	
	const extraSpaceNeeded = Math.max(viewportHeight - contentHeight, 0);
	
	setTimeout(function() {
		spacer.style.height =`${extraSpaceNeeded + 1}px`; 
	}, 100);

  }
  

window.addEventListener("load", adjustSpacer);

window.addEventListener("resize", adjustSpacer);
