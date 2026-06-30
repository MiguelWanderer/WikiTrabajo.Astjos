import { useState } from 'react'

export default function GpoAstJos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_1.png', alt: 'Paso 1', caption: 'Paso 1' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_2.png', alt: 'Paso 2', caption: 'Paso 2' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_3.png', alt: 'Paso 3', caption: 'Paso 3' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_4.png', alt: 'Paso 4', caption: 'Paso 4' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_5.png', alt: 'Paso 5', caption: 'Paso 5' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_6.png', alt: 'Paso 6', caption: 'Paso 6' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_7.png', alt: 'Paso 7', caption: 'Paso 7' },
      { src: '/img_AstJos/PASO E/Gpo/F_PASO_8,1 (1).png', alt: 'Paso 8,1', caption: 'Paso 8,1' },
      { src: '/img_AstJos/PASO E/Gpo/F_PASO_8,2 (2).png', alt: 'Paso 8,2', caption: 'Paso 8,2' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_9.png', alt: 'Paso 9', caption: 'Paso 9' },
      { src: '/img_AstJos/PASO E/Gpo/F_Paso_10.png', alt: 'Paso 10', caption: 'Paso 10' },
  ]
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  return (
    <article className="doc-article">
      <h1>Políticas de Grupo</h1>
      <p>
        Las GPO permiten aplicar configuraciones de forma centralizada a usuarios y
        equipos del dominio.
      </p>

      <section className="doc-section">
        <h2>Políticas de grupo</h2>
        <ol>
          <li>
            Herramientas → Administración de directivas de grupo → sobre la OU Ventas, crear un GPO en este dominio
            y vincularlo aquí → nombre GPO-Ventas.
          </li>
          <li>
            Clic derecho en el GPO → Editar → Configuración de usuario → Directivas → Plantillas administrativas →
            Panel de control → habilitar “Prohibir el acceso al Panel de control y a la configuración de PC”.
          </li>
          <li>
            En el cliente, con una sesión del usuario de dominio, ejecutar gpupdate /force, cerrar y reiniciar sesión,
            y comprobar que el Panel de control quedó bloqueado. Omitir gpupdate /force + re-login es la causa habitual
            de que la política no surta efecto.
          </li>
        </ol>
      </section>
       <div style={{ marginTop: '30px' }}>
          <h3>Referencia visual - Paso C</h3>
          <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '600px', width: '100%' }}>
              <figure style={{ margin: 0, textAlign: 'center' }}>
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt} 
                  style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} 
                />
                <figcaption style={{ fontSize: '0.9em', marginTop: '12px' }}>{images[currentImageIndex].caption}</figcaption>
              </figure>

              {/* Botones de navegación */}
              <button 
                onClick={goToPrevious}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '18px',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
              >
                ←
              </button>

              <button 
                onClick={goToNext}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '18px',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
              >
                →
              </button>
            </div>

            {/* Indicador de posición */}
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
              <p style={{ margin: '0 0 10px 0', color: '#666' }}>
                Imagen {currentImageIndex + 1} de {images.length}
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: currentImageIndex === index ? '#333' : '#ccc',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </article>
  )
}
