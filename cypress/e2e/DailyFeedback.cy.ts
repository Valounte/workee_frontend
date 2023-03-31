describe('Test Daily Feedback', () => {
    beforeEach('Go on Website and go on connexion page before each test', () => {
        cy.visit('https://workee.brangers.eu');
        cy.contains('Connexion').click();
    });

    it('Send daily feedback', () => {
        cy.get('#email').type('valentin.lyon@epitech.eu');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.contains('Avis').click();
        cy.wait(3000);
        cy.get('body').click(500, 0);
        cy.contains('Envoyer un avis').click();
        cy.get('#message').type('Je suis très content de travailler dans cette équipe de test');
        cy.get('#isAnonymous').click();
        cy.wait(2000);
        cy.get('[name="satisfactionDegree"][value="3"]').click({ force: true })
        cy.get('[type="submit"]').click();
        cy.wait(1000);
        cy.contains('Feedback envoyé avec succès');
    });

    it('I see daily feedback', () => {
        cy.get('#email').type('workee@gmail.com');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.contains('Avis').click();
        cy.wait(3000);
        cy.get('body').click(500, 0);
    });


});