class login2
{

    textUname=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    textPass=":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    textSub="button[type='submit']";

    setUname(username){
    cy.get(this.textUname).type(username);
    }

    setPassword(password)
    {
        cy.get(this.textPass).type(password);
    }

    clickSubmit()
    {
        cy.get(this.textSub).click();
    }
}
export default login2;