var displayPrecaution = document.querySelector(".displayPrecaution");
var displayAllergens = document.querySelector(".Allergens");
var displayEffects = document.querySelector(".effects");
var displayUses = document.querySelector(".displayUses");
var filterTopic = document.querySelector(".topics");
var scan_again = document.querySelector(".scanagain");
var showAll = document.querySelector(".all");
var saveBtn = document.querySelector('.save')
var dropDownSelected = document.querySelector("select");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var picture = document.querySelector(".image");
let divElm = document.querySelector(".content");
var viewAllBtn = document.querySelector('.viewAll')
let allContent = document.querySelector(".allContent");
let allImage = document.querySelector(".allImage");
let allView = document.querySelector(".allView");
let l1 = document.querySelector('.l1')
let l2 = document.querySelector('.l2')
let l3 = document.querySelector('.l3')
let l4 = document.querySelector('.l4')

var pic_img = "";
var Precautionvalue = "";
var usesValue = "";
var allergensValue = "";
var effectsValue = "";
var product = {};
var productList = []

// var data = JSON.parse(localStorage.getItem("Products")) || [];
// console.log(data.theName);
var medScan = MedScan();
function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);

  medScan.getNameOfProduct(decodedText);
  Precautionvalue = medScan.getPrecautions();
  usesValue = medScan.getUsages();
  pic_img = medScan.getImage();
  allergensValue = medScan.getAllergens();
  effectsValue = medScan.getSideEffects();

  product = {
    image: pic_img,
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

  var data = JSON.parse(localStorage.getItem("Products"));

  divElm.style.display === "block";
  console.log(data);
  picture.src = data.image; //stays on page
  displayUses.innerHTML = data.use;
  displayEffects.innerHTML = data.effect;
  displayPrecaution.innerHTML = data.precaut;
  displayAllergens.innerHTML = data.allergy;
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

dropDownSelected.addEventListener("change", (event) => {
    var data = JSON.parse(localStorage.getItem("Products"));
  var { value } = event.target.options[event.target.selectedIndex];

  if (filterTopic.value == "all") {
    displayPrecaution.innerHTML = data.precaut;
    displayAllergens.innerHTML = data.allergy;
    displayEffects.innerHTML = data.effect;
    displayUses.innerHTML = data.use;

  }
  if (filterTopic.value == "Effects") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = data.effect;
    displayUses.innerHTML = "";
    l1.innerHTML = ""
    l3.innerHTML = ""
    l4.innerHTML = ""
    l2.innerHTML = "Side Effects: "
  }
  if (filterTopic.value == "Uses") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = "";
    displayUses.innerHTML = data.use;
    l2.innerHTML = ""
    l3.innerHTML = ""
    l4.innerHTML = ""
    l1.innerHTML = "Uses: "
  }
  if (filterTopic.value == "Aller") {
    displayPrecaution.innerHTML = "";
    displayAllergens.innerHTML = data.allergy;
    displayEffects.innerHTML = "";
    displayUses.innerHTML = "";
    l2.innerHTML = ""
    l3.innerHTML = ""
    l1.innerHTML = ""
    l4.innerHTML = "Allergens: "

  }
  if (filterTopic.value == "Prec") {
    displayPrecaution.innerHTML = data.precaut;
    displayAllergens.innerHTML = "";
    displayEffects.innerHTML = "";
    displayUses.innerHTML = "";
    l2.innerHTML = ""
    l1.innerHTML = ""
    l4.innerHTML = ""
    l3.innerHTML = "Precaution: "
  }
});




scan_again.addEventListener("click", function(){
  container1.classList.remove("hidden");
  container2.classList.add("hidden");

})

saveBtn.addEventListener("click", function (){
  var data = JSON.parse(localStorage.getItem("Products"));
  productList.push(data)
  localStorage.setItem("savedList", JSON.stringify(productList))
})

viewAllBtn.addEventListener('click', function (){
  container1.classList.add("hidden");
  container2.classList.add("hidden");
  container3.classList.remove("hidden");
  var data = JSON.parse(localStorage.getItem("savedList"));

  for (let i = 0; i < data.length; i++) {
    var imagDiv = document.createElement("img");
    imagDiv.src = data[i].use;
    allContent.appendChild(imagDiv);
    var usesDiv = document.createElement("div");
    allUses = document.createTextNode(data[i].use);
    usesDiv.appendChild(allUses);
    allContent.appendChild(usesDiv);
    var effectsDiv = document.createElement("div");
    allEffects = document.createTextNode(data[i].effect);
    effectsDiv.appendChild(allEffects);
    allContent.appendChild(effectsDiv);
    var precauDiv = document.createElement("div");
    allPrecau = document.createTextNode(data[i].precaut);
    precauDiv.appendChild(allPrecau);
    allContent.appendChild(precauDiv);
    var allerDiv = document.createElement("div");
    allAller = document.createTextNode(data[i].allergy);
    allerDiv.appendChild(allAller);
    allContent.appendChild(allerDiv);
    
  }
})

