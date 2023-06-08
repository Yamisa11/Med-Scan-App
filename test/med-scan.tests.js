describe('MedScan App Test ', function () {
    it('should be able to get precautions of of Soflax', function () {
        var medScan = MedScan()
        medScan.getNameOfProduct('Soflax')

        assert.deepEqual('3', medScan.getPrecautions())
    })

    it('should be able to get uses of Allergex', function () {
        var medScan = MedScan()
        medScan.getNameOfProduct('Allergex')

        assert.deepEqual('d', medScan.getUsages())
    })
    it('should be able to get side effects of Flustat', function () {
        var medScan = MedScan()
        medScan.getNameOfProduct('Flustat')

        assert.deepEqual('fatigue', medScan.getSideEffects())
    })
    it('should be able to get Allergens of Medazine', function () {
        var medScan = MedScan()
        medScan.getNameOfProduct('Medazine')

        assert.deepEqual('rash', medScan.getAllergens())
    })
   
})