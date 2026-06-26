# Políticas de Grupo

Las GPO permiten aplicar configuraciones de forma centralizada a usuarios y equipos del dominio.

## Políticas de grupo (criterio 2.1.5)

Herramientas → Administración de directivas de grupo → sobre la OU Ventas, crear un GPO en este dominio y vincularlo aquí → nombre GPO-Ventas.

Clic derecho en el GPO → Editar → Configuración de usuario → Directivas → Plantillas administrativas → Panel de control → habilitar “Prohibir el acceso al Panel de control y a la configuración de PC”.

En el cliente, con una sesión del usuario de dominio, ejecutar gpupdate /force, cerrar y reiniciar sesión, y comprobar que el Panel de control quedó bloqueado. Omitir gpupdate /force + re-login es la causa habitual de que la política no surta efecto.
