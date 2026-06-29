import { useState } from 'react'

export default function ClienteDominioAstJos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.1.PNG', alt: 'Buscamos Agregar roles y características', caption: 'Buscamos Agregar roles y características' },
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.2.PNG', alt: 'Marcar Servidor DHCP,La instalacion se realiza de forma automatica', caption: 'Marcar Servidor DHCP,La instalacion se realiza de forma automatica' },
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.3.PNG', alt: 'Al terminar,completar la configuración de DHCP desde la bandera de notificación.', caption: 'Al terminar,completar la configuración de DHCP desde la bandera de notificación.' },
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.4.PNG', alt: '.', caption: '.' },
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.5.PNG', alt: '.', caption: '.' },
     { src: 'src/docs_AstJos/img_AstJos/PASO D/12.6.PNG', alt: '.', caption: '.' },
  ]
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="doc-article">
      <h1>Servicios de red</h1>
      <p>
        La red del laboratorio necesita servicios básicos para que los equipos se
        comuniquen, resuelvan nombres y reciban configuración automática.
      </p>

      <section className="doc-section">
        <h2>DHCP</h2>
        <ol>
          <li>
            Abrimos Administrar </li> 
            <li> Buscamos Agregar roles y características </li>
            <li>Marcar Servidor DHCP,La instalacion se realiza de forma automatica</li> 
            <li>Al terminar,completar la configuración de DHCP desde la bandera de notificación.</li>
            <li>Herramientas Buscamos DHCP luego  expandimos el servidor hacemos clic derecho en IPv4</li> 
            <li>Ámbito nuevo: rango 192.168.10.50–100, máscara 255.255.255.0, servidor DNS 192.168.10.10 y dominio inacap.local.</li>
            <li>Finalmente activar el ámbito.</li>
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

