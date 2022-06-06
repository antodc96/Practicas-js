// Resolucion problema 1
dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

// Dinero Cofla
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el helado de crema1");
    alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado de crema2");
    alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado de crema3");
    alert("y te sobran" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroCofla - 2.9));
} else {
    alert("lo siento Cofla, no te alcanza para un helado");
}

//Dinero Roberto

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el helado de crema1");
} else if (dineroCofla >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto,comprate el helado de crema2");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado de crema3");
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, helado con confites o el pote de 1/4kg");
} else {
    alert("lo siento Roberto, no te alcanza para un helado");
}
// Dinero Pedro
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado de crema1");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado de crema2");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado de crema3");
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, helado con confites o el pote de 1/4kg");
} else {
    alert("lo siento Pedro, no te alcanza para un helado");
}