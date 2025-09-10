
const {test,expect} =require("@playwright/test")
test("my first case",async function({page}){
    expect(12).toBe(12)
    
})
test.skip("my second case",async function({page}){
    expect(100).toBe(101)
})
test("my thired case",async function({page}){
    expect(1.2).toBe(1.2)
})
test("my fouth case",async function({page}){
    expect("swati bhagat").toContain("swati ")
    expect(true).toBeTruthy()
})
test("my fifth case",async function({page}){
    expect(false).toBeFalsy()
})