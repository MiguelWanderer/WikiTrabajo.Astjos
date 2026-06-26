export default function ServiciosRedAstJos() {
  return (
    <article className="doc-article">
      <h1>Servicios de red</h1>
      <p>
        La red del laboratorio necesita servicios básicos para que los equipos se
        comuniquen, resuelvan nombres y reciban configuración automática.
      </p>

      <section className="doc-section">
        <h2>DHCP (criterio 2.1.4)</h2>
        <ol>
          <li>
            Administrar → Agregar roles y características → marcar Servidor DHCP → instalar. 
            Al terminar,completar la configuración de DHCP desde la bandera de notificación.
          </li>
          <li>
            Herramientas → DHCP → expandir el servidor → clic derecho en IPv4 → Ámbito nuevo: rango
            192.168.10.50–100, máscara 255.255.255.0, servidor DNS 192.168.10.10 y dominio inacap.local.
            Finalmente activar el ámbito.
          </li>
        </ol>
      </section>
    </article>
  )
}
