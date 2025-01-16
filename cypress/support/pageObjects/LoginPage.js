class LoginPage {
    visit() {
      cy.visit('https://v2.psicoalianza.com/');
    }
  
    fillUsername(username) {
      cy.get('input[name="email"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new LoginPage();
  