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
