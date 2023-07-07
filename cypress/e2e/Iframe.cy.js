require('cypress-iframe');




describe('Handling Iframes',()=>{
    it('aproach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe=cy.get("#mce_0_ifr")
        //deging the iframe 
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
       iframe.clear().type("Welcome")

    })


    it('aproach2',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type("Welcome")


    })


   it('aproach3',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded("#mce_0_ifr");
        cy.iframe("#mce_0_ifr").clear().type("Welcome");

    })
})