export default function ClienteDominioAstJos() {
  return (
    <article className="doc-article">
      <h1>Cliente de dominio</h1>
      <p>
        En esta sección se documenta la creación de la OU, los usuarios y el grupo
        que se utilizarán dentro del dominio inacap.local.
      </p>

      <section className="doc-section">
        <h2>Paso C - Creación de OU, usuarios y grupo</h2>

        <li>Abrir Usuarios y equipos de Active Directory</li>
        <li>Desde Administrador del servidor entra a Herramientas y abre Usuarios y equipos de Active Directory.</li> 
        <li>Crear la OU Ventas llamada J-ventas</li>
        <li>Clic derecho sobre inacap.local → Nuevo → Unidad organizativa → nombre Ventas.</li>
        <li>Crear los usuarios</li>
        <li>Dentro de la OU Ventas, clic derecho → Nuevo → Usuario.</li>
        <li>Crear 2 usuarios; uno con tu código personal, por ejemplo ATSJOS.</li>
        <li>Definir la contraseña para cada cuenta.(Misma que hemos usado  para todo el proceso)</li>
        <li>Para el laboratorio, desmarcar el usuario debe cambiar la contraseña en el próximo inicio.</li>
        <li>C.4 - Crear el grupo G-Ventas</li>
        <li>Clic derecho sobre Ventas → Nuevo → Grupo → nombre G-Ventas.</li>
        <li>C.5 - Agregar usuarios al grupo</li>
        <li>En cada usuario, ir a la pestaña Miembro de → Agregar e incorporarlos al grupo G-Ventas.</li>
      </section>
    </article>
  )
}
