window.onload = function() {
	sh172();
}

function sh172 ()
{
	  document.getElementById("current").style.visibility="visible";
  	document.getElementById("Sh17").style.visibility="hidden";
    document.getElementById("Sh").style.visibility="hidden";
    document.getElementById("ssfc").style.visibility="hidden";
}

function sh17 ()
{
		document.getElementById("current").style.visibility="hidden";
  	document.getElementById("Sh17").style.visibility="visible";
    document.getElementById("Sh").style.visibility="hidden";
    document.getElementById("ssfc").style.visibility="hidden";
}

function sh ()
{
	document.getElementById("current").style.visibility="hidden";
  document.getElementById("Sh17").style.visibility="hidden";
  document.getElementById("Sh").style.visibility="visible";
  document.getElementById("ssfc").style.visibility="hidden";
}

function ssfc ()
{
	document.getElementById("current").style.visibility="hidden";
  document.getElementById("ssfc").style.visibility="visible";
  document.getElementById("Sh17").style.visibility="hidden";
  document.getElementById("Sh").style.visibility="hidden";
}
