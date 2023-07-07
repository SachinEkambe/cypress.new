class login{
    setUname(username){
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
    }

    setPassword(password)
    {
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }
}
export default login;