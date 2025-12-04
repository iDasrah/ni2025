import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🏰 Le Village Numérique Résistant
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            David contre Goliath · Astérix contre l'Empire numérique
          </p>
          <div className="inline-block bg-gradient-to-r from-nird-blue to-nird-purple text-white px-4 py-2 rounded-full text-sm font-semibold mt-4">
            Nuit de l'Info 2025
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🎮 Choisis ta voie
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
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-800 mb-1">Dépendance</h3>
            <p className="text-sm text-gray-600">Aux Big Tech</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🌱</div>
            <h3 className="font-semibold text-gray-800 mb-1">Écologie</h3>
            <p className="text-sm text-gray-600">Sobriété numérique</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-semibold text-gray-800 mb-1">Autonomie</h3>
            <p className="text-sm text-gray-600">Solutions libres</p>
          </div>
        </div>

        <div className="text-center">
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
    </div>
  )
}
