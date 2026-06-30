import { useState } from 'react'

export default function ActiveDirectoryAstJos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: '/img_AstJos/PASO B/Trabajo Inacap.Instantanea1 Paso B.1.png', alt: 'Paso B.1', caption: 'Paso B.1' },
    { src: '/img_AstJos/PASO B/Trabajo Inacap.Instantanea1 Paso B.1.2.png', alt: 'Paso B.1.2', caption: 'Paso B.1.2' },
    { src: '/img_AstJos/PASO B/Trabajo Inacap.Instantanea1 Paso B.2.png', alt: 'Paso B.2', caption: 'Paso B.2' },
    { src: '/img_AstJos/PASO B/Trabajo Inacap.Instantanea1 Paso B.2.1.png', alt: 'Paso B.2.1', caption: 'Paso B.2.1' },
    { src: '/img_AstJos/PASO B/Trabajo Inacap.Instantanea1 Paso B.2.2.png', alt: 'Paso B.2.2', caption: 'Paso B.2.2' },
  ]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="doc-article">
      <h1>Active Directory</h1>
      <p>
        Active Directory es el componente central del entorno. Permite centralizar la
        identidad, las políticas y la administración de los equipos del dominio.
      </p>

      <section className="doc-section">
        <h2>Elementos clave de PASOS B</h2>
        <ol>
          <li>Dirigirnos a administrador del servidor luego a administrar para presionar en agregar roles y caracteristicas</li>
          <li>Marcar AD DS e instalar</li>
          <li>Promocionar el servidor a controlador de dominio esto en la bandera de notificacion.</li>
          <li>Agregar un nuevo bosque</li>
          <li>Dominio raiz inacap.local</li>
          <li>El DNS se instala automaticamente</li>
          <li>Reiniciar</li>
          <li>Iniciamos sesion  con INACAP\Administrador para los propósitos del laboratorio.</li>
        </ol>

        <div style={{ marginTop: '30px' }}>
          <h3>Referencia visual - Paso B</h3>
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
      </section>
    </article>
  )
}
