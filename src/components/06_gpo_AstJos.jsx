export default function GpoAstJos() {
  return (
    <article className="doc-article">
      <h1>Políticas de Grupo</h1>
      <p>
        Las GPO permiten aplicar configuraciones de forma centralizada a usuarios y
        equipos del dominio.
      </p>
      
      <section className="doc-section">
        <h2>Políticas de grupo (criterio 2.1.5)</h2>
        <ol>
          <li>
            Herramientas → Administración de directivas de grupo → sobre la OU Ventas, crear un GPO en este dominio
            y vincularlo aquí → nombre GPO-Ventas.
          </li>
          <li>
            Clic derecho en el GPO → Editar → Configuración de usuario → Directivas → Plantillas administrativas →
            Panel de control → habilitar “Prohibir el acceso al Panel de control y a la configuración de PC”.
          </li>
          <li>
            En el cliente, con una sesión del usuario de dominio, ejecutar gpupdate /force, cerrar y reiniciar sesión,
            y comprobar que el Panel de control quedó bloqueado. Omitir gpupdate /force + re-login es la causa habitual
            de que la política no surta efecto.
          </li>
        </ol>
      </section>
    </article>
  )
}
