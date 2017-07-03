var i = 1;
document.getElementById("bar").style.visibility="hidden";

//I know I could've just used a switch statement but js looks scary, well, scarier than c# and java anyway
function changebar ()
{
    i++;
    if (i == 0)
    {
      document.getElementById("bar").style.visibility="hidden";     //no bar
    }
    else if (i == 1)
    {
      document.getElementById("bar").style.visibility="visible";    //yes bar
    }
    else if (i == 2)
    {
      i = 0;
      document.getElementById("bar").style.visibility="hidden";     //no bar
    }
}
