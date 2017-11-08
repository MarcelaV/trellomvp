window.onload = function(){
	
	var sendButton = document.getElementById("boton");//se rescata con posiciones por que sta con clases no con id
    var thinkInput = document.getElementById("lista");
    var timeLine = document.getElementById("timeline");

	
	sendButton.onclick = function(){
		var cuadrolista = document.createElement("div");
		var textocuadro = document.createElement("p");

		timeline.appendChild(cuadrolista);
		cuadrolista.appendChild(textocuadro);

		textocuadro.textContent = thinkInput.value;

	}


}