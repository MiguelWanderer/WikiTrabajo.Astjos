export default function TutorialStep({ numero, titulo, descripcion, nota }) {
  return (
    <section className="tutorial-step" style={{ marginBottom: '40px' }}>
      <h2>Paso {numero}: {titulo}</h2>
      <p>{descripcion}</p>
      
      {/* Si envías una nota o advertencia, se mostrará esta cajita */}
      {nota && (
        <div style={{ backgroundColor: '#fff3cd', padding: '10px', borderLeft: '4px solid #ffc107', marginTop: '10px' }}>
          <strong>Nota:</strong> {nota}
        </div>
      )}
      
      {/* Aquí luego puedes agregar un espacio para las capturas de pantalla */}
    </section>
  )
}