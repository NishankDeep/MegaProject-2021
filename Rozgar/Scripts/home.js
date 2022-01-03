function show1() {
	document.getElementById("myaccountlist").style.display="inline-block"
	document.getElementById("up1").style.display="inline-block"
	document.getElementById("down1").style.display="none"
}
function hide1() {
	document.getElementById("myaccountlist").style.display="none"
	document.getElementById("up1").style.display="none"
	document.getElementById("down1").style.display="inline-block"
}

function show2() {
	document.getElementById("morelist").style.display="inline-block"
	document.getElementById("up2").style.display="inline-block"
	document.getElementById("down2").style.display="none"
}
function hide2() {
	document.getElementById("morelist").style.display="none"
	document.getElementById("up2").style.display="none"
	document.getElementById("down2").style.display="inline-block"
}
function changecolor(){
	var x=document.getElementById("heart");
	if(x.style.color=="black"){
		x.style.color="red";
	}else{
		x.style.color="black";
	}
}