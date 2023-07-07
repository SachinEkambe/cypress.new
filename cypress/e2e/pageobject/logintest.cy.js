import login2 from "../pageobject/login2";


describe('test cases',()=>{
    it('validate test cases using pageobject',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const lg=new login2();
        lg.setUname("Admin");
        lg.setPassword("admin123");
        lg.clickSubmit();
    })
})