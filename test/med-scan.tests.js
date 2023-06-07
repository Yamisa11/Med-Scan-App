describe('hi ', function () {
    it('h', function () {
        var medScan = MedScan()
        medScan.getNameOfProduct('Soflax')

        assert.deepEqual('3', medScan.getPrecautions())
    })
})