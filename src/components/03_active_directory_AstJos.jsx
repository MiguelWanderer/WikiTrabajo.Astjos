export default function ActiveDirectoryAstJos() {
  return (
    <article className="doc-article">
      <h1>Active Directory</h1>
      <p>
        Active Directory es el componente central del entorno. Permite centralizar la
        identidad, las políticas y la administración de los equipos del dominio.
      </p>

      <section className="doc-section">
        <h2>Elementos clave de PASOS B</h2>
        <ul>
          <li>Dirigirnos a administrador del servidor luego a administrar para presionar en agregar roles y caracteristicas</li>
          <li>Marcar AD DS e instalar</li>
          <li>Promocionar el servidor a controlador de dominio esto en la bandera de notificacion.</li>
          <li>Agregar un nuevo bosque</li>
          <li>Dominio raiz inacap.local</li>
          <li>El DNS se instala automaticamente</li>
          <li>Reiniciar</li>
          <li>Iniciamos sesion  con INACAP\Administrador para los propósitos del laboratorio.</li>
        </ul>
      </section>
    </article>
  )
}
