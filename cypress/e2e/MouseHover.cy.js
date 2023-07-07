
require('@4tw/cypress-drag-drop')
describe('Mouse Hover',()=>{
    it ('Mouse operations',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible')
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('MouseEvent').click(); //trigger() is perform for action events on cypress
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible')
    })

    it('Right click event',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
       //cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu');
       cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy']")
        .should('be.visible');
        
    })

    it('Right click event',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
        let iframe=cy.get("#iframeResult")
        //deging the iframe 
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
       cy.iframe.contain("Double-click me").dblclick()
       .should('be.visible','Hello World')

    })

    it('drag and drop operation',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box4").drag("#box101",{force:true});
    })

    it.only('Scrolling of the webpage',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');
        cy.get(':nth-child(51) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(51) > :nth-child(1) > img').should('be.visible');
        cy.get('#footer').scrollIntoView({duration:2000})
    })
})