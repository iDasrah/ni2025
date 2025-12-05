import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from './Navbar'   // Import depuis le même dossier
import ChatBot from './ChatBot' // Import depuis le même dossier

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
      
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full opacity-70 mix-blend-multiply"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skyGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#e9d5ff" />
              </linearGradient>
              <linearGradient id="castleGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#5b21b6" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#skyGrad)" />

            <g transform="translate(0,120)" fill="url(#castleGrad)">
              <rect x="0" y="380" width="1600" height="520" />
              <rect x="180" y="60" width="220" height="320" rx="6" />
              <rect x="1200" y="60" width="220" height="320" rx="6" />
              <rect x="690" y="340" width="220" height="240" fill="#4c1d95" rx="8" />
              <rect x="740" y="420" width="120" height="160" fill="#3b0764" rx="6" />

              <g fill="#7c3aed">
                <rect x="180" y="40" width="40" height="40" />
                <rect x="270" y="40" width="40" height="40" />
                <rect x="360" y="40" width="40" height="40" />
                <rect x="1200" y="40" width="40" height="40" />
                <rect x="1290" y="40" width="40" height="40" />
                <rect x="1380" y="40" width="40" height="40" />
              </g>
            </g>
          </svg>
        </div>
        
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 fade-in relative z-10 animate-in slide-in-from-bottom-5 duration-700">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Le Village Numérique Résistant
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              David contre Goliath · Astérix contre l'Empire numérique
            </p>
            <div className="inline-block bg-gradient-to-r from-nird-blue to-nird-purple text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 shadow-lg">
              Nuit de l'Info 2025
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Choisis ta voie
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ton établissement scolaire fait face aux géants du numérique.
              Entre dépendance aux Big Tech et autonomie numérique, chaque décision compte !
            </p>
            <p className="text-gray-700 leading-relaxed">
              À travers 8 situations concrètes, découvre si ton école est prête à rejoindre
              le mouvement <strong className="text-nird-purple">NIRD</strong> (Numérique Inclusif, Responsable et Durable).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-red-50 rounded-lg p-4 text-center hover:bg-red-100 transition-colors">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800 mb-1">Dépendance</h3>
              <p className="text-sm text-gray-600">Aux Big Tech</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold text-gray-800 mb-1">Écologie</h3>
              <p className="text-sm text-gray-600">Sobriété numérique</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-semibold text-gray-800 mb-1">Autonomie</h3>
              <p className="text-sm text-gray-600">Solutions libres</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <a
              href="/game"
              className="inline-block bg-gradient-to-r from-nird-blue to-nird-purple text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all hover:scale-105"
            >
             🚀 Commencer l'aventure
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Un projet open source · Licence MIT</p>
            <p className="mt-2">Démarche NIRD · Forge des Communs Numériques Éducatifs</p>
          </div>
        </div>
        <ChatBot />

      </div>
    </>
  )
}