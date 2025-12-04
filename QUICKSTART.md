# ⚡ Démarrage ultra-rapide - Nuit de l'Info 2025

## 🎯 Ce qui a été créé

✅ **Application complète "Le Village Numérique Résistant"**
- Mini-jeu interactif avec 8 questions
- 3 profils de résultats (Dépendant / Transition / Résistant)
- Design responsive et moderne
- Animations fluides
- Système de scoring intelligent

## 🚀 Lancer l'application (2 commandes)

```bash
npm install
npm run dev
```

➡️ Ouvrir http://localhost:5173 dans votre navigateur

## 📦 Build pour la production

```bash
npm run build
```

Le site compilé sera dans le dossier `dist/`

## 🌐 Déployer en 5 minutes sur Netlify

1. Aller sur https://netlify.com
2. "New site from Git" → GitLab
3. Sélectionner ce dépôt
4. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Cliquer sur "Deploy"

**C'est tout !** Votre site sera en ligne en 2-3 minutes.

## 📁 Fichiers importants

```
📄 README.md          → Documentation complète
📄 DEPLOYMENT.md      → Guide de déploiement détaillé
📄 CONTRIBUTING.md    → Guide pour contribuer
📄 LICENSE            → Licence MIT

📂 src/
  📂 routes/          → Les 3 pages (Accueil, Jeu, Résultats)
  📂 data/steps.ts    → Questions et profils (À MODIFIER ICI)
  📂 store/           → Gestion des scores
  📂 styles/          → CSS global + animations
```

## 🎮 Modifier les questions

Éditer **`src/data/steps.ts`** :

```typescript
// Ajouter une question :
{
  id: 9,
  question: "🎯 Ma nouvelle question ?",
  choices: [
    {
      text: "Mauvais choix",
      effect: { dep: 1, eco: -1, nird: -1 }
    },
    {
      text: "Bon choix NIRD",
      effect: { dep: -1, eco: 2, nird: 2 }
    }
  ]
}
```

## 🎨 Personnaliser les couleurs

Éditer **`tailwind.config.js`** :

```javascript
colors: {
  'nird-blue': '#2563eb',    // Bleu principal
  'nird-green': '#059669',   // Vert écologie
  'nird-purple': '#7c3aed',  // Violet autonomie
  'nird-orange': '#ea580c',  // Orange accent
}
```

## 📊 Structure du jeu

1. **Page d'accueil** (`/`)
   - Présentation du concept
   - Bouton "Commencer"

2. **Jeu** (`/game`)
   - 8 questions avec 2 choix chacune
   - Barre de progression
   - Chaque choix modifie 3 scores

3. **Résultats** (`/result`)
   - Profil personnalisé
   - Scores visualisés
   - 3 conseils adaptés
   - Bouton "Rejouer"

## 🎯 Scores expliqués

Chaque choix modifie 3 valeurs :

- **dep** (Dépendance) → Plus c'est élevé, plus on dépend des Big Tech
- **eco** (Écologie) → Plus c'est élevé, plus on est sobre
- **nird** (Autonomie) → Plus c'est élevé, plus on est libre

**Profil final** = Le score le plus élevé parmi les 3

## 🐛 Problèmes courants

### Le serveur ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build échoue
```bash
npm run build
# Regarder les erreurs TypeScript
```

### Routes ne fonctionnent pas après déploiement
→ Vérifier que le fichier `public/_redirects` existe (déjà créé)

## 📞 Ressources

- **Documentation complète** → [README.md](README.md)
- **Guide de déploiement** → [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contribuer** → [CONTRIBUTING.md](CONTRIBUTING.md)

## ✅ Checklist avant la présentation

- [ ] Application testée en local (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Déployé en ligne (Netlify/Vercel)
- [ ] Testé sur mobile
- [ ] Pitch préparé (3 min)
- [ ] Démo prête

## 🎯 Pour le jury

**Points à mettre en avant :**

1. **Message engagé** → Sensibilisation NIRD
2. **Technologies modernes** → React, TypeScript, TanStack Router
3. **UX soignée** → Responsive, animations, intuitive
4. **Open Source** → Licence MIT, code propre
5. **Pédagogique** → Conseils personnalisés

## 🚀 Commandes essentielles

```bash
# Développement
npm run dev       # Lance le serveur local

# Production
npm run build     # Compile pour production
npm run preview   # Prévisualise le build

# Vérifications
npx tsc --noEmit  # Vérifie TypeScript
```

## 🌟 Améliorations rapides (si temps)

- Ajouter d'autres questions dans `src/data/steps.ts`
- Modifier les conseils des profils
- Changer les couleurs dans `tailwind.config.js`
- Ajouter des animations dans `src/styles/globals.css`

---

**Prêt pour la Nuit de l'Info ! 🔥**

*N'oubliez pas : le code est sur GitLab, déployez et montrez votre engagement pour un numérique responsable !*

**Bonne chance ! 🎉**
