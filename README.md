## PRUEBA TÉCNICA
INGENIERO DE PRUEBAS Q.A GERARDO RAMOS VARGAS 

## Parte 1. 

En resumen, al verificar el cumplimiento de los mockups y detectar posibles fallos, inconsistencias en el diseño y vulnerabilidades de seguridad, estás cubriendo aspectos clave para asegurar que la aplicación sea funcional, coherente con los requerimientos y segura. Este proceso de pruebas garantizará que la experiencia del usuario sea fluida y que la aplicación esté protegida contra vulnerabilidades comunes de seguridad.

Se presenta un error "419 Page Expired", generalmente ocurre cuando se utiliza un sistema de protección CSRF (Cross-Site Request Forgery) en el formulario de inicio de sesión y la sesión ha expirado o no se está manejando correctamente el token CSRF.







## Parte 2. Sentencia SQL 

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

## Ejecutar las Pruebas
Modo Interactivo (Recomendado para Desarrollo)
Para ejecutar las pruebas en un navegador interactivo, usa el siguiente comando:

bash

## npx cypress open
Este comando abrirá la interfaz gráfica de Cypress, donde podrás elegir qué pruebas ejecutar. Una vez abierto, selecciona el archivo de prueba, por ejemplo, login.spec.js, para ejecutar las pruebas de inicio de sesión.

## Modo de Línea de Comandos
Si prefieres ejecutar las pruebas de forma automática sin la interfaz gráfica, usa el siguiente comando:

bash

## Informe de Resultados de las Pruebas Automatizadas - PsicoAlianza
## Resumen de las Pruebas Realizadas
Las pruebas automatizadas fueron diseñadas para verificar la funcionalidad del módulo de inicio de sesión en la plataforma PsicoAlianza. El objetivo principal fue asegurarse de que el flujo de inicio de sesión funcione correctamente bajo diferentes escenarios. Las pruebas cubrieron los siguientes aspectos:

## Inicio de sesión con credenciales válidas:

Se probó que el sistema permita a los usuarios iniciar sesión correctamente con un nombre de usuario y contraseña válidos.
Validación de mensajes de error:

Se verificó que se muestren mensajes de error apropiados cuando se ingresen credenciales incorrectas.
Redirección correcta después del inicio de sesión:

Se comprobó que el sistema redirige correctamente al usuario a la página principal después de un inicio de sesión exitoso.
Visibilidad de elementos importantes:

Se verificó que ciertos elementos clave de la página, como el mensaje de bienvenida, sean visibles después de un inicio de sesión exitoso.
Metodología de Pruebas
Se utilizaron dos patrones de diseño para la automatización de pruebas:

## Page Object Model (POM):

Se implementaron clases para modelar las páginas y sus interacciones. En este caso, se creó un LoginPage que encapsula todas las interacciones con la página de inicio de sesión (llenado de formularios, clic en botones, etc.).
Screenplay Pattern:

Aunque el uso de Page Object fue predominante, también se incorporaron algunos elementos del patrón Screenplay, como la definición de tareas específicas (inicio de sesión) y actores (usuario) para realizar esas tareas.
Resultados de las Pruebas
Prueba de Inicio de Sesión con Credenciales Válidas:

## Resultado: Aprobado.
La prueba validó con éxito que el sistema permite a los usuarios iniciar sesión con un nombre de usuario 14251103 y una contraseña 123456789$$. El sistema redirige correctamente a la página de inicio después de un inicio de sesión exitoso.
Prueba de Validación de Credenciales Incorrectas:

## Resultado: Aprobado.
La prueba validó que se muestran mensajes de error apropiados cuando se ingresan credenciales incorrectas. Se verificó que el sistema no permite acceder a la plataforma con credenciales erróneas.
Prueba de Redirección Correcta:

## Resultado: Aprobado.
Se verificó que, tras un inicio de sesión exitoso, el sistema redirige al usuario a la página https://v2.psicoalianza.com/inicio. Esto cumple con el requisito de redirección.
Visibilidad de Elementos Clave:

## Resultado: Aprobado.
Se verificó que elementos como el mensaje de bienvenida (e.g., "Bienvenido") son visibles después de iniciar sesión exitosamente.
Posibles Fallas o Áreas de Mejora
Tiempo de Respuesta en la Carga de la Página de Inicio:

En algunos casos, se observó un leve retraso en la carga de la página después del inicio de sesión exitoso. Es recomendable realizar optimizaciones en el rendimiento para mejorar la experiencia del usuario.
Manejo de Errores en Red:

Aunque las pruebas cubrieron escenarios de inicio de sesión con credenciales incorrectas, no se probaron escenarios donde la red es lenta o no está disponible. Incluir pruebas de conexión podría ser útil para mejorar la robustez del sistema.
Automatización de Pruebas en Diferentes Navegadores:

Las pruebas se realizaron solo en un navegador (Chrome). Sería recomendable ampliar las pruebas a otros navegadores populares como Firefox y Edge para garantizar la compatibilidad multiplataforma.
Evaluación Final
Cumplimiento de los Requisitos:

El módulo de inicio de sesión cumple con los requisitos planteados en los mockups. Los usuarios pueden iniciar sesión correctamente con credenciales válidas, y el sistema redirige a la página correcta tras un inicio de sesión exitoso.

Las funcionalidades básicas del inicio de sesión están implementadas correctamente, y no se identificaron fallas críticas que impidan el uso del módulo.

## Recomendaciones para Ajustes Adicionales:

Mejorar el rendimiento: Optimizar la carga de la página de inicio para mejorar los tiempos de respuesta.
Ampliar las pruebas de red: Asegurarse de que el sistema maneje correctamente los errores de red y los tiempos de espera.
Pruebas cross-browser: Ejecutar las pruebas en diferentes navegadores para garantizar la compatibilidad.
Pruebas de seguridad: Realizar pruebas de seguridad adicionales, como ataques de inyección SQL o XSS, para asegurar la integridad del sistema.
Conclusión
Las pruebas automatizadas realizadas en el módulo de inicio de sesión de PsicoAlianza han mostrado que el módulo cumple con la mayoría de los requisitos planteados. Sin embargo, se recomienda realizar algunas mejoras en el rendimiento, pruebas de red y pruebas multiplataforma para asegurar una experiencia de usuario óptima y robustez adicional en el sistema.

## npx cypress run
Esto ejecutará todas las pruebas en modo headless (sin interfaz gráfica) y generará un reporte en la consola.

![image](https://github.com/user-attachments/assets/6c206a77-0547-4d4b-b969-83c99b8c3165)
