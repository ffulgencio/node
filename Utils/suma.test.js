const suma = require('./suma')

test('2 + 3 = 5',()=>{
    expect(suma(2,3)).toBe(5)
});

test('"a" + 5 = NaN', ()=>{
    expect(suma('a',5)).toBe(NaN)
})