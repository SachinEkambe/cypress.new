

describe('Checking GUI elements on webpage',()=>{

   /* it("Checking radio buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //salect the radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

    })*/


    it("Checking check box",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of checkbox 
        cy.get("input#monday").should('be.visible')


        //selecting single checkbox
        cy.get("input#monday").check().should('be.checked')


        //unselect the checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        //select all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select the 1st checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
})