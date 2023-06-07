function MedScan() {
    var images = ''
    var usage = ''
    var allergen = ''
    var side_effect = ''
    var precaution = ''
    var product_name = ''


    var pharma_products = [
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' },
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' },
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' },
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' },
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' },
        { image: "url", names: 'Alcophyllex', usages: '', side_effects: '', allergens: '', precautions: '' }
    ]
    function displayProduct(name_of_product) {
        for (var i = 0; i < 6; i++) {
            if (pharma_products.names[i] == name_of_product) {
                images = pharma_products.image[i]
                usage = pharma_products.usages[i]
                side_effect = pharma_products.side_effects[i]
                allergen = pharma_products.allergens[i]
                precaution = pharma_products.precautions[i]
            }
        }
    }


    function getImage() {
        return images
    }

    function getUsages() {
        return usage
    }

    function getSideEffects() {
        return side_effect
    }
    function getAllergens() {
        return allergen
    }

    function getPrecautions() {
        return precaution
    }

    function errorHandling() {

    }

    return {
        getImage, getUsages, getSideEffects, getAllergens, displayProduct, errorHandling, getPrecautions
    }
}