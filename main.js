// Calculadora de DPS (Damage Per Second) para Path of Exile


function promedio(min, max) {
    return (min + max) / 2;
}

function suma(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3);
}

function errorMinMax() {
    alert("Los valores deben ser como mínimo 0 y el daño mínimo no debe ser superior al máximo. Intente nuevamente.");
}

// Input Speed

let speed = parseInt(prompt("Ingrese Velocidad de Ataque (1-10):"));

while(speed <= 0 || speed > 10 || isNaN(speed)) {
    alert("Valor Incorrecto, Intente nuevamente.")
    speed = parseInt(prompt("Ingrese Velocidad de Ataque (1-10):"));
}

// Input Physical


let minPhysical = parseInt(prompt("Ingrese daño Físico mínimo (min: 0):"));
let maxPhysical = parseInt(prompt("Ingrese daño Físico máximo (min: 0)"));

while(minPhysical < 0 || isNaN(minPhysical) || maxPhysical < 0 || isNaN(maxPhysical) || minPhysical > maxPhysical) {
    errorMinMax();

    minPhysical = parseInt(prompt("Ingrese daño Físico mínimo (min: 0):"));
    maxPhysical = parseInt(prompt("Ingrese daño Físico máximo (min: 0)"));
}

let physicalDPS = (promedio(minPhysical, maxPhysical) * speed);

// Input Chaos

let minChaos = parseInt(prompt("Ingrese daño de Caos mínimo (min: 0):"));
let maxChaos = parseInt(prompt("Ingrese daño de Caos máximo (min: 0)"));

while(minChaos < 0 || isNaN(minChaos) || maxChaos < 0 || isNaN(maxChaos) || minChaos > maxChaos) {
    errorMinMax();

    minChaos = parseInt(prompt("Ingrese daño de Caos mínimo (min: 0):"));
    maxChaos = parseInt(prompt("Ingrese daño de Caos máximo (min: 0)"));
}

let chaosDPS = (promedio(minChaos, maxChaos) * speed);

// Input Fire

let minFire = parseInt(prompt("Ingrese daño de Fuego mínimo (min: 0):"));
let maxFire = parseInt(prompt("Ingrese daño de Fuego máximo (min: 0)"));

while(minFire < 0 || isNaN(minFire) || maxFire < 0 || isNaN(maxFire) || minFire > maxFire) {
    errorMinMax();

    minFire = parseInt(prompt("Ingrese daño de Fuego mínimo (min: 0):"));
    maxFire = parseInt(prompt("Ingrese daño de Fuego máximo (min: 0)"));
}

let fireDPS = (promedio(minFire, maxFire) * speed);

// Input Cold

let minCold = parseInt(prompt("Ingrese daño de Hielo mínimo (min: 0):"));
let maxCold = parseInt(prompt("Ingrese daño de Hielo máximo (min: 0)"));

while(minCold < 0 || isNaN(minCold) || maxCold < 0 || isNaN(maxCold) || minCold > maxCold) {
    errorMinMax();

    minCold = parseInt(prompt("Ingrese daño de Hielo mínimo (min: 0):"));
    maxCold = parseInt(prompt("Ingrese daño de Hielo máximo (min: 0)"));
}

let coldDPS = (promedio(minCold, maxCold) * speed);

// Input Lightning

let minLightning = parseInt(prompt("Ingrese daño de Rayo mínimo (min: 0):"));
let maxLightning = parseInt(prompt("Ingrese daño de Rayo máximo (min: 0)"));

while(minLightning < 0 || isNaN(minLightning) || maxLightning < 0 || isNaN(maxLightning) || minLightning > maxLightning) {
    errorMinMax();

    minLightning = parseInt(prompt("Ingrese daño de Rayo mínimo (min: 0):"));
    maxLightning = parseInt(prompt("Ingrese daño de Rayo máximo (min: 0)"));
}

let lightningDPS = (promedio(minLightning, maxLightning) * speed);

// Resultados

// Physical
if(physicalDPS == 0) {
    console.log("DPS Físico: No tiene.");
}else {
    console.log("DPS Físico: " + physicalDPS);
}

// Chaos
if(chaosDPS == 0) {
    console.log("DPS Caos: No tiene.");
}else {
    console.log("DPS Caos: " + chaosDPS);
}

// Fire
if(fireDPS == 0) {
    console.log("DPS Fuego: No tiene.");
}else {
    console.log("DPS Fuego: " + fireDPS);
}

// Cold
if(coldDPS == 0) {
    console.log("DPS Hielo: No tiene.");
}else {
    console.log("DPS Hielo: " + coldDPS);
}

// Lightning
if(lightningDPS == 0) {
    console.log("DPS Rayo: No tiene.");
}else {
    console.log("DPS Rayo: " + lightningDPS);
}

//  Elemental = Fire + Cold + Lightning
let elementalDPS = suma(fireDPS, coldDPS, lightningDPS);

if(elementalDPS == 0) {
    console.log("DPS Elemental Total: No tiene.");
}else {
    console.log("DPS Elemental Total: " + elementalDPS);
}

//  Total = Physical + Chaos + Elemental

let totalDPS = suma(physicalDPS, chaosDPS, elementalDPS);

if(totalDPS == 0) {
    console.log("DPS Total: El arma no tiene daño.");
}else {
    console.log("DPS Total: " + totalDPS);
}




















