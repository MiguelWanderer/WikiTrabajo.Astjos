import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Infocontent from './components/Infocontent'
import InicioAstJos from './components/01_inicio_AstJos'
import InstalacionAstJos from './components/02_instalacion_AstJos'
import ActiveDirectoryAstJos from './components/03_active_directory_AstJos'
import ClienteDominioAstJos from './components/04_cliente_dominio_AstJos'
import ServiciosRedAstJos from './components/05_servicios_red_AstJos'
import GpoAstJos from './components/06_gpo_AstJos'
import PromptsAstJos from './components/07_prompts_AstJos'

const sections = [
  { id: 'inicio', label: 'Inicio', component: InicioAstJos },
  { id: 'instalacion', label: 'Instalación', component: InstalacionAstJos },
  { id: 'active-directory', label: 'Active Directory', component: ActiveDirectoryAstJos },
  { id: 'cliente-dominio', label: 'Cliente de Dominio', component: ClienteDominioAstJos },
  { id: 'servicios-red', label: 'Servicios de Red', component: ServiciosRedAstJos },
  { id: 'gpo', label: 'GPO', component: GpoAstJos },
  { id: 'prompts', label: 'Bitacora de Prompts', component: PromptsAstJos },
]

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const ActiveComponent = sections.find((section) => section.id === activeSection)?.component || InicioAstJos

  return (
    <div className="wiki-layout">
      <Navbar sections={sections} activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="wiki-body">
        <main className="wiki-content">
          <ActiveComponent />
        </main>
        <Infocontent />
      </div>
    </div>
  )
}

export default App