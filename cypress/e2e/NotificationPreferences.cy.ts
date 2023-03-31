describe('Test notification preferences', () => {
    beforeEach('Go on Website and go on connexion page before each test', () => {
        cy.visit('https://workee.brangers.eu');
        cy.contains('Connexion').click();
    });

    it('Change Notification preferences', () => {
        cy.get('#email').type('workee@gmail.com');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.get('[type="button"]').eq(1).click({ force: true });
        cy.contains('Paramètres').click();
        cy.wait(2000);
        cy.get('body').click(700, 0);
        cy.wait(1000);
        cy.get('[type="checkbox"]').eq(0).click({ force: true });
        cy.wait(1000);
        cy.get('[type="checkbox"]').eq(0).click({ force: true });
        cy.get('[type="checkbox"]').eq(1).click({ force: true });
        cy.wait(1000);
        cy.get('[type="checkbox"]').eq(1).click({ force: true });
    });
});