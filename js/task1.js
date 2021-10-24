function task1() {
	document.getElementById("html-area").value = "<h1>Hello, World!</h1>";
	document.getElementById("css-area").value = "h1 {\n    color: red;\n    font-size: 4em;\n}";
	document.getElementById("js-area").value = "alert(\"Test Demo\");";
	
	let html = "<h1>Hello, World!</h1>";
	let css = "<style>h1{color: red;font-size: 4em;}</style>";
	let js = "<script>alert(\"Test Demo\")</script>";
	
	iframe.open();
	iframe.write(html + css + js);
	iframe.close();
}
