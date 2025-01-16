import LoginPage from '../support/pageObjects/LoginPage';

describe('Pruebas de inicio de sesión en PsicoAlianza', () => {
  it('Debería iniciar sesión con credenciales válidas', () => {
    const username = '14251103';
    const password = '123456789$$';

    LoginPage.visit();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.submit();

    cy.url().should('not.eq', 'https://v2.psicoalianza.com/'); // Verifica que la URL cambia
    cy.contains('Bienvenido').should('be.visible'); // Verifica un mensaje visible
  });
});
