describe('Test the localhost website',()=>{
    it('Verify the text of left bar',()=>{

        cy.visit('http://localhost:4200/')
        cy.viewport(1920, 1080)

        cy.get('a.ng-tns-c7-4').click()
        cy.get('.menu-item.ng-tns-c7-5 > .ng-tns-c7-5').click()
        cy.get('nb-layout-header.fixed > .fixed').click()
       
       
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body').then(firstform=>{
            const emailvar = firstform.find('[for="inputEmail1"]').text()
           
            const passvar=firstform.find('[for="inputPassword2"]')
            .text()
            
            expect(emailvar).equal('Email')
            expect(passvar).equal('Password')
            cy.log('SUCCESSFUL FUNCTION')
        })


    })
})