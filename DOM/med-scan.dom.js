var displayPrecaution = document.querySelector(".precaution")

var medScan = MedScan()




function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
medScan.getNameOfProduct(decodedText);

console.log(medScan.getPrecautions());

}

var html5QrcodeScanner =  new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);