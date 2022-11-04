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



// Form Inputs:

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

const selectType = document.getElementById("selectType");

// Form Results:

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
        if (this.value.length > 4) {
            this.value = this.value.slice(0, 4);
        }
    }
});

// Form validity:

const formDPS = document.getElementById("formDPS");

inputS.addEventListener('input', function () {
    this.setCustomValidity('');
});

inputS.addEventListener("invalid", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity('Por favor ingrese velocidad de ataque!');
    }
});

// Function: Modify dps values with new entry on input

function newPhysicalDPS(inputMin, inputMax) {
    inputMin > 0 ? physDPS.min = parseFloat(inputMin) : physDPS.min = 0;
    inputMax > 0 ? physDPS.max = parseFloat(inputMax) : physDPS.max = 0;
}

function newChaosDPS(inputMin, inputMax) {
    inputMin > 0 ? chaosDPS.min = parseFloat(inputMin) : chaosDPS.min = 0;
    inputMax > 0 ? chaosDPS.max = parseFloat(inputMax) : chaosDPS.max = 0;
}

function newFireDPS(inputMin, inputMax) {
    inputMin > 0 ? fireDPS.min = parseFloat(inputMin) : fireDPS.min = 0;
    inputMax > 0 ? fireDPS.max = parseFloat(inputMax) : fireDPS.max = 0;
}

function newColdDPS(inputMin, inputMax) {
    inputMin > 0 ? coldDPS.min = parseFloat(inputMin) : coldDPS.min = 0;
    inputMax > 0 ? coldDPS.max = parseFloat(inputMax) : coldDPS.max = 0;
}

function newLightDPS(inputMin, inputMax) {
    inputMin > 0 ? lightDPS.min = parseFloat(inputMin) : lightDPS.min = 0;
    inputMax > 0 ? lightDPS.max = parseFloat(inputMax) : lightDPS.max = 0;
}

// Function: Modify speed value with new entry on input

function newSpeed() {
    if (inputS.value > 0) {
        speedDPS.speed = parseFloat(inputS.value);
    } else {
        speedDPS.speed = 0;
    }
}

// Function: Calculate results

const arrayResult = [];

function calculateDps() {
    arrayDPS.forEach((dps) => {
        const total = ((dps.min + dps.max) / 2) * speedDPS.speed;
        const result = new DpsResult(total, dps.type);
        arrayResult.push(result);
    })
}

function calculateDpsElem() {
    const fire = arrayResult.find((dps) => dps.type === "Fire");
    const cold = arrayResult.find((dps) => dps.type === "Cold");
    const light = arrayResult.find((dps) => dps.type === "Light");

    const addResult = parseFloat(fire.total) + parseFloat(cold.total) + parseFloat(light.total);
    const result = new DpsResult(addResult, "Elemental");
    arrayResult.push(result);
}


function calculateDpsTotal() {
    const phys = arrayResult.find((dps) => dps.type === "Phys");
    const chaos = arrayResult.find((dps) => dps.type === "Chaos");
    const elemental = arrayResult.find((dps) => dps.type === "Elemental");

    const addResult = parseFloat(phys.total) + parseFloat(chaos.total) + parseFloat(elemental.total);
    const result = new DpsResult(addResult, "Total");
    arrayResult.push(result);
}


// Function: Display results

function displayPhys() {
    const phys = arrayResult.find((dps) => dps.type === "Phys");
    areaPhys.value = parseFloat(phys.total).toFixed(2);
}

function displayChaos() {
    const chaos = arrayResult.find((dps) => dps.type === "Chaos");
    areaChaos.value = parseFloat(chaos.total).toFixed(2);
}

function displayFire() {
    const fire = arrayResult.find((dps) => dps.type === "Fire");
    areaFire.value = parseFloat(fire.total).toFixed(2);
}

function displayCold() {
    const cold = arrayResult.find((dps) => dps.type === "Cold");
    areaCold.value = parseFloat(cold.total).toFixed(2);
}

function displayLight() {
    const light = arrayResult.find((dps) => dps.type === "Light");
    areaLight.value = parseFloat(light.total).toFixed(2);
}

function displayElemental() {
    const elemental = arrayResult.find((dps) => dps.type === "Elemental");
    areaElemental.value = parseFloat(elemental.total).toFixed(2);
}

function displayTotal() {
    const total = arrayResult.find((dps) => dps.type === "Total");
    areaTotal.value = parseFloat(total.total).toFixed(2);
}


// Calculate DPS Buttom

formDPS.addEventListener("submit", (e) => {
    e.preventDefault();

    arrayResult.length = 0;

    // Input
    newPhysicalDPS(inputMinPhys.value, inputMaxPhys.value);
    newChaosDPS(inputMinChaos.value, inputMaxChaos.value);
    newFireDPS(inputMinFire.value, inputMaxFire.value);
    newColdDPS(inputMinCold.value, inputMaxCold.value);
    newLightDPS(inputMinLight.value, inputMaxLight.value);
    newSpeed();

    // Calculate
    calculateDps();
    calculateDpsElem();
    calculateDpsTotal();

    // Display
    displayPhys();
    displayChaos();
    displayFire();
    displayCold();
    displayLight();
    displayElemental();
    displayTotal();

    // Weapon Card
    createWeapon();

    // Toastify
    Toastify({
        text: "Arma añadida a la lista",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to left, rgba(43, 51, 68, 1), rgba(20, 31, 49, 1))",
        },
    }).showToast();
});


