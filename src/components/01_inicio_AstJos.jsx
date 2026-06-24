export default function InicioAstJos() {
  return (
    <article className="doc-article">
      <h1>Inicio de la Wiki AstJos</h1>
      <p>
        Esta wiki reúne la base de trabajo para la implantación y administración de
        los servicios de AstJos. Cada sección está pensada para crecer con notas,
        procedimientos y referencias rápidas.
      </p>

      <section className="doc-section">
        <h2>Objetivo</h2>
        <p>
          Servir como guía central para instalación, configuración y operación del
          entorno de laboratorio, con foco en Active Directory, cliente de dominio,
          servicios de red y políticas de grupo.
        </p>
      </section>

      <section className="doc-section">
        <h2>Estructura recomendada</h2>
        <ul>
          <li>Inicio: visión general del proyecto.</li>
          <li>Instalación: pasos base para preparar el entorno.</li>
          <li>Active Directory: conceptos y roles fundamentales.</li>
          <li>Cliente de dominio: proceso de integración.</li>
          <li>Servicios de red: DHCP, DNS y servicios compartidos.</li>
          <li>GPO: políticas y administración de usuarios.</li>
          <li>Prompts: plantillas útiles para tareas frecuentes.</li>
        </ul>
      </section>
    </article>
  )
}
