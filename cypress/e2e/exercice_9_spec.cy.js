import checkAge from "../../Exercise9/script";

describe('Unit Test for checkAge', () => {
    it('Displays `You are under 18.` when age <18', ()=>{
        expect(checkAge(15)).to.eq(`You are under 18.`)
    })
    it('Displays `You are adult.` when age >18 and <65', ()=>{
        expect(checkAge(18)).to.eq(`You are an adult.`)
        expect(checkAge(20)).to.eq(`You are an adult.`)
        expect(checkAge(64)).to.eq(`You are an adult.`)
    })
    it('Displays `You are elder.` when age >=65', ()=>{
        expect(checkAge(18)).not.to.eq(`You are senior.`)
        expect(checkAge(65)).to.eq(`You are senior.`)
        expect(checkAge(70)).to.eq(`You are senior.`)
    })


} )
