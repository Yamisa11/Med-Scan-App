function MedScan() {
    var images = ''
    var usage = ''
    var allergen = ''
    var side_effect = ''
    var precaution = ''
    var product_name = ''

    var pharma_products = [
        { image: "url", names: 'Alcophyllex', usages: 'a', side_effects: 'al', allergens: '', precautions: '1' },
        { image: "url", names: 'Flustat', usages: 'b', side_effects: 'fatigue', allergens: '', precautions: '2' },
        { image: "url", names: 'Soflax', usages: 'c', side_effects: 'so', allergens: '', precautions: '3' },
        { image: "url", names: 'Allergex', usages: 'd', side_effects: 'all', allergens: '', precautions: '4' },
        { image: "url", names: 'Medazine', usages: 'e', side_effects: 'me', allergens: 'rash', precautions: '5' },
        { image: "url", names: 'Gastropect', usages: 'f', side_effects: 'ga', allergens: 'sodium', precautions: '7' }
    ]


    function getNameOfProduct(name_of_product) {
        product_name = name_of_product
        return product_name
    }

    function getPrecautions() {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == product_name) {
                for (const y in pharma_products[i]) {
                    precaution = pharma_products[i].precautions
                }
                return precaution
            }
        }
    }

    function getAllergens() {
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == product_name) {
                for (const y in pharma_products[i]) {
                    allergen = pharma_products[i].allergens

                }
                return allergen
            }
        }
    }

    function getSideEffects() {
    
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == product_name) {
                for (const y in pharma_products[i]) {
                    side_effect = pharma_products[i].side_effects

                }
                return side_effect
            }
        }
    }

    function getUsages() {
    
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == product_name) {
                for (const y in pharma_products[i]) {
                    usage = pharma_products[i].usages

                }
                return usage
            }
        }
    }

    function getImage() {
    
        for (var i = 0; pharma_products.length < 7; i++) {
            if (pharma_products[i].names == product_name) {
                for (const y in pharma_products[i]) {
                    images = pharma_products[i].image
                }
                return images
            }
        }
    }




    return {
        getImage, getUsages, getSideEffects, getAllergens,  getPrecautions, getNameOfProduct
    }
}




