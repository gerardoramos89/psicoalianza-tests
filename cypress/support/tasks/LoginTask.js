export const LoginTask = {
    perform(username, password) {
      cy.get('input[name="email"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
    }
  };
  