//////////////////////////////////////////////////////////////////////////

// Weapon Cards

class WeaponCard {
    constructor(phys, elemental, weaponType) {
        this.phys = phys;
        this.elemental = elemental;
        this.weaponType = weaponType;
        this.handed = setHanded(this.weaponType);
        this.tier = setTier(this.phys, this.elemental, this.handed);
        this.id = arrayWeapons.length;
    }
}

let arrayWeapons = [];

arrayWeapons = localStorage.getItem("weapons") ? JSON.parse(localStorage.getItem("weapons")) : [];

// Function: Set Handed

function setHanded(type) {
    if (type === "twoHandSword" || type === "twoHandAxe" || type === "twoHandMace") {
        return 2;
    }

    return 1;
}

// Function: Set Tier

function setTier(phys, elemental, handed) {
    if (handed === 1) {
        return setTierOne(phys, elemental);
    }

    return setTierTwo(phys, elemental);
}

// One-Handed:

function setTierOne(phys, elemental) {
    if (elemental > phys) {
        return setTierOneElemental(elemental);
    }

    return setTierOnePhys(phys);
}

function setTierOneElemental(elemental) {
    // One-Handed Elemental:
    if (elemental >= 600) {
        return "S"
    }

    if (elemental >= 500) {
        return "A"
    }

    if (elemental >= 400) {
        return "B"
    }

    return "C"

}

function setTierOnePhys(phys) {
    // One-Handed Physical:
    if (phys >= 600) {
        return "S"
    }

    if (phys >= 500) {
        return "A"
    }

    if (phys >= 400) {
        return "B"
    }

    return "C"
}

// Two-Handed:

function setTierTwo(phys, elemental) {
    if (elemental > phys) {
        return setTierTwoElemental(elemental);
    }

    return setTierTwoPhys(phys);
}

function setTierTwoElemental(elemental) {
    // Two-Handed Elemental
    if (elemental >= 800) {
        return "S"
    }

    if (elemental >= 700) {
        return "A"
    }

    if (elemental >= 600) {
        return "B"
    }

    return "C"
}

function setTierTwoPhys(phys) {
    // Two-handed Physical
    if (phys >= 800) {
        return "S"
    }

    if (phys >= 700) {
        return "A"
    }

    if (phys >= 600) {
        return "B"
    }

    return "C"
}

// Function: Create new Weapon

function createWeapon() {
    const newWeapon = new WeaponCard(areaPhys.value, areaElemental.value, selectType.value);
    arrayWeapons.push(newWeapon);
    localStorage.setItem("weapons", JSON.stringify(arrayWeapons));
}

// Function: Show Weapons

const cardContainer = document.getElementById("cardContainer");
const showCardsBtn = document.getElementById("showCardsBtn");

showCardsBtn.addEventListener("click", () => {
    showCards();
});

function showCards() {
    cardContainer.innerHTML = " ";
    arrayWeapons.forEach((weapon) => {
        const card = document.createElement("div");
        card.classList.add("card", "weaponCard", "mb-3", "col-12", "col-lg-6");
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center">
                    <img src="../img/weapons/${weapon.weaponType}.png" class="img-fluid rounded-start" alt="${weapon.weaponType}">
                </div>
                <div class="col-md-8">
                <div class="card-body row">
                    <div class="col-8">
                        <h5 class="card-title ">${weapon.weaponType}</h5>
                        <h5 class="card-title ${weapon.tier}">Tier ${weapon.tier}</h5>
                        <p class="card-text">Dps Fisico: ${weapon.phys}</p>
                        <p class="card-text">DPS Elemental: ${weapon.elemental}</p>
                    </div>
                    <div class="col-4 d-flex align-items-end">
                        <button class="btn btn-warning" id="btn${weapon.id}"> Borrar </button>
                    </div>
                </div>
            </div>
            </div>
        `
        cardContainer.appendChild(card);

        const btn = document.getElementById(`btn${weapon.id}`);
        btn.addEventListener("click", () => {
            eraseWeapon(weapon.id);
        })
    })
}

// Function Erase weapon

function eraseWeapon(id) {
    const weapon = arrayWeapons.find((weapon) => weapon.id === id);
    const weaponId = arrayWeapons.indexOf(weapon);
    arrayWeapons.splice(weaponId, 1);
    showCards();

    localStorage.setItem("weapons", JSON.stringify(arrayWeapons));
}

// Function Erase all weapons

const eraseCardsBtn = document.getElementById("eraseCardsBtn");

eraseCardsBtn.addEventListener("click", () => {
    Swal.fire({
        title: 'Eliminar todas las armas?',
        icon: 'warning',
        background:"rgb(43, 51, 68)",
        color: "rgb(203, 208, 216)",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: `Cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            arrayWeapons = [];
            showCards();
            localStorage.clear();
            Swal.fire({
                title: `Todas las armas han sido eliminadas`,
                icon: `success`,
                background: `rgb(43, 51, 68)`,
                color: "rgb(203, 208, 216)",
            }
              
            )
        }
    })
})



































