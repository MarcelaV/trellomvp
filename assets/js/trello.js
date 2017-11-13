window.onload = function(){
	
	var sendButton = document.getElementById("boton");//se rescata con posiciones por que sta con clases no con id
    var thinkInput = document.getElementById("lista");
    var thinkInput1 = document.getElementById("lista2");
    var timeLine = document.getElementById("timeline");

	
	sendButton.onclick = function(){
		var cuadrolista = document.createElement("div");
		var textocuadro = document.createElement("p");

		timeline.appendChild(cuadrolista);
		cuadrolista.appendChild(textocuadro);
		timeline.className = "tarjeta"

		textocuadro.textContent = thinkInput.value;
		thinkInput.value = "";
		thinkInput.className = "textotrello"

	}

		sendButton.onclick = function(){
		var cuadrolista2 = document.createElement("div");
		var textocuadro = document.createElement("p");

		timeline.appendChild(cuadrolista2);
		cuadrolista2.appendChild(textocuadro);
		timeline.className = "tarjeta"

		textocuadro.textContent = thinkInput1.value;
		thinkInput1.value = "";
		thinkInput1.className = "textotrello"

	}


}