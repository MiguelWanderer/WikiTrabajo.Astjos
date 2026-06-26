# Políticas de grupo

Las GPO permiten aplicar configuraciones de forma centralizada a usuarios y equipos del dominio. En esta sección se documenta la creación y aplicación de una directiva que limita el acceso al Panel de control en los equipos del laboratorio.

El procedimiento se divide en tres momentos: primero se crea y vincula la GPO en la OU correspondiente, luego se configura la restricción dentro del editor de directivas y finalmente se verifica el efecto desde el cliente con una sesión de dominio.

## Aplicación de políticas de grupo

### Paso 1: crear y vincular la GPO

Desde **Herramientas**, abre **Administración de directivas de grupo**. Luego ubica la OU **Ventas** y crea una nueva GPO en este dominio con la opción de vincularla allí. Asigna el nombre **GPO-Ventas**.

Este paso es importante porque deja la política asociada directamente a la unidad organizativa donde están los usuarios a los que se les aplicará la configuración.

### Paso 2: configurar la restricción

Haz clic derecho sobre la GPO creada y selecciona **Editar**. Dentro del editor, entra en **Configuración de usuario → Directivas → Plantillas administrativas → Panel de control** y habilita la opción **Prohibir el acceso al Panel de control y a la configuración de PC**.

Con esta configuración se bloquea el acceso a herramientas de administración local para los usuarios afectados por la directiva.

### Paso 3: comprobar la aplicación en el cliente

Inicia sesión en el cliente con un usuario de dominio, ejecuta `gpupdate /force`, cierra la sesión y vuelve a entrar.

Después de actualizar la directiva y reiniciar la sesión, verifica que el Panel de control quede bloqueado. Si se omite la actualización de la política o el nuevo inicio de sesión, lo normal es que el cambio no se aplique de inmediato.
