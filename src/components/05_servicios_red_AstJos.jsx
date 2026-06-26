export default function ServiciosRedAstJos() {
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
    </article>
  )
}
