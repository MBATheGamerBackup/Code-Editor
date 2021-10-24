let iframe = document.getElementById("preview-window").contentWindow.document;

function clear() {
	document.getElementById("console-command-area").value = "";
	document.getElementById("html-area").value = "";
	document.getElementById("css-area").value = "";
	document.getElementById("js-area").value = "";

	iframe.open();
	iframe.write("");
	iframe.close();
}

clear();

document.getElementById("console-command-area").addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		let start = this.selectionStart;
		this.value = this.value.substring(0, start);
		
		executeCommand();
	}
});

document.getElementById("html-area").addEventListener("keydown", function (event) {
	if (event.key == "Tab") {
		event.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;
		
		this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 4;
	}
});

document.getElementById("css-area").addEventListener("keydown", function (event) {
	if (event.key == "Tab") {
		event.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;
		
		this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 4;
	}
});

document.getElementById("js-area").addEventListener("keydown", function (event) {
	if (event.key == "Tab") {
		event.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;
		
		this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 4;
	}
});

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

function executeCommand() {
	let consoleCommand = document.getElementById("console-command-area").value;
	
	switch (consoleCommand) {
	case "./task1":
		task1();
		break;
	default:
		clear();
		console.log("Error!");
		break;
	}
}

function showPreview() {
	let html = document.getElementById("html-area").value;
	let css = "<style>" + document.getElementById("css-area").value + "</style>";
	
	iframe.open();
	iframe.write(css + html);
	iframe.close();
}

function runCode() {
	let html = document.getElementById("html-area").value;
	let css = "<style>" + document.getElementById("css-area").value + "</style>";
	let js = "<script>" + document.getElementById("js-area").value + "</script>";
	
	iframe.open();
	iframe.write(html + css + js);
	iframe.close();
}
