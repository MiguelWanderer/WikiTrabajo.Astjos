export default function ServiciosRedAstJos() {
  return (
    <article className="doc-article">
      <h1>Servicios de red</h1>
      <p>
        La red del laboratorio necesita servicios básicos para que los equipos se
        comuniquen, resuelvan nombres y reciban configuración automática.
      </p>

      <section className="doc-section">
        <h2>Servicios recomendados</h2>
        <ul>
          <li>DHCP para distribución automática de IP.</li>
          <li>DNS para resolución interna de nombres.</li>
          <li>Compartición de archivos y recursos.</li>
          <li>Monitorización del tráfico y accesos.</li>
        </ul>
      </section>
    </article>
  )
}
