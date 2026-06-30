# Bitácora de Prompts

Registro de todos los prompts utilizados para crear, desarrollar y mejorar esta Wiki.

## Sesión 2026-06-25

### Prompts Utilizados

1. Verificación de componentes reutilizables

"Estamos usando TutorialSteps? Por lo ve veo en los nuevos Inicio instalacion no estamos usando nada de nada."

Resultado: Confirmó que TutorialStep no se estaba usando. Navbar sí activo.

2. Integración de imágenes en documentación

"Necesito llevar aquí las imágenes del paso A para que guarden relación con lo descrito."

Resultado: Integradas 6 imágenes en 02_instalacion_Astjos.md con estructura organizada.

3. Carrusel interactivo de imágenes

"Podrias hacer que sea un carrusel las imagenes."

Resultado: Carrusel con React useState, botones de navegación, indicadores de posición.

4. Simplificación de UI

"Podrias hacer los botones solo flechas. No es necesario que tenga nomenclatura."

Resultado: Botones simplificados a solo iconos de flecha (← →).

5. Replicación de componente

"Podrias replicar lo que realizaste en nuestro 02 de instalacion en nuestro 03 de active directory. Misma logica de ejecucion"

Resultado: Carrusel implementado en 03_active_directory_AstJos.jsx con 5 imágenes de PASO B.

6. Cambio de nomenclatura

"Quiero cambiar lo que dice Prompt Utiles. Por que esa categoría es creada para mantener una bitácora de los Prompts usados para crear esta Wiki."

Resultado: Label del navbar cambiado de "Prompts" a "Bitácora de Prompts".

## Sesión 2026-06-29

### Prompts Utilizados

1. Primeras imágenes en cliente de dominio

"Estoy colocando las primeras imagenes en el modulo de cliente de dominio"

2. Comparación con el componente 03

"Por que no funcionaba la forma anterior que funciono el jsx 03?"

3. Simplificación de pasos en carpeta C

"Ahora para simplificacion en la carpeta C escribimos solo numeros para los siguientes pasos ordenalos de forma ascendente"

4. Ampliación de capturas en carpeta C

"Eso lo hize solo, nesecitos que pilles de la 12 hasta la 15.5"

5. Captions con pasos

"Usa de captions nuestros pasos"

6. Integración completa de imágenes en GPO

"Siguiendo la misma estrutura que tenemos en gpo puedes colocar todas las imagenes que tenemos en la carpeta gpo"

7. Registro de la sesión en la bitácora

"Me puedes mandar todos los promts que usamos para esta sesion a la bitacora 07 de prompts"

## Archivos Modificados

- `src/docs_AstJos/02_instalacion_Astjos.md` - Añadidas imágenes integradas
- `src/components/02_instalacion_AstJos.jsx` - Implementado carrusel interactivo
- `src/components/03_active_directory_AstJos.jsx` - Replicado carrusel
- `src/App.jsx` - Cambio de label en navbar

## Técnicas Implementadas

- React hooks: useState para gestión de estado
- CSS inline para estilos personalizados
- Carrusel con navegación anterior/siguiente
- Indicadores interactivos de posición
- Efectos hover en botones
- Responsive design con flexbox
