import { useState } from 'react'

export default function InstalacionAstJos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.1.png', alt: 'Paso A.1 - Descarga verificada', caption: 'Paso A.1 - Descarga verificada' },
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.2.png', alt: 'Paso A.2 - Instalación', caption: 'Paso A.2 - Instalación' },
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.3.png', alt: 'Paso A.3 - Configuración', caption: 'Paso A.3 - Configuración' },
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.3.5.png', alt: 'Paso A.3.5 - Red REDLAB', caption: 'Paso A.3.5 - Red REDLAB' },
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.4.png', alt: 'Paso A.4 - Instalación completada', caption: 'Paso A.4 - Instalación completada' },
    { src: '/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.5.png', alt: 'Paso A.5 - Configuración IP', caption: 'Paso A.5 - Configuración IP' },
  ]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="doc-article">
      <h1>Instalación y preparación</h1>
      <p>
        Este apartado recoge los pasos principales para preparar el laboratorio de
        forma ordenada y reproducible.
      </p>

      <section className="doc-section">
        <h2>Pasos desdes 0 a Final de Punto A</h2>
        <ol>
          <li>Definir los elementos que nesecitamos descargar</li>
          <li>Descargar los elementos necesarios.</li>
          <li>Verificamos que Nuestra Iso de Windows,Windows server 2025 esten correctamente descargadas</li>
          <li>Configurar el sistema operativo.Con un usuario especifico y con una contraseña segura y que repetiremos en el resto del proceso</li>
          <li>Configurar el sistema operativo.Con un Minnomo de 50 gb de espacio en disco, 4 gb minimos de ram, 2 cores de procesador</li>
          <li>Configurar el sistema operativo.Con una red propia para este Laboratorio, que sera llamadad REDLAB</li>
          <li>Instalamos el sistema Operativo de Windows server 2025 en la maquina virtual(Virtual vox)</li>
          <li>Importante la ISO debe ser la experiencia de escritorio en español para los propósitos del laboratorio.</li>
          <li>Esperar a que se complete la instalación.</li>
          <li>Configura el nombre del servidor local que sera "SRV-DC01" para poder identificarlo fácilmente.</li>
          <li>Reiniciamos</li>
          <li>Configuramos el sistema de la Ip fija en el adaptador: direccion 192.168.10.10 con mascara de 255.255.255.0 con puerta de enlace vacia y Dns preferido de : 127.0.0.1</li>
          <li>Finalmente comprobamos la configuracion de el Firewal que debe encontrarse activo</li>
          <li>Fin de los Pasos desde cero hacia el fin del Punto A</li>
        </ol>

        <div style={{ marginTop: '30px' }}>
          <h3>Referencia visual - Paso A</h3>
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
