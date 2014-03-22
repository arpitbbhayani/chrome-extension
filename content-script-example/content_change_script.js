if ( document.title.indexOf("Google") != -1 ) {
	var button_add = document.createElement("Button");
	var text_node = document.createTextNode("Click me");
	button_add.appendChild(text_node);
	document.body.appendChild(button_add);
	button_add.onclick = function() { alert('Hello World'); };
}
else if (document.title.indexOf("Facebook") != -1) {
	var a=document.getElementById("u_ps_0_2_0")
	a.setAttribute("style","position:fixed; top:100px; left:100px; font-size:18px;");
}