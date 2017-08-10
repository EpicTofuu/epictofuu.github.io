window.onload = function() {
	show();
}

/*I know I can just parse in an int for one method and then call said method with int inside parenthesis but this is javascript and javascript is scary asf
did some shit in mobile.js though 8)*/

function hide ()
{
	document.getElementById("links").style.visibility="hidden";
	document.getElementById("showbar").style.visibility="visible";
}

function show ()
{
	document.getElementById("links").style.visibility="visible";
	document.getElementById("showbar").style.visibility="hidden";
}
