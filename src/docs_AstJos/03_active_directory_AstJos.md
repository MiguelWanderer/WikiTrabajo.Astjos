# Active Directory

Este apartado documenta la instalación y promoción del servidor como controlador de dominio para el laboratorio.
Por que Active Directory es un servicio dentro de nuestro Windows server,es el nucleo par ala gestion de identidades, acceso y que incorpora mejoras en la seguridad,puede ser administrado de forma visual o por Power shell aunque en neustro casao veremos la version visual o canva y a la vez tiene soporte para controladores de dominio de solo lectura algo denominado RODC.
Es un servicio centraliador que almacenara toda nuestra ifnroamcion sobre usuarios,equipo,grupos y recursos, nos creara politicas y tiene una arquitectura jerarquica.
Sin mas que decir pasemos a los requisitos  previos.


## Requisitos Previos

- Haber completado la instalación base del servidor en el Paso A.
- Contar con acceso administrativo al sistema.
- Tener configurada la red del laboratorio.(Redlab)

## Paso B - Instalación y configuración de Active Directory

### B.1 - Agregar roles y características

Desde el Administrador del servidor, entra a **Administrar** y selecciona **Agregar roles y características**.

### B.2 - Instalar AD DS

Marca el rol **Active Directory Domain Services (AD DS)** y completa la instalación.

### B.3 - Promover el servidor a controlador de dominio

Desde la bandera de notificación, inicia el asistente para promover el servidor a controlador de dominio.

### B.4 - Crear un nuevo bosque

Selecciona la opción para crear un **nuevo bosque** y define el dominio raíz como **inacap.local**.

### B.5 - Verificar DNS

El servicio DNS se instala automáticamente como parte del proceso.

### B.6 - Reiniciar el servidor

Aplica los cambios y reinicia el sistema para finalizar la promoción del dominio.

### B.7 - Iniciar sesión con credenciales del dominio

Al volver a iniciar, accede con **INACAP\Administrador** para continuar con los siguientes pasos del laboratorio.

## Referencia Visual - Paso B

### Paso B.1

![Paso B.1](./img_AstJos/PASO%20B/Trabajo%20Inacap.Instantanea1%20Paso%20B.1.png)

### Paso B.1.2

![Paso B.1.2](./img_AstJos/PASO%20B/Trabajo%20Inacap.Instantanea1%20Paso%20B.1.2.png)

### Paso B.2

![Paso B.2](./img_AstJos/PASO%20B/Trabajo%20Inacap.Instantanea1%20Paso%20B.2.png)

### Paso B.2.1

![Paso B.2.1](./img_AstJos/PASO%20B/Trabajo%20Inacap.Instantanea1%20Paso%20B.2.1.png)

### Paso B.2.2

![Paso B.2.2](./img_AstJos/PASO%20B/Trabajo%20Inacap.Instantanea1%20Paso%20B.2.2.png)

## Cierre

Con esto queda preparado el controlador de dominio para continuar con la unión de clientes, servicios de red y políticas de grupo.
