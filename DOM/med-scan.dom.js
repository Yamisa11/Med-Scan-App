var displayPrecaution = document.querySelector(".displayPrecaution");
var displayAllergens = document.querySelector(".Allergens");
var displayEffects = document.querySelector(".effects");
var displayUses = document.querySelector(".displayUses");
var filterTopic = document.querySelector(".topics");
var showBtn = document.querySelector(".show");
var saveBtn = document.querySelector(".save");
var showAll = document.querySelector(".all");
var dropDownSelected = document.querySelector("select");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
let divElm = document.querySelector(".content");


var Precautionvalue = "";
var usesValue = "";
var allergensValue = "";
var effectsValue = "";
var product = {};

// var data = JSON.parse(localStorage.getItem("Products")) || [];
// console.log(data.theName);
var medScan = MedScan();
function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);

  medScan.getNameOfProduct(decodedText);
  Precautionvalue = medScan.getPrecautions();
  usesValue = medScan.getUsages();
  allergensValue = medScan.getAllergens();
  effectsValue = medScan.getSideEffects();

  product = {
    theName: decodedText,
    precaut: Precautionvalue,
    use: usesValue,
    effect: effectsValue,
    allergy: allergensValue,
  };

  localStorage.setItem("Products", JSON.stringify(product));
  container1.classList.add("hidden");
  container2.classList.remove("hidden");
  container3.classList.add("hidden");

  var data = JSON.parse(localStorage.getItem("Products"))

  divElm.style.display === "block";
  console.log(data);
  displayPrecaution.innerHTML = data.precaut;
  displayAllergens.innerHTML = data.allergy;
  displayEffects.innerHTML = data.effect;
  displayUses.innerHTML = data.use;
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250,
});

html5QrcodeScanner.render(onScanSuccess);
// console.log(data);

// window.addEventListener("DOMContentLoaded", (event) => {
// var data = JSON.parse(localStorage.getItem("Products"));
// divElm.style.background-color == "red"
// if(divElm.style.display === "none") {
// } else {
// divElm.style.display === "none";

// }
// });

dropDownSelected.addEventListener("change", (event) =>{
    var data = JSON.parse(localStorage.getItem("Products"))
    var {value} = event.target.options[event.target.selectedIndex]
   
    if (filterTopic.value == "all") {
        displayPrecaution.innerHTML = data.precaut;
        displayAllergens.innerHTML = data.allergy;
        displayEffects.innerHTML = data.effect
        displayUses.innerHTML = data.use;
      }
  if (filterTopic.value == "Effects") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = data.effect;
    displayUses.innerHTML = "";
  }
  if (filterTopic.value == "Uses") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = "";
    displayUses.innerHTML = data.use;
  }
  if (filterTopic.value == "Aller") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = data.allergy;
    displayEffects.innerHTML = "";
    displayUses.innerHTML = "";
  }
  if (filterTopic.value == "Prec") {
    displayPrecaution.innerHTML = data.precaut;
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = "";
    displayUses.innerHTML = "";
  }
});

// saveBtn.addEventListener("click", function(){
//     var productList = []
// productList.push(data)
// localStorage["productList"] = JSON.stringify(productList)
// })
// window.location.href="../pages/productdetails.html";
