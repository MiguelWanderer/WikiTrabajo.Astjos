# Instalación y preparación

Este apartado recoge los pasos principales para preparar el laboratorio de forma ordenada y reproducible.

## Pasos desde 0 a Final de Punto A

### 1. Definir los elementos que necesitamos descargar

Antes de comenzar, verifica que tengas acceso a:
- ISO de Windows Server 2025
- VirtualBox o máquina virtual compatible

### 2. Descargar los elementos necesarios

Descarga todos los recursos requeridos para el laboratorio.

### 3. Verificar descarga de ISO

Verifica que tu ISO de Windows Server 2025 esté correctamente descargada y con checksum válido.

![Descarga verificada - Paso 1](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.1.png)

### 4. Instalar el Sistema Operativo

Instala Windows Server 2025 en la máquina virtual (VirtualBox).

**Importante:** La ISO debe ser la experiencia de escritorio en español para los propósitos del laboratorio.

![Instalación paso 1 - Paso 2](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.2.png)

### 5. Configuración del Sistema Operativo

Configura el sistema operativo con:
- **Usuario específico** con contraseña segura (la repetiremos en todo el proceso)
- **Espacio en disco:** Mínimo 50 GB
- **RAM:** Mínimo 4 GB
- **Procesador:** 2 cores

![Configuración del sistema - Paso 3](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.3.png)

### 6. Red privada para el Laboratorio

Configura una red propia para este laboratorio llamada **REDLAB**.

![Red REDLAB - Paso 3.5](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.3.5.png)

### 7. Esperar instalación

Espera a que se complete la instalación del sistema operativo.

![Instalación completada - Paso 4](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.4.png)

### 8. Configurar nombre del servidor

Configura el nombre del servidor local como **"SRV-DC01"** para identificarlo fácilmente.

### 9. Reiniciar el sistema

Reinicia el servidor después de la configuración inicial.

### 10. Configurar IP fija

Configura la dirección IP estática en el adaptador:
- **Dirección IP:** 192.168.10.10
- **Máscara de red:** 255.255.255.0
- **Puerta de enlace:** (vacía)
- **DNS preferido:** 127.0.0.1

![Configuración IP - Paso 5](./img_AstJos/PASO%20A/Trabajo%20Inacap.Instantanea1%20Paso%20A.5.png)

### 11. Verificar Firewall

Comprueba que el Firewall esté activo y correctamente configurado.

### 12. Fin del Punto A

¡Completaste exitosamente todos los pasos de la instalación base!

---

## Recomendaciones

- Documentar cada cambio en la wiki.
- Usar snapshots o instantáneas del laboratorio.
- Separar los equipos por rol para facilitar pruebas.
