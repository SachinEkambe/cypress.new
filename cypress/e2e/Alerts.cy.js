

describe('Alerts',()=>{
    it('js alerts',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //alert window closed by automatically cypress it self
        cy.get("button[onClick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');

           

        })
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })
        //js confirmation alert
        it('js Confirm Alerts',()=>{
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    
            //alert window closed by automatically cypress it self
            cy.get("button[onClick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{
                expect(t).to.contains('I am a JS Confirm');
            })
            cy.on('window:confirm',()=>false)   //cypress will close alert window using cancel button
            cy.get("p#result").should('have.text','You clicked: Cancel')
            })


            it('js Prompt Alerts',()=>{
                cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
                cy.window().then((win)=>{
                    cy.stub(win,'prompt').returns('welcome')

                })
                //cypress will automatically handle window
              cy.get("button[onClick='jsPrompt()']").click();

              
              cy.get("#result").should('have.text','You entered: welcome')
                })


                //authentificated alert
                it.only('js Prompt Alerts',()=>{
                  /*  cy.visit("https://the-internet.herokuapp.com/basic_auth",{
                        auth:{
                            username: "admin",
                            password: "admin"
                        }
                    });
                    cy.get("div[class='example'] p").should('have.contain','Congratulations!')
                   */

                    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
                    cy.get("div[class='example'] p").should('have.contain','Congratulations!')
                    })
    })
