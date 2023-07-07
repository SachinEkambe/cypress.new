import 'cypress-file-upload'
describe('File-Upload',()=>{
    it("file uploads",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload')
        .attachFile("API.png");
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!');
    })

    it("file uploads rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload')
        .attachFile({filePath:'API.png', fileName:'myfile.png'});
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!');
    })

    it("file uploads using drag and drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("API.png",{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('API.png');

    })

    it("file uploads using drag and drop",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(['API.png', 'base.png'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contains.text','Files You Selected:')

    })

    it.only("file uploads using shadow",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
        cy.get('.demo-frame',{includeShadowDom:true}).attachFile('API.png').click()
        cy.wait(5000)
        cy.get('.demo-frame',{includeShadowDom:true}).contains('API.png')
    })

})