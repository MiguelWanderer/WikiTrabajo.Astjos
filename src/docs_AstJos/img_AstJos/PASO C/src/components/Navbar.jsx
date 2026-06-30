export default function Navbar({ sections, activeSection, onSelectSection }) {
  return (
    <nav className="wiki-navbar">
      <h2>Wiki Windows Server 2025</h2>
      <div className="wiki-nav-links">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`wiki-nav-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onSelectSection(section.id)}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}