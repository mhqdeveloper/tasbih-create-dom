const subhanAllahDisplay = document.getElementById("Subhan-Allah-display ");
const subhanAllahIncrement = document.getElementById("SubhanAllah-Increment-btn");
const subhanAllahDecrement = document.getElementById("SubhanAllah-Decrement-btn");

const alhamdulillahDisplay = document.getElementById("Alhamdulillah-display");
const alhamdulillahIncrement = document.getElementById("Alhamdulillah-Increment-btn");
const alhamdulillahDecrement = document.getElementById("Alhamdulillah-Decrement-btn");

const allahuAkbarDisplay = document.getElementById("AllhuAkbar-display");
const allahuAkbarIncrement = document.getElementById("AllhuAkbar-Increment-btn");
const allahuAkbarDecrement = document.getElementById("AllhuAkbar-Decrement-btn");

const resetButton = document.getElementById("reset-btn");

let subhanAllahValue = 0;
let alhamdulillahValue = 0;
let allahuAlkbarValue = 0;

// Subhan Allah 
subhanAllahIncrement.addEventListener("click", function () {
    if (subhanAllahValue === 33) {
        return alert`Subhan-Allah complete`
    }

    subhanAllahValue += 1;
    subhanAllahDisplay.innerText = subhanAllahValue;
})


subhanAllahDecrement.addEventListener("click", function () {
    if (subhanAllahValue === 0) {
        return alert`Please keep Tasbih`
    }
    subhanAllahValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahValue;
})

// Alhadulillah 
alhamdulillahIncrement.addEventListener("click", function () {
    if (alhamdulillahValue === 33) {
        return alert` MashAllah complete Alhamdulillah`
    }

    alhamdulillahValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;

})

alhamdulillahDecrement.addEventListener("click", function () {
    if (alhamdulillahValue === 0) {
        return alert`Please press the green button and read tasbih`
    }
    alhamdulillahValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})


//Allahu Akbar
allahuAkbarIncrement.addEventListener("click", function () {
    if (allahuAlkbarValue === 33) {
        return alert`MashAllah you are complete Allahu-Akbar`
    }
    allahuAlkbarValue += 1;
    allahuAkbarDisplay.innerText = allahuAlkbarValue;
})

 allahuAkbarDecrement.addEventListener("click", function(){
    if(allahuAlkbarValue === 0){
        return alert `Please press the green button and read tasbih`
    }
    allahuAlkbarValue -= 1;
    allahuAkbarDisplay.innerText = allahuAlkbarValue;
 })


 resetButton.addEventListener("click", function(){

   subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;

    subhanAllahValue = 0;
    alhamdulillahValue = 0;
    allahuAlkbarValue = 0;
 })