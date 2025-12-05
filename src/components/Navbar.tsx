import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-nird-blue to-nird-purple rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:rotate-12 transition-transform duration-300">
              N
            </div>
            <span className="font-bold text-gray-800 text-xl tracking-tight group-hover:text-nird-purple transition-colors">
              NIRD <span className="text-nird-purple">2025</span>
            </span>
          </Link>

          {/* LIENS DE NAVIGATION (Desktop) */}
          <div className="flex items-center gap-1 md:gap-6">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/game">Aventure</NavLink>
            <NavLink to="/portal">Contact</NavLink>
          </div>

        </div>
      </div>
    </nav>
  )
}

// Petit composant utilitaire pour le style des liens
function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-gray-600 font-medium hover:text-nird-blue transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 [&.active]:text-nird-purple [&.active]:font-bold [&.active]:bg-purple-50"
    >
      {children}
    </Link>
  )
}