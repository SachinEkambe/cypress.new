
describe('Hooks and tags',()=>{

    before(()=>{
        cy.log("***  lunch application before   ***")
    })

    after(()=>{
        cy.log("***  close application after   ***")
    })

    beforeEach(()=>{
        cy.log("***  Each application before   ***")
    })

    afterEach(()=>{
        cy.log("***  Each application after   ***")
    })
    it('search',()=>{
        cy.log("*** search ***")
    })

    it('Adv search',()=>{
        cy.log("*** advance search ***")
    })

    it('product search',()=>{
        cy.log("*** product search ***")
    })
})

//before: it will apply for before execution for all
//after: it will apply for once after execution
//beforeEach: it will apply for before the execution for all it blocks
//afterEach: it will apply for all it block after the execution