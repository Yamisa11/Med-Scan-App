var displayPrecaution = document.querySelector(".displayPrecaution");
var displayAllergens = document.querySelector(".Allergens");
var displayEffects = document.querySelector(".effects");
var displayUses = document.querySelector(".displayUses");
var filterTopic = document.querySelector(".topics");
var showBtn = document.querySelector(".show");
var saveBtn = document.querySelector(".save");
var container1 = document.querySelector('.container1')
var container2 = document.querySelector('.container2')
var container3 = document.querySelector('.container3')

var medScan = MedScan();

var Precautionvalue = "";
var usesValue = "";
var allergensValue = "";
var effectsValue = "";
var product = {};

function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  // console.log(`Scan result: ${decodedText}`, decodedResult);

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

  localStorage["Products"] = JSON.stringify(product);
container1.classList.add('hidden')
container2.classList.remove('hidden')
container3.classList.add('hidden')
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250,
});

html5QrcodeScanner.render(onScanSuccess);
var data = JSON.parse(localStorage.getItem("Products"));
console.log(data);

window.addEventListener("DOMContentLoaded", (event) => {
    var data = JSON.parse(localStorage.getItem("Products"));
console.log(data);
displayPrecaution.innerHTML = data.precaut;
displayAllergens.innerHTML = data.allergy;
displayEffects.innerHTML = data.effect;
displayUses.innerHTML = data.use;
});


showBtn.addEventListener("click", function () {
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
