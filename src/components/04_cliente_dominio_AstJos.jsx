import { useState } from 'react'

export default function ClienteDominioAstJos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: '/src/docs_AstJos/img_AstJos/PASO C/Trabajo Inacap.Instantanea1 Paso C.1.png', alt: 'Paso C.1', caption: 'Paso C.1' },
    { src: '/src/docs_AstJos/img_AstJos/PASO C/Trabajo Inacap.Instantanea1 Paso C.1.2.png', alt: 'Paso C.1.2', caption: 'Paso C.1.2' },
    { src: '/src/docs_AstJos/img_AstJos/PASO C/Trabajo Inacap.Instantanea1 Paso C.2.png', alt: 'Paso C.2', caption: 'Paso C.2' },
    { src: '/src/docs_AstJos/img_AstJos/PASO C/Trabajo Inacap.Instantanea1 Paso C.2.1.png', alt: 'Paso C.2.1', caption: 'Paso C.2.1' },
    { src: '/src/docs_AstJos/img_AstJos/PASO C/Trabajo Inacap.Instantanea1 Paso C.2.2.png', alt: 'Paso C.2.2', caption: 'Paso C.2.2' },
  ]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="doc-article">
      <h1>Cliente de dominio</h1>
      <p>
        En esta sección se documenta la creación de la OU, los usuarios y el grupo
        que se utilizarán dentro del dominio inacap.local.
      </p>

      <section className="doc-section">
        <h2>Paso C - Creación de OU, usuarios y grupo</h2>
        <ol>
        <li>Abrir Usuarios y equipos de Active Directory</li>
        <li>Desde Administrador del servidor entra a Herramientas y abre Usuarios y equipos de Active Directory.</li> 
        <li>Crear la OU Ventas llamada J-ventas</li>
        <li>Clic derecho sobre inacap.local → Nuevo → Unidad organizativa → nombre Ventas.</li>
        <li>Crear los usuarios</li>
        <li>Dentro de la OU Ventas, clic derecho → Nuevo → Usuario.</li>
        <li>Crear 2 usuarios; uno con tu código personal, por ejemplo ATSJOS.</li>
        <li>Definir la contraseña para cada cuenta.(Misma que hemos usado  para todo el proceso)</li>
        <li>Para el laboratorio, desmarcar el usuario debe cambiar la contraseña en el próximo inicio.</li>
        <li>C.4 - Crear el grupo G-Ventas</li>
        <li>Clic derecho sobre Ventas → Nuevo → Grupo → nombre G-Ventas.</li>
        <li>C.5 - Agregar usuarios al grupo</li>
        <li>En cada usuario, ir a la pestaña Miembro de → Agregar e incorporarlos al grupo G-Ventas.</li>
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
