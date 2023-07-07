describe('screenshort',()=>{
    it('screenshort of home page',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(2000)
        cy.screenshot('orange')
    })
})