describe('Test Notifications', () => {
    beforeEach('Go on Website and go on connexion page before each test', () => {
        cy.visit('https://workee.brangers.eu');
        cy.contains('Connexion').click();
    });

    it('Send notification', () => {
        cy.get('#email').type('workee@gmail.com');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.contains('Notifications').click();
        cy.wait(2000);
        cy.get('body').click(300, 0);
        cy.contains('Créer une notification').click();
        cy.wait(2000);
        cy.get('#users').click();
        cy.contains('Valentin').click();
        cy.get('body').click(300, 0);
        cy.get('#status').click();
        cy.contains('Normal').click();
        cy.get('#message').type('Test Cypress');
        cy.contains('Envoyer la notification').click();
        cy.contains('La notification à bien été envoyé !');
    });

    it('See notification', () => {
        cy.get('#email').type('valentin.lyon@epitech.eu');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.contains('Notifications').click();
        cy.wait(2000);
        cy.get('body').click(400, 0);
        cy.contains('Test Cypress');
    });

    it('Fail to send notification', () => {
        cy.get('#email').type('workee@gmail.com');
        cy.get('#password').type('Password123!');
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[type="button"]').first().click();
        cy.wait(1200);
        cy.contains('Notifications').click();
        cy.wait(2000);
        cy.get('body').click(300, 0);
        cy.contains('Créer une notification').click();
        cy.wait(2000);
        cy.contains('Envoyer la notification').click();
        cy.contains('Status Obligatoire');
        cy.contains('Message Obligatoire');
        cy.wait(2000);
        cy.get('#status').click();
        cy.contains('Normal').click();
        cy.get('#message').type('Test Cypress');
        cy.contains('Envoyer la notification').click();
        cy.contains('Vous devez ajouter au moins une personne à notifier !');
    });
});