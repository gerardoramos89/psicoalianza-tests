

## Sentencia SQL 

![image](https://github.com/user-attachments/assets/4f628157-423f-45f2-8b5d-a3791afbdb4f)


SELECT 
    e.nombre,
    e.nit,
    e.telefono,
    c.idproducto,
    SUM(c.transaccion) AS suma_transacciones,
    v.fechavencimiento
FROM 
    Empresa e
JOIN 
    consumo c ON e.idempresa = c.idempresa
JOIN 
    vencimiento v ON e.idempresa = v.idempresa
WHERE 
    c.transaccion > 1
    AND v.fechavencimiento > CURDATE()
GROUP BY 
    e.idempresa, c.idproducto, v.fechavencimiento









# Proyecto de Pruebas Automatizadas - PsicoAlianza

Este proyecto implementa pruebas automatizadas para el módulo de inicio de sesión de la plataforma PsicoAlianza, utilizando Cypress con la metodología **Page Object Model**.

## Metodología Utilizada: PageObject y Screenplay
¿Qué es Page Object Model (POM)?
El Page Object Model (POM) es un patrón de diseño que promueve la separación de los detalles de implementación de la lógica de prueba. En este modelo, cada página de la aplicación (o componente) se representa mediante una clase que encapsula los elementos interactivos y las acciones que pueden realizarse sobre ellos. Las pruebas luego interactúan con estas clases en lugar de directamente con los elementos de la página.
## ¿Qué es Screenplay?
El patrón Screenplay es una extensión del patrón Page Object Model, pero en lugar de centrarse en las páginas y sus interacciones, se enfoca en los roles y las interacciones entre ellos. Los roles pueden ser "actor" (quien realiza una acción en la interfaz de usuario) y "tarea" (las acciones que se realizan en la interfaz de usuario). En Screenplay, un actor realiza tareas para interactuar con el sistema.

## Implementación con Screenplay
Aunque este proyecto usa principalmente Page Object, también podemos integrar el patrón Screenplay si necesitamos modelar roles más complejos. En un escenario Screenplay, los actores serían los usuarios que interactúan con la página (por ejemplo, un usuario que ingresa sus credenciales y hace clic en el botón de inicio de sesión). Las tareas serían las acciones que el actor debe realizar para completar la prueba.

## Requisitos
- Node.js (v16 o superior recomendado)
- npm o yarn

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/repositorio-pruebas.git
   cd repositorio-pruebas

Paso 2: Instalar las dependencias
Usa npm o yarn para instalar las dependencias necesarias para ejecutar las pruebas.

Con npm:
## npm install
Con yarn:
## yarn install
Paso 3: Configurar variables de entorno (opcional)
Si necesitas variables de entorno (por ejemplo, credenciales o configuraciones privadas), crea un archivo .env en la raíz del proyecto y agrega tus configuraciones personalizadas.

Ejemplo de archivo .env:

makefile

BASE_URL=https://v2.psicoalianza.com
USERNAME=14251103
PASSWORD=123456789$$
Paso 4: Configurar Cypress
Asegúrate de que Cypress esté configurado correctamente en tu proyecto. La configuración predeterminada se encuentra en el archivo cypress.config.js. Si necesitas cambiar la URL base o agregar más configuraciones, hazlo aquí.

Ejemplo de configuración en cypress.config.js:

javascript
Copiar
Editar
module.exports = {
  e2e: {
    baseUrl: 'https://v2.psicoalianza.com',
    // Otras configuraciones personalizadas
  },
};
Estructura del Proyecto
Este proyecto tiene la siguiente estructura de archivos:

![image](https://github.com/user-attachments/assets/766c845a-c080-4c7d-b000-2bfa43186f21)


LoginPage.js
Dentro de cypress/support/pageObjects/, se encuentra el archivo LoginPage.js que define el Page Object para el formulario de inicio de sesión.

Ejemplo de LoginPage.js:

javascript
Copiar
Editar
class LoginPage {
  visit() {
    cy.visit('/login');
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
Login Test
El archivo de prueba principal, login.spec.js, realiza las pruebas automatizadas para el inicio de sesión en PsicoAlianza.

Ejemplo de login.spec.js:

javascript
Copiar
Editar
import LoginPage from '../support/pageObjects/LoginPage';

describe('Pruebas de inicio de sesión en PsicoAlianza', () => {
  it('Debería iniciar sesión con credenciales válidas', () => {
    LoginPage.visit();
    LoginPage.fillUsername(Cypress.env('USERNAME'));
    LoginPage.fillPassword(Cypress.env('PASSWORD'));
    LoginPage.submit();

    cy.url().should('eq', 'https://v2.psicoalianza.com/inicio');
    cy.contains('Bienvenido').should('be.visible');
  });
});
## Ejecutar las Pruebas
Modo Interactivo (Recomendado para Desarrollo)
Para ejecutar las pruebas en un navegador interactivo, usa el siguiente comando:

bash

## npx cypress open
Este comando abrirá la interfaz gráfica de Cypress, donde podrás elegir qué pruebas ejecutar. Una vez abierto, selecciona el archivo de prueba, por ejemplo, login.spec.js, para ejecutar las pruebas de inicio de sesión.

## Modo de Línea de Comandos
Si prefieres ejecutar las pruebas de forma automática sin la interfaz gráfica, usa el siguiente comando:

bash

##  npx cypress run
Esto ejecutará todas las pruebas en modo headless (sin interfaz gráfica) y generará un reporte en la consola.

![image](https://github.com/user-attachments/assets/6c206a77-0547-4d4b-b969-83c99b8c3165)
