describe('Test profile', () => {
    beforeEach('Go on Website and go on connexion page before each test', () => {
        cy.visit('https://workee.brangers.eu');
        cy.contains('Connexion').click();
    });

    it('I see my profile', () => {
        cy.get('#email').type('workee@gmail.com');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.get('[type="button"]').eq(2).click({ force: true });
        cy.contains('Profil').click();
        cy.wait(2000);
        cy.get('body').click(300, 300);
        cy.wait(1000);
        cy.contains('Profil utilisateur');
    });
});