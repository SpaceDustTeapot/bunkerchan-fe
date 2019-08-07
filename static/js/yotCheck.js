function CSSYotCheck()
{
 if(localStorage.selectedTheme == null && localStorage.yotCheck == null)
 {
	var conf = confirm("Press Comfirm to use the Classic Vichan Theme");
	if(conf)
	{
		localStorage.selectedTheme = "yotsuba";
		localStorage.yotCheck = true;
	}
	else
	{
		localStorage.yotCheck = true;
	}
 }
 else if(localStorage.SelectedTheme > 0)
 {
	//do nuffin
 }
 else 
 {
 	//localStorage.selectedTheme = "clear";
 } 
}
