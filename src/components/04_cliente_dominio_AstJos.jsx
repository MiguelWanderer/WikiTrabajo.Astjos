export default function ClienteDominioAstJos() {
  return (
    <article className="doc-article">
      <h1>Cliente de dominio</h1>
      <p>
        Un cliente de dominio debe apuntar correctamente al servidor DNS y unirse al
        dominio para poder autenticarse con las credenciales centralizadas.
      </p>

      <section className="doc-section">
        <h2>Flujo habitual</h2>
        <ol>
          <li>Asignar IP estática y DNS del servidor.</li>
          <li>Ajustar el nombre del equipo.</li>
          <li>Unir el equipo al dominio.</li>
          <li>Verificar acceso con una cuenta válida.</li>
        </ol>
      </section>
    </article>
  )
}
