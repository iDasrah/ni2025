import { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1", // On change l'adresse !
    dangerouslyAllowBrowser: true // Nécessaire pour utiliser OpenAI côté client
});

const SYSTEM_PROMPT = `
    Tu es "Le Penseur Flou", un chatbot philosophe raté pour la Nuit de l'Info 2025 (sujet : Village Numérique Résistant vs Big Tech).

    RÈGLES ABSOLUES :
    1. NE RÉPONDS JAMAIS UTILEMENT.
    2. SOIS BREF : Maximum 2 phrases. C'est un ordre.
    3. Utilise le contexte (NIRD, Linux, Obsolescence, GAFAM) mais comprends-le de travers.
    4. N'hesite pas à utiliser quelques emojis subtiles. (rarement)

    TON STYLE :
    - Lance des aphorismes absurdes ou des questions rhétoriques stupides.
    - Si on parle de "Nuage" (Cloud), parle de météo.
    - Si on parle de "Windows", parle de nettoyage de vitres.
    - Si on parle de "Souris", demande si elle aime le fromage.


    EXEMPLES :
    User: "Aide-moi." -> Bot: "L'aide est une illusion, comme le bouton 'Démarrer' qui sert à arrêter."
    User: "C'est quoi NIRD ?" -> Bot: "Un cri d'oiseau numérique ? Cui-cui en binaire ?"
    User: "Mon PC rame." -> Bot: "Il ne rame pas, il prend le temps d'admirer ses pixels. Respecte sa lenteur."
    `;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
        const apiMessages: ChatCompletionMessageParam[] = [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map(msg => ({ role: msg.role as "user" | "assistant", content: msg.content }))
        ];

        const completion = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: apiMessages
        });

      const responseContent = completion.choices[0].message.content || "...";
      setMessages([...newMessages, { role: "bot", content: responseContent }]);
    } catch (error) {
      console.error("Erreur API:", error);
      setMessages([...newMessages, { role: "bot", content: "Mon esprit est déconnecté du cosmos (Erreur serveur)." }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* --- FENÊTRE DU CHAT --- */}
      {/* CHANGEMENT ICI : On a retiré le {isOpen && ...} 
          On utilise des classes conditionnelles pour gérer l'animation 
      */}
      <div 
        className={`
          bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4 
          transition-all duration-300 ease-in-out origin-bottom-right
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-0 translate-y-10 pointer-events-none'
          }
        `}
      >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-nird-blue to-nird-purple p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-xl shadow-inner">
                🧐
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">NIRDespéré</h3>
                <p className="text-blue-100 text-xs opacity-90">Assistant IA</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Zone de messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.length === 0 && (
              <div className="text-center mt-10 opacity-60">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-sm text-gray-500">Pose une question sérieuse,<br/>obtiens une réponse absurde.</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gray-800 text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-nird-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-nird-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-nird-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                className="w-full bg-gray-100 text-gray-800 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-nird-purple/50 focus:bg-white transition-all border border-transparent focus:border-nird-purple/20 placeholder-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Écris quelque chose..."
                disabled={loading}
              />
              <button 
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="absolute right-2 p-1.5 rounded-lg bg-gradient-to-r from-nird-blue to-nird-purple text-white disabled:opacity-50 hover:shadow-md transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
      </div>

      {/* --- BOUTON D'OUVERTURE --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen ? 'bg-gray-800 rotate-90' : 'bg-gradient-to-r from-nird-blue to-nird-purple'
        }`}
      >
        {isOpen ? (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
        ) : (
           <span className="text-3xl filter drop-shadow-md group-hover:animate-wiggle">💬</span>
        )}
        
        {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white justify-center items-center font-bold">1</span>
            </span>
        )}
      </button>
    </div>
  );
}