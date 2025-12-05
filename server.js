    import 'dotenv/config';
    import express from 'express';
    import cors from 'cors';
    import OpenAI from 'openai';

    const app = express();
    app.use(cors());
    app.use(express.json());

    // CONFIGURATION GROQ (C'est la magie ici)
    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
    baseURL: "https://api.groq.com/openai/v1" // On change l'adresse !
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

    app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await openai.chat.completions.create({
        // On utilise un modèle gratuit hébergé par Groq (Llama 3 est très fort)
        model: "llama-3.3-70b-versatile", 
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message }
        ],
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        console.error("Erreur API:", error);
        res.status(500).json({ reply: "Mon génie est momentanément incompris (Erreur serveur)." });
    }
    });

    app.listen(3001, () => {
    console.log('🧠 Le cerveau (gratuit) tourne sur http://localhost:3001');
    });