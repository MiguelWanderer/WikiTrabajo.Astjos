export default function InstalacionAstJos() {
  return (
    <article className="doc-article">
      <h1>Instalación y preparación</h1>
      <p>
        Este apartado recoge los pasos principales para preparar el laboratorio de
        forma ordenada y reproducible.
      </p>

      <section className="doc-section">
        <h2>Pasos base</h2>
        <ol>
          <li>1.-Definir los elementos que nesecitamos descargar</li>
          <li>2.-Descargar los elementos necesarios.</li>
          <li>3.-Verificamos que Nuestra Iso de Windows,Windows server 2025 esten correctamente descargadas</li>
          <li>4.-Instalamos el sistema Operativo de Windows server 2025</li>
          <li>5.-Asignar nombres de host y direcciones IP estáticas.</li>
          <li>6.-Configurar DNS y un rango de direcciones para DHCP.</li>
          <li>7.-Instalar los roles de servidor necesarios.</li>
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
