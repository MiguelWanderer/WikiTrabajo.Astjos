export default function PromptsAstJos() {
  return (
    <article className="doc-article">
      <h1>Bitácora de Prompts</h1>
      <p>
        Registro de todos los prompts utilizados para crear, desarrollar y mejorar esta Wiki.
      </p>

      <section className="doc-section">
        <h2>Sesión 2026-06-25</h2>
        
        <h3>Prompts Utilizados</h3>
        
        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>1. Verificación de componentes reutilizables</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Estamos usando TutorialSteps? Por lo ve veo en los nuevos Inicio instalacion no estamos usando nada de nada."
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Confirmó que TutorialStep no se estaba usando. Navbar SÍ activo.
          </p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>2. Integración de imágenes en documentación</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Necesito llevar aquí las imágenes del paso A para que guarden relación con lo descrito."
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Integradas 6 imágenes en 02_instalacion_Astjos.md con estructura organizada.
          </p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>3. Carrusel interactivo de imágenes</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Podrias hacer que sea un carrusel las imagenes."
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Carrusel con React useState, botones de navegación, indicadores de posición.
          </p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>4. Simplificación de UI</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Podrias hacer los botones solo flechas. No es necesario que tenga nomenclatura."
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Botones simplificados a solo iconos de flecha (← →).
          </p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>5. Replicación de componente</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Podrias replicar lo que realizaste en nuestro 02 de instalacion en nuestro 03 de active directory. Misma logica de ejecucion"
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Carrusel implementado en 03_active_directory_AstJos.jsx con 5 imágenes de PASO B.
          </p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '4px solid #007bff' }}>
          <strong>6. Cambio de nomenclatura</strong>
          <p style={{ margin: '10px 0 0 0', color: '#333' }}>
            "Quiero cambiar lo que dice Prompt Utiles. Por que esa categoría es creada para mantener una bitácora de los Prompts usados para crear esta Wiki."
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.85em', color: '#666' }}>
            Resultado: Label del navbar cambiado de "Prompts" a "Bitacora de Prompts".
          </p>
        </div>
      </section>

      <section className="doc-section">
        <h2>Archivos Modificados</h2>
        <ul>
          <li><strong>src/docs_AstJos/02_instalacion_Astjos.md</strong> - Añadidas imágenes integradas</li>
          <li><strong>src/components/02_instalacion_AstJos.jsx</strong> - Implementado carrusel interactivo</li>
          <li><strong>src/components/03_active_directory_AstJos.jsx</strong> - Replicado carrusel</li>
          <li><strong>src/App.jsx</strong> - Cambio de label en navbar</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2>Técnicas Implementadas</h2>
        <ul>
          <li>React hooks: useState para gestión de estado</li>
          <li>CSS inline para estilos personalizados</li>
          <li>Carrusel con navegación (anterior/siguiente)</li>
          <li>Indicadores interactivos (puntos de navegación)</li>
          <li>Efectos hover en botones</li>
          <li>Responsive design con flexbox</li>
        </ul>
      </section>
    </article>
  )
}
