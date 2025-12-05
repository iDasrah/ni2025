import { Link, createLazyFileRoute, useSearch } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createLazyFileRoute('/thanks')({
  component: Thanks,
})

function Thanks() {
  // 1. Récupération des infos de l'URL avec valeurs par défaut
  const search = useSearch({ from: '/thanks' }) as any
  const name = (search?.name as string) || 'Voyageur Inconnu'
  const mission = (search?.mission as 'contact' | 'don' | 'benevole' | 'info') || 'contact'
  
  // 2. Le Filtre Temporel ⏳ (Date Dynamique)
  const currentYear = new Date().getFullYear()

  // 3. Générateur de contenu selon la Mission 🎯
  const getContent = () => {
    switch (mission) {
      case 'don':
        return {
          emoji: "💎",
          title: `Un immense "GG", ${name} !`,
          text: `Ton "Don de Ressources" est une bénédiction pour notre cause 🙏. Il permettra de financer le reconditionnement de matériel scolaire obsolète.`,
          objective: `Grâce à toi, l'objectif "Zéro Déchet Numérique" de ${currentYear} est plus proche que jamais !`
        }
      case 'benevole':
        return {
          emoji: "🛡️",
          title: `Bienvenue dans la Guilde, ${name} !`,
          text: `Ton épée (et ton clavier) sont désormais au service du Village. Tes compétences vont renforcer nos défenses contre l'Empire Numérique.`,
          objective: `Ensemble, nous allons former 1000 élèves au Libre durant l'année ${currentYear}.`
        }
      case 'info':
      case 'contact':
      default:
        return {
          emoji: "📡",
          title: `Salutations, ${name} !`,
          text: `Ton message a bien été acheminé vers nos serveurs centraux. Nos "Agents de Support" l'analysent et te répondront sous peu.`,
          objective: `Ton intérêt pour la démarche NIRD en ${currentYear} prouve que la résistance grandit !`
        }
    }
  }

  const content = getContent()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      
      {/* 🧭 NAVIGATION */}
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 text-center fade-in border-t-8 border-nird-purple animate-in slide-in-from-bottom-5 duration-700">
          
          {/* Animation Emoji */}
          <div className="mb-6 animate-bounce text-7xl select-none">
            {content.emoji}
          </div>

          {/* Salutation Ciblée 👋 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-nird-blue to-nird-purple">
            {content.title}
          </h1>

          {/* Message de Mission */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            {content.text}
          </p>

          {/* Zone Objectif Annuel 🏆 */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100 transform hover:scale-[1.02] transition-transform">
            <h3 className="text-nird-blue font-bold mb-2 uppercase tracking-wide text-xs md:text-sm">
              📅 Impact {currentYear}
            </h3>
            <p className="text-gray-800 font-serif italic text-lg">
              "{content.objective}"
            </p>
          </div>

          {/* Invitation à suivre l'évolution 🚀 */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500">
              Reste connecté pour suivre nos exploits tout au long de l'année {currentYear} !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link 
                to="/"
                className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                🏠 Retour au Village
              </Link>
              <Link 
                to="/game"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-nird-blue to-nird-purple text-white rounded-xl font-bold hover:shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🎮 Relancer une simulation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}