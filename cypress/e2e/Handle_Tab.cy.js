
describe('Handle tabs',()=>{
it('Aproach 1',()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")

    //remove the target attribute using invoke mothod
    cy.get(".example>a").invoke('removeAttr','target').click(); 

    //validate after click button this url is open in same window or not
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
    cy.wait(4000)
    //return back to parent window
    cy.go('back');
})
})


it('Aproach 2',()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")

    //remove the target attribute using invoke mothod
    cy.get(".example>a").then((e)=>{
        let url=e.prop('href');
        cy.visit(url);
    }); 

    //validate after click button this url is open in same window or not
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
    cy.wait(4000)
    //return back to parent window
    cy.go('back');
})