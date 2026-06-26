# Servicios de red

La red del laboratorio necesita servicios básicos para que los equipos se comuniquen, resuelvan nombres y reciban configuración automática.

En este apartado se configura DHCP, que permite asignar direcciones IP de forma automática a los equipos del laboratorio. El proceso se divide en dos pasos: primero se instala el rol en el servidor y luego se crea el ámbito con los parámetros de red que van a usar los clientes.

## DHCP (criterio 2.1.4)

### Paso 1: instalar el rol DHCP

Desde **Administrador del servidor**, entra a **Administrar** y selecciona **Agregar roles y características**. En el asistente, marca **Servidor DHCP** y continúa con la instalación.

Al finalizar, completa la configuración que aparece desde la **bandera de notificación**. Este paso deja el servicio listo para administrar direcciones IP dentro del laboratorio.

### Paso 2: crear y activar el ámbito

Abre **Herramientas → DHCP**, expande el servidor y haz clic derecho sobre **IPv4** para crear un **Ámbito nuevo**.

Define el rango de direcciones entre **192.168.10.50 y 192.168.10.100**, con máscara **255.255.255.0**. Luego indica como servidor DNS **192.168.10.10** y como dominio **inacap.local**.

Cuando termines la configuración, activa el ámbito para que los clientes puedan comenzar a recibir direcciones de manera automática.
