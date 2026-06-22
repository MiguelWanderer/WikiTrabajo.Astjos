// src/components/MainContent.jsx
import TutorialStep from './TutorialStep'

export default function Maincontent() {
  return (
    <main className="wiki-content">
      <h1>Guía de Instalación: Windows Server 2025</h1>
      <p>Aprende a instalar y configurar el sistema operativo desde cero.</p>

      {/* Usas tu nuevo componente para cada paso */}
      <TutorialStep 
        numero="1" 
        titulo="Descargar la ISO" 
        descripcion="Dirígete al portal de evaluación de Microsoft y descarga la imagen ISO oficial de Windows Server 2025 de 64 bits."
      />

      <TutorialStep 
        numero="2" 
        titulo="Preparar el medio de instalación" 
        descripcion="Utiliza Rufus o balenaEtcher para crear un USB booteable con la imagen descargada."
        nota="Asegúrate de que el esquema de partición en Rufus esté configurado en GPT si tu servidor usa UEFI."
      />

      <TutorialStep 
        numero="3" 
        titulo="Arranque del Servidor" 
        descripcion="Inserta el USB, enciende el equipo y presiona F11 o F12 para seleccionar el menú de arranque."
      />
    </main>
  )
}