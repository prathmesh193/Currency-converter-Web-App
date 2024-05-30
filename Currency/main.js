const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

// const sample = require("./currency-api.json");
// console.log(sample)
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/d4a67d1130d37303353a2f5a/latest/${currencyFirstEl.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3)
    });
}

currencyFirstEl.addEventListener("change",updateRate)

currencySecondEl.addEventListener("change",updateRate)

worthFirstEl.addEventListener("input",updateRate)