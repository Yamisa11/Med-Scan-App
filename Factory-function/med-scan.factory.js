function MedScan() {
    var images = ''
    var usage = ''
    var allergen = ''
    var side_effect = ''
    var precaution = ''
    var nameprod = ''

    var pharma_products = [
        { image: "url", names: 'Alcophyllex', usages: 'a', side_effects: 'dc', allergens: 'f', precautions: 'r' },
        { image: "url", names: 'Alcophyllex', usages: 'c', side_effects: 'd', allergens: 'f', precautions: 'r' },
        { image: "url", names: 'Soflax', usages: 'f', side_effects: 'f', allergens: 'fente', precautions: '3' },
        { image: "url", names: 'Alcophyllex', usages: 'cd', side_effects: 'd', allergens: 'f', precautions: 't' },
        { image: "url", names: 'Alcophyllex', usages: 'd', side_effects: 'd', allergens: 'f', precautions: 't' },
        { image: "url", names: 'Alcophyllex', usages: 'd', side_effects: 'e', allergens: 'f', precautions: 't' }
    ]

    function getPrecautions() {
        return precaution
    }
    function getNameOfProduct(name_of_product) {
        nameprod = name_of_product
        return nameprod
    }

    function getPrecautions() {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == nameprod) {
                for (const y in pharma_products[i]) {
                    precaution = pharma_products[i].precautions
                }
                return precaution
            }
        }
    }

    function getAllergens(name_of_product) {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == name_of_product) {
                for (const y in pharma_products[i]) {
                    allergen = pharma_products[i].allergens

                }
                return allergen
            }
        }
    }

    function getSideEffects(name_of_product) {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == name_of_product) {
                for (const y in pharma_products[i]) {
                    side_effect = pharma_products[i].side_effects

                }
                return side_effect
            }
        }
    }

    function getUsages(name_of_product) {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == name_of_product) {
                for (const y in pharma_products[i]) {
                    // console.log(pharma_products[i]);
                    usage = pharma_products[i].usages

                }
                return usage
            }
        }
    }

    function getImage(name_of_product) {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == name_of_product) {
                for (const y in pharma_products[i]) {
                    // console.log(pharma_products[i]);
                    images = pharma_products[i].image

                }
                return images
            }
        }
    }


    //     images = pharma_products[i].image
    //     usage = pharma_products[i].usages
    //     side_effect = pharma_products[i].side_effects
    //     allergen = pharma_products[i].allergens
    //     precaution = pharma_products[i].precautions



    // function getImage() {
    //     return images
    // }

    // function getUsages() {
    //     return usage
    // }

    // function getSideEffects() {
    //     return side_effect
    // }
    // function getAllergens() {
    //     return allergen
    // }



    function errorHandling() {

    }

    return {
        getImage, getUsages, getSideEffects, getAllergens, errorHandling, getPrecautions, getNameOfProduct
    }
}




