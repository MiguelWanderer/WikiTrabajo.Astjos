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
          <li>Definir los equipos que formarán el dominio.</li>
          <li>Asignar nombres de host y direcciones IP estáticas.</li>
          <li>Configurar DNS y un rango de direcciones para DHCP.</li>
          <li>Instalar los roles de servidor necesarios.</li>
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
