const { Input } = require("@angular/core")

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
    it.only('Test the calendar date picker by invoke function',()=>{
            
        cy.visit('http://localhost:4200/')
        cy.viewport(1920, 1080)

        cy.get('a.ng-tns-c7-4 > .menu-title').click()
        cy.get('.ng-tns-c7-6 > .menu-title').click()


        cy.get(':nth-child(1) > nb-card > nb-card-body > .size-medium').click()
        cy.get('nb-base-calendar.medium > nb-card > nb-card-body').contains('24').click()
        cy.get(':nth-child(1) > nb-card > nb-card-body > .size-medium').should('have.value','Apr 24, 2023')
        
        cy.get('.row > :nth-child(2)').find('input').then(input =>{
            cy.wrap(input).click()
            cy.get('nb-base-calendar.medium > nb-card > nb-card-body').contains('21').click()
            cy.wrap(input).invoke('prop','value').should('contain','Apr 21, 2023')
        })


    })

})