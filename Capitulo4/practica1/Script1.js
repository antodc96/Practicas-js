// JavaScript source code
class Calculadora {
	constructor() {
	}
	sumar(num1, num2) {
		return parseInt(num1) + parseInt(num2);
	}
	restar(num1, num2) {
		return parseInt(num1) - parseInt(num2);
	}
	dividir(num1, num2) {
		return parseInt(num1) / parseInt(num2);
	}
	multiplicar(num1, num2) {
		return parseInt(num1) * parseInt(num2);
	}
	potenciar(num, exp) {
		let numero = num;
		for (var i = 1; i < exp; i++) {
			numero = numero * num;
		}
		return numero;
	}
	raizCuadrada(num) {
		return Math.sqrt(num);
	}
	raizCubica(num) {
		return Math.cbrt(num);
	}
}

const calculadora = new Calculadora();

alert("�Que operaci�n deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: divisi�n,  4: multiplicaci�n,  5: potenciaci�n,  6: ra�z cuadrada,  7: ra�z c�bica");

if (operacion == 1) {
	let numero1 = prompt("primer n�mero para sumar");
	let numero2 = prompt("segundo n�mero para sumar");
	resultado = calculadora.sumar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	let numero1 = prompt("primer n�mero para restar");
	let numero2 = prompt("segundo n�mero para restar");
	resultado = calculadora.restar(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("primer n�mero para dividir");
	let numero2 = prompt("segundo n�mero para dividir");
	resultado = calculadora.dividir(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer n�mero para multiplicar");
	let numero2 = prompt("segundo n�mero para multiplicar");
	resultado = calculadora.multiplicar(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
	let numero1 = prompt("numero a potenciar");
	let numero2 = prompt("exponente");
	resultado = calculadora.potenciar(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("conocer la ra�z cuadrada de:");
	resultado = calculadora.raizCuadrada(numero1)
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 7) {
	let numero1 = prompt("conocer la ra�z c�bica de:");
	resultado = calculadora.raizCubica(numero1)
	alert(`tu resultado es ${resultado}`);
}

else {
	alert("no se ha encontrado la operaci�n")
}