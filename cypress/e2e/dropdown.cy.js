
describe("Handle the Dropdowns",()=>{

    it.skip('Dropdown with Select',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('Italy')
        .should('have.value','Italy')
    })


    it.skip('Dropdown without Select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
    })


    it.skip('Auto suggest Dropdown',()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type('delhi')
        cy.get("h3.suggestion-title").contains('Delhi University').click()
        
    })


    it('Dynamict Dropdown',()=>{

        cy.visit("https://www.google.com/")

        cy.get("[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length', 12)
        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
       
        cy.get("div.wM6W7d>span").should('have.value', 'cypress automation tutorial')
    })
})