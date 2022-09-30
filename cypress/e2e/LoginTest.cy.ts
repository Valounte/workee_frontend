describe('Test login', () => {
  beforeEach('Go on Website and go on connexion page before each test', () => {
    cy.visit('https://workee.brangers.eu');
    cy.contains('Connexion').click();
  });

  it('Login with invalid credentials', () => {
    cy.get('#email').type(randomEmail());
    cy.get('#password').type('CoucouMauvaisMotDepasse123!!!');
    cy.get('[type="submit"]').click();
    cy.contains('Password or email incorrect');
  });

  it('Login with invalid email', () => {
    cy.get('#email').type('jojogmail.com');
    cy.get('#password').type('CoucouMauvaisMotDepasse123!!!');
    cy.get('[type="submit"]').click();
    cy.contains('Enter a valid email');
  });

  it('Login with valid credentials', () => {
    cy.get('#email').type('workee@gmail.com');
    cy.get('#password').type('Password123!');
    cy.get('[type="submit"]').click();
    cy.contains('Successfull connected');
  });

  it('Login with valid credentials and disconnecte', () => {
    cy.get('#email').type('workee@gmail.com');
    cy.get('#password').type('Password123!');
    cy.get('[type="submit"]').click();
    cy.contains('Successfull connected');
    // cy.contains('Déconnection').click()
    // cy.contains('Successfull disconected')
  });

  function randomEmail() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text + '@gmail.com';
  }
});
