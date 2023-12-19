
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Makson');
    cy.get('#lastName').type('Rocha');
    cy.get('#email').type('test@test.com');
    cy.get('#phone').type('1234567890');
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('test');
    // cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
})