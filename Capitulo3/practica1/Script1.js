// JavaScript source code
class Celular {
	constructor(color, peso, tama�o, rdc, ram) {
		this.color = color;
		this.peso = peso;
		this.tama�o = tama�o;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncendido() {
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar() {
		if (this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular est� apagado");
		}
	}
	tomarFoto() {
		alert(`foto tomada en una resoluci�n de: ${this.resolucionDeCamara}`);
	}
	grabarVideo() {
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}
	mobileInfo() {
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tama�o: <b>${this.tama�o}</b></br>
		Resoluci�n de Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		`;
	}
}


celular1 = new Celular("rojo", "150g", "5'", "hd", "1GB");
celular2 = new Celular("negro", "155g", "5.4'", "full hd", "2GB");
celular3 = new Celular("blanco", "15046g", "5.9'", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();



document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()} <br>
	`);