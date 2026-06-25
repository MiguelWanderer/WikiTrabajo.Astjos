export default function InstalacionAstJos() {
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
          <li>1.-Definir los elementos que nesecitamos descargar</li>
          <li>2.-Descargar los elementos necesarios.</li>
          <li>3.-Verificamos que Nuestra Iso de Windows,Windows server 2025 esten correctamente descargadas</li>
          <li>5.-Configurar el sistema operativo.Con un usuario especifico y con una contraseña segura y que repetiremos en el resto del proceso</li>
          <li>6.-Configurar el sistema operativo.Con un Minnomo de 50 gb de espacio en disco, 4 gb minimos de ram, 2 cores de procesador</li>
          <li>7.-Configurar el sistema operativo.Con una red propia para este Laboratorio, que sera llamadad REDLAB</li>
          <li>4.-Instalamos el sistema Operativo de Windows server 2025 en la maquina virtual(Virtual vox)</li>
          <li>Importante la ISO debe ser la experiencia de escritorio en español para los propósitos del laboratorio.</li>
          <li>8.-Esperar a que se complete la instalación.</li>
          <li>9.-Configura el nombre del servidor local que sera "SRV-DC01" para poder identificarlo fácilmente.</li>
          <li>10.-Reiniciamos</li>
          <li>11.-Configuramos el sistema de la Ip fija en el adaptador: direccion 192.168.10.10 con mascara de 255.255.255.0 con puerta de enlace vacia y Dns preferido de : 127.0.0.1</li>
          <li>12.-Finalmente comprobamos la configuracion de el Firewal que debe encontrarse activo</li>
          <li>13.-Fin de los Pasos desde cero hacia el fin del Punto A</li>
        </ol>

        <div style={{ marginTop: '30px' }}>
          <h3>Referencia visual - Paso A</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '15px' }}>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.1.png" alt="Paso A.1 - Descarga verificada" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.1 - Descarga verificada</figcaption>
            </figure>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.2.png" alt="Paso A.2 - Instalación" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.2 - Instalación</figcaption>
            </figure>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.3.png" alt="Paso A.3 - Configuración" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.3 - Configuración</figcaption>
            </figure>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.3.5.png" alt="Paso A.3.5 - Red REDLAB" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.3.5 - Red REDLAB</figcaption>
            </figure>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.4.png" alt="Paso A.4 - Instalación completada" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.4 - Instalación completada</figcaption>
            </figure>
            <figure>
              <img src="/src/docs_AstJos/img_AstJos/PASO A/Trabajo Inacap.Instantanea1 Paso A.5.png" alt="Paso A.5 - Configuración IP" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }} />
              <figcaption style={{ fontSize: '0.9em', marginTop: '8px', textAlign: 'center' }}>Paso A.5 - Configuración IP</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Recomendaciones</h2>
        <ul>
          <li>Documentar cada cambio en la wiki.</li>
          <li>Usar snapshots o instantáneas del laboratorio.</li>
          <li>Separar los equipos por rol para facilitar pruebas.</li>
        </ul>
      </section>
    </article>
  )
}
