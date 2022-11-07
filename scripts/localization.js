// Calculator Language

const spanish = "../localization/spanish.json";
const english = "../localization/english.json";

const spanishBtn = document.getElementById("spanishBtn");
const englishBtn = document.getElementById("englishBtn");


let languageStorage = localStorage.getItem("language");

if(languageStorage === "english") {
    expLocal(english);
    labelLocal(english);
    optionLocal(english);
    evaluationLocal(english)
} else {
    expLocal(spanish);
    labelLocal(spanish);
    optionLocal(spanish);
    evaluationLocal(spanish);
}

spanishBtn.addEventListener("click", () => {
    expLocal(spanish);
    labelLocal(spanish);
    optionLocal(spanish);
    evaluationLocal(spanish);
    localStorage.removeItem("language");
    localStorage.setItem("language", "spanish");
});

englishBtn.addEventListener("click", () => {
    expLocal(english);
    labelLocal(english);
    optionLocal(english);
    evaluationLocal(english);
    localStorage.removeItem("language");
    localStorage.setItem("language", "english");
});

// Explanation Text

const expTitle = document.getElementById("expTitle");
const expPara1 = document.getElementById("expPara1");
const expPara2 = document.getElementById("expPara2");

function expLocal(language) {
    fetch(language)
        .then(response => response.json())
        .then(response => {
            const text = response.find((response) => response.id === "expText");
            expTitle.innerHTML = text.expTitle;
            expPara1.innerHTML = text.expPara1;
            expPara2.innerHTML = text.expPara2;
        });
}

// Labels Text

const labelPhysical = document.getElementById("labelPhysical");
const labelChaos = document.getElementById("labelChaos");
const labelFire = document.getElementById("labelFire");
const labelCold = document.getElementById("labelCold");
const labelLight = document.getElementById("labelLight");
const labelSpeed = document.getElementById("labelSpeed");
const labelClass = document.getElementById("labelClass");

const labelPhysical2 = document.getElementById("labelPhysical2");
const labelChaos2 = document.getElementById("labelChaos2");
const labelFire2 = document.getElementById("labelFire2");
const labelCold2 = document.getElementById("labelCold2");
const labelLight2 = document.getElementById("labelLight2");
const labelElemental = document.getElementById("labelElemental");
const labelTotal = document.getElementById("labelTotal");

function labelLocal(language) {
    fetch(language)
        .then(response => response.json())
        .then(response => {
            const text = response.find((response) => response.id === "labelText");
            labelPhysical.innerHTML = text.physical;
            labelChaos.innerHTML = text.chaos;
            labelFire.innerHTML = text.fire;
            labelCold.innerHTML = text.cold;
            labelLight.innerHTML = text.light;
            labelSpeed.innerHTML = text.speed;
            labelClass.innerHTML = text.class;

            labelPhysical2.innerHTML = `${text.physical}: `;
            labelChaos2.innerHTML = `${text.chaos}: `;
            labelFire2.innerHTML = `${text.fire}: `;
            labelCold2.innerHTML = `${text.cold}: `;
            labelLight2.innerHTML = `${text.light}: `;
            labelElemental.innerHTML = `${text.elemental}: `;
            labelTotal.innerHTML = `${text.total}: `;
        });
}

// Option Text

const selectContainer = document.getElementById("selectContainer");


function optionLocal(language) {
    fetch(language)
    .then(response => response.json())
    .then(response => {
        const text = response.find((response) => response.id === "optionText");
        selectContainer.innerHTML =  `
        <select class="form-select" id="selectType">
            <option value="oneHandSword">${text.oneSword}</option>
            <option value="oneHandAxe">${text.oneAxe}</option>
            <option value="oneHandMace">${text.oneMace}</option>
            <option value="twoHandSword">${text.twoSword}</option>
            <option value="twoHandAxe">${text.twoAxe}</option>
            <option value="twoHandMace">${text.twoMace}</option>
            <option value="bow">${text.bow}</option>
        </select>
        `
    })
}

// Evaluation Text

const evaluationTitle = document.getElementById("evaluationTitle");
const evaluationIntro = document.getElementById("evaluationIntro");

const evaluationParaC = document.getElementById("evaluationParaC");
const evaluationPriceC = document.getElementById("evaluationPriceC");

const evaluationParaB = document.getElementById("evaluationParaB");
const evaluationPriceB = document.getElementById("evaluationPriceB");

const evaluationParaA = document.getElementById("evaluationParaA");
const evaluationPriceA = document.getElementById("evaluationPriceA");

const evaluationParaS = document.getElementById("evaluationParaS");
const evaluationPriceS = document.getElementById("evaluationPriceS");

function evaluationLocal(language) {
    fetch(language)
    .then(response => response.json())
    .then(response => {
        const text = response.find((response) => response.id === "evaluationText");

        evaluationTitle.innerHTML = text.title;
        evaluationIntro.innerHTML = text.intro;

        evaluationParaC.innerHTML = text.paraC;
        evaluationPriceC.innerHTML = text.priceC;

        evaluationParaB.innerHTML = text.paraB;
        evaluationPriceB.innerHTML = text.priceB;

        evaluationParaA.innerHTML = text.paraA;
        evaluationPriceA.innerHTML = text.priceA;

        evaluationParaS.innerHTML = text.paraS;
        evaluationPriceS.innerHTML = text.priceS;
      
    })
}