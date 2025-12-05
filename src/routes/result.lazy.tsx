import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useGameStore } from '../store/gameStore'
import { profiles } from '../data/steps'
import ChatBot from '../components/ChatBot'
import Navbar from '../components/Navbar'

export const Route = createLazyFileRoute('/result')({
  component: Result,
})

function Result() {
  const navigate = useNavigate()
  const { scores, reset, getProfile } = useGameStore()

  // Récupération du profil gagnant
  const profileId = getProfile()
  const profile = profiles.find((p) => p.id === profileId) || profiles[0] || {
    emoji: "❓", 
    title: "Profil Inconnu", 
    description: "Impossible de déterminer ton profil...", 
    tips: []
  }

  const handleRestart = () => {
    reset()
    navigate({ to: '/' })
  }

  // Calcul pour les barres de progression (éviter la division par 0)
  const maxScore = Math.max(scores.dep, scores.eco, scores.nird, 1)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      
      {/* 🧭 NAVIGATION */}
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 fade-in animate-in slide-in-from-bottom-4 duration-700">
          
          {/* EN-TÊTE DU PROFIL */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce select-none">{profile.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {profile.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {profile.description}
            </p>
          </div>

          {/* SECTION SCORES */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100 shadow-inner">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              📊 Tes scores
            </h2>
            <div className="space-y-5">
              
              {/* Score Dépendance */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">🔗 Dépendance Big Tech</span>
                  <span className="font-bold text-red-600">{scores.dep}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 border border-gray-200 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(5, Math.min(100, (scores.dep / maxScore) * 100))}%` }}
                  />
                </div>
              </div>

              {/* Score Écologie */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">🌱 Écologie & Sobriété</span>
                  <span className="font-bold text-green-600">{scores.eco}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 border border-gray-200 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(5, Math.min(100, (scores.eco / maxScore) * 100))}%` }}
                  />
                </div>
              </div>

              {/* Score NIRD */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">💪 Autonomie NIRD</span>
                  <span className="font-bold text-purple-600">{scores.nird}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 border border-gray-200 overflow-hidden">
                  <div
                    className="bg-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(5, Math.min(100, (scores.nird / maxScore) * 100))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION CONSEILS */}
          {profile.tips && profile.tips.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                💡 Nos conseils pour progresser
              </h2>
              <div className="space-y-3">
                {profile.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nird-blue text-white flex items-center justify-center text-sm font-bold shadow-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION ACTIONS (Boutons) */}
          <div className="space-y-4">
            
            {/* 🚪 BOUTON 1 : VERS LE PORTAIL */}
            <button
              onClick={() => navigate({ to: '/portal' })}
              className="w-full bg-white border-2 border-nird-purple text-nird-purple px-6 py-4 rounded-xl text-lg font-bold hover:bg-nird-purple hover:text-white hover:shadow-lg transition-all transform hover:-translate-y-1 group"
            >
              🚪 Passer à l'action <span className="text-sm font-normal opacity-80 group-hover:text-white">(Portail d'Intention)</span>
            </button>

            {/* 🔄 BOUTON 2 : REJOUER */}
            <button
              onClick={handleRestart}
              className="w-full bg-gradient-to-r from-nird-blue to-nird-purple text-white px-6 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all hover:scale-[1.01] active:scale-95"
            >
              🔄 Rejouer l'aventure
            </button>

            {/* LIEN EXTERNE */}
            <div className="text-center mt-6">
              <a
                href="https://nird.forge.apps.education.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-500 hover:text-nird-blue text-sm underline decoration-1 underline-offset-4 transition-colors"
              >
                📚 Découvrir la démarche NIRD officielle
              </a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
            <p>Projet open source · Licence MIT · Nuit de l'Info 2025</p>
          </div>
        </div>
      </div>
      
      {/* 🤖 LE CHATBOT EST LÀ */}
      <ChatBot />
    </div>
  )
}