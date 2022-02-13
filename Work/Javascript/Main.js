function darkMode() {
	if (document.getElementById("darkmode").checked) {
		document.getElementById("dark").href = "../CSS/Dark.css";
	}
	else {
		document.getElementById("dark").href = "";
	}
}

function showSettings() {
	document.getElementById("settings").style.display = "block";
}