// JavaScript source code
const sumar = (num1, num2) => {
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
	return parseInt(num1) * parseInt(num2);
}


alert("�Que operaci�n deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: divisi�n,  4: multiplicaci�n");

if (operacion == 1) {
	let numero1 = prompt("primer n�mero para sumar");
	let numero2 = prompt("segundo n�mero para sumar");
	resultado = sumar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	let numero1 = prompt("primer n�mero para restar");
	let numero2 = prompt("segundo n�mero para restar");
	resultado = restar(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("primer n�mero para dividir");
	let numero2 = prompt("segundo n�mero para dividir");
	resultado = dividir(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer n�mero para multiplicar");
	let numero2 = prompt("segundo n�mero para multiplicar");
	resultado = multiplicar(numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}

else {
	alert("no se ha encontrado la operaci�n")
}