import { LoginTask } from '../support/tasks/LoginTask';

describe('Pruebas usando Screenplay', () => {
  it('Debería iniciar sesión con éxito', () => {
    cy.visit('https://v2.psicoalianza.com/');

    LoginTask.perform('14251103', '123456789$$'); // Ejecutar tarea

    cy.url().should('include', '/dashboard'); // Verificar redirección
  });
});
