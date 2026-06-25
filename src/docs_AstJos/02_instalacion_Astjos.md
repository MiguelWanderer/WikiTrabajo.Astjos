# Instalación y preparación

Este apartado recoge los pasos principales para preparar el laboratorio de forma ordenada y reproducible.

## Pasos desde 0 a Final de Punto A

### Paso A (1.0) - Descargar elementos necesarios

Antes de comenzar, verifica que tengas acceso a:
- ISO de Windows Server 2025
- VirtualBox o máquina virtual compatible

Descarga todos los recursos requeridos para el laboratorio.

![PASO A (1.0) - Descargar elementos](./img_AstJos/PASO%20A/PASO%20A%20(1.0).png)

### Paso A (1.1) - Verificar descarga de ISO

Verifica que tu ISO de Windows Server 2025 esté correctamente descargada y con checksum válido.

![PASO A (1.1) - Verificar ISO](./img_AstJos/PASO%20A/PASO%20A%20(1.1).png)

### Paso A (2) - Configuración del Sistema Operativo (Usuario y contraseña)

Configura el sistema operativo con:
- **Usuario específico** con contraseña segura (la repetiremos en todo el proceso)
- **Importante:** La ISO debe ser la experiencia de escritorio en español para los propósitos del laboratorio.

![PASO A (2) - Configuración Usuario](./img_AstJos/PASO%20A/PASO%20A%20(2).png)

### Paso A (4) - Configuración de Recursos

Configura los recursos de la máquina virtual:
- **Espacio en disco:** Mínimo 50 GB
- **RAM:** Mínimo 4 GB
- **Procesador:** 2 cores

![PASO A (4) - Configuración Recursos](./img_AstJos/PASO%20A/PASO%20A%20(4).png)

### Paso A (5) - Red privada para el Laboratorio

Configura una red propia para este laboratorio llamada **REDLAB**.

![PASO A (5) - Red REDLAB](./img_AstJos/PASO%20A/PASO%20A%20(5).png)

### Paso A (6) - Esperar instalación y reiniciar

Espera a que se complete la instalación del sistema operativo y reinicia el servidor.

![PASO A (6) - Instalación completada](./img_AstJos/PASO%20A/PASO%20A%20(6).png)

### Paso A (7) - Configurar nombre del servidor

Configura el nombre del servidor local como **"SRV-DC01"** para identificarlo fácilmente.

![PASO A (7) - Nombre del servidor](./img_AstJos/PASO%20A/PASO%20A%20(7).png)

### Paso A (8) - Configurar IP fija

Configura la dirección IP estática en el adaptador:
- **Dirección IP:** 192.168.10.10
- **Máscara de red:** 255.255.255.0
- **Puerta de enlace:** (vacía)
- **DNS preferido:** 127.0.0.1

![PASO A (8) - Configurar IP fija](./img_AstJos/PASO%20A/PASO%20A%20(8).png)

### Paso A (9) - Verificar Firewall

Comprueba que el Firewall esté activo y correctamente configurado.

![PASO A (9) - Verificar Firewall](./img_AstJos/PASO%20A/PASO%20A%20(9).png)

### Fin del Punto A

¡Completaste exitosamente todos los pasos de la instalación base!


