# Servicios de red

La red del laboratorio necesita servicios básicos para que los equipos se comuniquen, resuelvan nombres y reciban configuración automática.
En este apartado se configura DHCP, que permite asignar direcciones IP de forma automática a los equipos del laboratorio. El proceso se divide en dos pasos: primero se instala el rol en el servidor y luego se crea el ámbito con los parámetros de red que van a usar los clientes esto pese a aer uno de los pasos que nos dan mas herramientas para trabajar y realizar tareas para clientes, se realiza casi de forma automatica.

## DHCP 

### Paso 1: instalar el rol DHCP

Desde **Administrador del servidor**, entra a **Administrar** y selecciona **Agregar roles y características**. 
En el asistente, marca **Servidor DHCP** y continúa con la instalación que se realizara de forma automatica.
Al finalizar, completa la configuración que aparece desde la **bandera de notificación**.
### NOTA Evitar reiniciar o continuar con  el pasod dos antes de completar la configuracion final en bandera de notificacion.
Este paso deja el servicio listo para administrar direcciones IP dentro del laboratorio.

### Paso 2: crear y activar el ámbito

Abre **Herramientas para luego ir a DHCP**, expande el servidor y haz clic derecho sobre **IPv4** para crear un **Ámbito nuevo**.
### NOTA no preciones IPv6 ya que nuestra redlab solo tieen IPv4.Si lo haces cuando intentes conectar **ambas maquinas,no apareceran**.
Define el rango de direcciones entre **192.168.10.50 y 192.168.10.100**, con máscara **255.255.255.0**. Luego indica como servidor DNS **192.168.10.10** y como dominio **inacap.local**.
Cuando termines la configuración, activa el ámbito para que los clientes puedan comenzar a recibir direcciones de manera automática.

## Referencia visual

### Paso D.1

![Paso D.1 - Buscar Agregar roles y características](./img_AstJos/PASO%20D/12.1.png)

### Paso D.2

![Paso D.2 - Marcar Servidor DHCP](./img_AstJos/PASO%20D/12.2.png)

### Paso D.3

![Paso D.3 - Completar la configuración de DHCP](./img_AstJos/PASO%20D/12.3.png)

### Paso D.4

![Paso D.4 - Continuar con el asistente de DHCP](./img_AstJos/PASO%20D/12.4.png)

### Paso D.5

![Paso D.5 - Definir el ámbito del servicio](./img_AstJos/PASO%20D/12.5.png)

### Paso D.6

![Paso D.6 - Activar el ámbito](./img_AstJos/PASO%20D/12.6.png)

### Paso D.7

![Paso D.7 - Verificación final](./img_AstJos/PASO%20D/Trabajo%20Inacap.Instantanea1%20Paso%20D%2013.png)
