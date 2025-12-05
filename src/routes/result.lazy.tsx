import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useGameStore } from '../store/gameStore'
import { profiles } from '../data/steps'
import ChatBot from './ChatBot'

export const Route = createLazyFileRoute('/result')({
  component: Result,
})

function Result() {
  const navigate = useNavigate()
  const { scores, reset, getProfile } = useGameStore()

  const profileId = getProfile()
  const profile = profiles.find((p) => p.id === profileId) || profiles[1]

  const handleRestart = () => {
    reset()
    navigate({ to: '/' })
  }

  const maxScore = Math.max(scores.dep, scores.eco, scores.nird)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 fade-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{profile.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {profile.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {profile.description}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            📊 Tes scores
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-gray-700">
                  🔗 Dépendance Big Tech
                </span>
                <span className="font-bold text-red-600">{scores.dep}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.max(0, Math.min(100, (scores.dep / maxScore) * 100))}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-gray-700">
                  🌱 Écologie & Sobriété
                </span>
                <span className="font-bold text-green-600">{scores.eco}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.max(0, Math.min(100, (scores.eco / maxScore) * 100))}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-gray-700">
                  💪 Autonomie NIRD
                </span>
                <span className="font-bold text-purple-600">{scores.nird}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-purple-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.max(0, Math.min(100, (scores.nird / maxScore) * 100))}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            💡 Nos conseils pour progresser
          </h2>
          <div className="space-y-3">
            {profile.tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nird-blue text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleRestart}
            className="w-full bg-gradient-to-r from-nird-blue to-nird-purple text-white px-6 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            🔄 Rejouer
          </button>

          <div className="text-center">
            <a
              href="https://forge.apps.education.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-nird-purple hover:text-nird-blue font-semibold underline"
            >
              📚 En savoir plus sur la démarche NIRD
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Projet open source · Licence MIT · Nuit de l'Info 2025</p>
          <p className="mt-2">
            Numérique Inclusif, Responsable et Durable
          </p>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}
