export default function InicioAstJos() {
  return (
    <article className="doc-article">
      <h1>Inicio de la Wiki AstJos</h1>
      <p>
        Esta wiki reúne Los conocimientos para señirnos a la Undiad 2 de el Curso de Sistemas Operativos. Cada sección esta pensanda para crear un Paso a paso de todos nuestros procesos para lograr la correcta Instalacion y funcionamiento de Windows Server.
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
