

describe('mytest', () => {
  it('test1', () => {
    
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.title().should('eq','OrangeHRM')
cy.url().should('include',"orangehrmlive.com")
  })

  it('test2', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
    
      })
})