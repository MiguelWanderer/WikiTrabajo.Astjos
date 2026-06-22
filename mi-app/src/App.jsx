import './App.css'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Infocontent from './components/Infocontent'

function App() {
  return (
    <div className="wiki-layout">
      <Navbar />
      <div className="wiki-body">
        <Maincontent />
        <Infocontent />
      </div>
    </div>
  )
}

export default App