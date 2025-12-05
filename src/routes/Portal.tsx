import { useNavigate, createFileRoute } from '@tanstack/react-router'
import { useState, FormEvent } from 'react'
import Navbar from './Navbar'

// --- 1. DÉFINITION DU COMPOSANT D'ABORD (Pour éviter l'erreur TS7022) ---

function Portal() {
  const navigate = useNavigate()
  
  // Types pour nos missions
  type MissionType = 'contact' | 'don' | 'benevole' | 'info'

  const [mission, setMission] = useState<MissionType>('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // États pour les données du formulaire
  const [name, setName] = useState("") 
  const [honeypot, setHoneypot] = useState("") // 🛡️ Champ anti-robot

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Si le champ invisible est rempli, c'est un robot -> on bloque
    if (honeypot) return 

    setIsSubmitting(true)

    // Simulation d'envoi sécurisé vers le QG
    setTimeout(() => {
      setIsSubmitting(false)
      
      // 🚀 Redirection vers l'Écho de Gratitude avec les infos
      navigate({ 
        to: '/Thanks', 
        search: { 
          name: name || 'Ami du Libre', 
          mission: mission              
        } 
      })
      
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      
      {/* 🧭 NAVIGATION */}
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* 🔮 En-tête du Portail */}
        <div className="text-center mb-10 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nird-blue to-nird-purple mb-4">
            Portail de contact
          </h1>
          <p className="text-gray-600 text-lg">
            Quelle trace souhaites-tu laisser dans le Village Numérique ?
          </p>
        </div>

        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row fade-in">
          
          {/* 🛣️ VOLET GAUCHE : SÉLECTION DE LA MISSION */}
          <div className="bg-stone-900 p-8 md:w-1/3 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-300">Choisis ta Quête</h3>
              <div className="space-y-3">
                <MissionButton 
                  active={mission === 'contact'} 
                  onClick={() => setMission('contact')} 
                  icon="📞" 
                  label="Laisser un avis" 
                />
                <MissionButton 
                  active={mission === 'don'} 
                  onClick={() => setMission('don')} 
                  icon="🎁" 
                  label="Faire un Don" 
                />
                <MissionButton 
                  active={mission === 'benevole'} 
                  onClick={() => setMission('benevole')} 
                  icon="🛡️" 
                  label="Rejoindre la Guilde" 
                />
                <MissionButton 
                  active={mission === 'info'} 
                  onClick={() => setMission('info')} 
                  icon="❓" 
                  label="Demande d'infos" 
                />
              </div>
            </div>
            
            <div className="mt-8 text-xs text-gray-400">
              🔒 Canal sécurisé & crypté<br/>
            </div>
          </div>

          {/* 📝 VOLET DROIT : FORMULAIRE DYNAMIQUE */}
          <div className="p-8 md:w-2/3 bg-white relative">
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                {mission === 'contact' && "📞 Formulaire de Contact"}
                {mission === 'don' && "🎁 Soutenir le Village"}
                {mission === 'benevole' && "🛡️ Enrôlement Bénévole"}
                {mission === 'info' && "❓ Pour plus d'Informations"}
              </h2>

              {/* CHAMPS COMMUNS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ton nom..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-nird-purple outline-none transition-all focus:bg-white"
                  />
                </div>
                <InputGroup label="Email" type="email" placeholder="contact@exemple.com" required />
              </div>

              {/* 🔄 CHAMPS DYNAMIQUES */}
              
              {/* CAS : DONATION */}
              {mission === 'don' && (
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Montant de la contribution</label>
                  <div className="flex gap-2">
                    {['10€', '20€', '50€', 'Libre'].map((amount) => (
                      <button type="button" key={amount} className="flex-1 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-100 focus:bg-yellow-200 transition-colors text-sm font-bold text-yellow-800">
                        {amount}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="mensuel" className="rounded text-nird-purple focus:ring-nird-purple" />
                    <label htmlFor="mensuel" className="text-sm text-gray-600">Mensualiser les dons (Abonnement NIRD)</label>
                  </div>
                </div>
              )}

              {/* CAS : BÉNÉVOLE */}
              {mission === 'benevole' && (
                <div className="space-y-4">
                   <InputGroup label="Ta classe / Ton rôle" type="text" placeholder="Ex: Terminale, Prof de Techno..." />
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tes compétences spéciales</label>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-nird-purple outline-none">
                      <option>🛠️ Réparation Matériel</option>
                      <option>🐧 Installation Linux</option>
                      <option>📢 Communication</option>
                      <option>🎨 Graphisme</option>
                      <option>☕ Faire du café (Vital)</option>
                    </select>
                   </div>
                </div>
              )}

              {/* CAS : MESSAGE (Contact & Info) */}
              {(mission === 'contact' || mission === 'info' || mission === 'benevole') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {mission === 'benevole' ? "Pourquoi nous rejoindre ?" : "Ton Message"}
                  </label>
                  <textarea 
                    rows={4} 
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-nird-purple outline-none transition-all"
                    placeholder="Écris ton message ici..."
                    required
                  ></textarea>
                </div>
              )}

              {/* 🛡️ HONEYPOT (Invisible) */}
              <input 
                type="text" 
                className="hidden" 
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
              />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-nird-blue to-nird-purple text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-wait"
              >
                {isSubmitting ? 'Transmission en cours...' : '🚀 Envoyer la Requête'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- 2. DÉFINITION DE LA ROUTE EN DERNIER ---

export const Route = createFileRoute('/Portal')({
  component: Portal,
})

// --- SOUS-COMPOSANTS ---

function MissionButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: string, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
        active 
          ? 'bg-gradient-to-r from-nird-blue to-nird-purple text-white shadow-md border-l-4 border-white' 
          : 'hover:bg-gray-800 text-gray-300'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}

function InputGroup({ label, type, placeholder, required = false }: { label: string, type: string, placeholder: string, required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input 
        type={type} 
        required={required}
        placeholder={placeholder}
        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-nird-purple outline-none transition-all focus:bg-white"
      />
    </div>
  )
}