window.onload = function() {
	sh17();
}

function sh17 ()
{
  	document.getElementById("current").style.visibility="visible";
    document.getElementById("Sh").style.visibility="hidden";
    document.getElementById("ShSSFCsucc").style.visibility="hidden";
}

function sh ()
{
  document.getElementById("current").style.visibility="hidden";
  document.getElementById("Sh").style.visibility="visible";
  document.getElementById("ShSSFCsucc").style.visibility="hidden";
}

function ssfc ()
{
  document.getElementById("ShSSFCsucc").style.visibility="visible";
  document.getElementById("current").style.visibility="hidden";
  document.getElementById("Sh").style.visibility="hidden";
}
