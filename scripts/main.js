// Classes and default values:

class DpsType {
    constructor(min, max, type) {
        this.min = min;
        this.max = max;
        this.type = type;
    }

    calculateAvg() {
        let average = (this.min + this.max) / 2;
        return average;
    }
}

class DpsSpeed {
    constructor(speed, type) {
        this.speed = speed;
        this.type = type;
    }
}

class DpsResult {
    constructor(total, type) {
        this.total = total;
        this.type = type;
    }
}

const physDPS = new DpsType(0, 0, "Phys");
const chaosDPS = new DpsType(0, 0, "Chaos");
const fireDPS = new DpsType(0, 0, "Fire");
const coldDPS = new DpsType(0, 0, "Cold");
const lightDPS = new DpsType(0, 0, "Light");

const speedDPS = new DpsSpeed(0, "Speed");

const arrayDPS = [physDPS, chaosDPS, fireDPS, coldDPS, lightDPS];

const arrayResult = [];

// Document Elements:

const formDPS = document.getElementById("formDPS");
const calculateBtn = document.getElementById("calculateBtn");

const inputMinPhys = document.getElementById("inputMinPhys");
const inputMaxPhys = document.getElementById("inputMaxPhys");

const inputMinChaos = document.getElementById("inputMinChaos");
const inputMaxChaos = document.getElementById("inputMaxChaos");

const inputMinFire = document.getElementById("inputMinFire");
const inputMaxFire = document.getElementById("inputMaxFire");

const inputMinCold = document.getElementById("inputMinCold");
const inputMaxCold = document.getElementById("inputMaxCold");

const inputMinLight = document.getElementById("inputMinLight");
const inputMaxLight = document.getElementById("inputMaxLight");

const inputS = document.getElementById("inputS");

const areaPhys = document.getElementById("areaPhys");
const areaChaos = document.getElementById("areaChaos");
const areaFire = document.getElementById("areaFire");
const areaCold = document.getElementById("areaCold");
const areaLight = document.getElementById("areaLight");
const areaElemental = document.getElementById("areaElemental");
const areaTotal = document.getElementById("areaTotal");

// Input character limiter:

const arrayInputDPS = [inputMinPhys, inputMaxPhys, inputMinChaos, inputMaxChaos, inputMinFire, inputMaxFire, inputMinCold, inputMaxCold, inputMinLight, inputMaxLight, inputS];

arrayInputDPS.forEach((input) => {
    input.oninput = function () {
        if (this.value.length > 5) {
            this.value = this.value.slice(0, 5);
        }
    }
});

// Function: Modify dps values with new entry on input

function newDPS(label, inputMin, inputMax) {
    if (label === "Phys" || "Chaos" || "Fire" || "Cold" || "Light") {
        const index = arrayDPS.findIndex(object => {
            return object.type === label;
        })

        if (index != -1) {
            if (inputMin > 0) {
                arrayDPS[index].min = parseFloat(inputMin);
            } else {
                arrayDPS[index].min = 0;
            }

            if (inputMax > 0) {
                arrayDPS[index].max = parseFloat(inputMax);

            } else {
                arrayDPS[index].max = 0;
            }
        }
    }
}

// Function: Modify speed value with new entry on input

function newSpeed() {
    if (inputS.value > 0) {
        speedDPS.speed = parseFloat(inputS.value);
    } else {
        speedDPS.speed = 0;
    }
}

// Function: Fill arrayResult with new entries

function calculateDps() {
    arrayDPS.forEach((dps) => {
        const total = ((dps.min + dps.max) / 2) * speedDPS.speed;
        const result = new DpsResult(total, dps.type);
        arrayResult.push(result);
    })
}

function calculateDpsElem() {
    const index1 = arrayResult.findIndex(object => {
        return object.type === "Fire";
    })
    const index2 = arrayResult.findIndex(object => {
        return object.type === "Cold";
    })
    const index3 = arrayResult.findIndex(object => {
        return object.type === "Light";
    })

    const addResult = parseFloat(arrayResult[index1].total) + parseFloat(arrayResult[index2].total) + parseFloat(arrayResult[index3].total);
    const result = new DpsResult(addResult, "Elemental");
    arrayResult.push(result);
}

function calculateDpsTotal() {
    const index1 = arrayResult.findIndex(object => {
        return object.type === "Phys";
    })
    const index2 = arrayResult.findIndex(object => {
        return object.type === "Chaos";
    })
    const index3 = arrayResult.findIndex(object => {
        return object.type === "Elemental";
    })

    const addResult = parseFloat(arrayResult[index1].total) + parseFloat(arrayResult[index2].total) + parseFloat(arrayResult[index3].total);
    const result = new DpsResult(addResult, "Total");
    arrayResult.push(result);
}


// Function: Display results

function display(label) {
    if (label === "Phys" || "Chaos" || "Fire" || "Cold" || "Light" || "Elemental" || "Total") {
        const index = arrayResult.findIndex(object => {
            return object.type === label;
        })

        if (index != -1) {
            switch (label) {
                case "Phys":
                    areaPhys.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Chaos":
                    areaChaos.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Fire":
                    areaFire.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Cold":
                    areaCold.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Light":
                    areaLight.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Elemental":
                    areaElemental.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;

                case "Total":
                    areaTotal.value = parseFloat(arrayResult[index].total).toFixed(2);
                    break;
            }
        }
    }
}


// Validation Form

inputS.addEventListener('input', function() {
    this.setCustomValidity('');
  });

inputS.addEventListener("invalid", function() {
    if (this.validity.valueMissing) {
      this.setCustomValidity('Por favor ingrese velocidad de ataque!');
    }
});

// Calculator Buttom

formDPS.addEventListener("submit", (e) => {
    e.preventDefault();

    arrayResult.length = 0;

    newDPS("Phys", inputMinPhys.value, inputMaxPhys.value);
    newDPS("Chaos", inputMinChaos.value, inputMaxChaos.value);
    newDPS("Fire", inputMinFire.value, inputMaxFire.value);
    newDPS("Cold", inputMinCold.value, inputMaxCold.value);
    newDPS("Light", inputMinLight.value, inputMaxLight.value);
    newSpeed();

    calculateDps();
    calculateDpsElem();
    calculateDpsTotal();

    display("Phys");
    display("Chaos");
    display("Fire");
    display("Cold");
    display("Light");
    display("Elemental");
    display("Total");
});


















