# 🤝 Guide de contribution

Merci de vouloir contribuer au projet **Le Village Numérique Résistant** !

## 🚀 Démarrage rapide

### Installation

```bash
# Cloner le projet
git clone https://git.unistra.fr/coma-ethylix/ni2025.git
cd ni2025

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles

```bash
npm run dev      # Serveur de développement (port 5173)
npm run build    # Build de production
npm run preview  # Prévisualiser le build (port 4173)
```

## 📂 Structure du projet

```
src/
├── components/       # Composants React réutilisables
├── routes/          # Pages de l'application (TanStack Router)
│   ├── __root.tsx          # Layout racine
│   ├── index.lazy.tsx      # Page d'accueil
│   ├── game.lazy.tsx       # Jeu principal
│   └── result.lazy.tsx     # Résultats
├── data/
│   └── steps.ts     # Questions, choix et profils
├── store/
│   └── gameStore.ts # État global (Zustand)
├── styles/
│   └── globals.css  # Styles globaux + animations
└── main.tsx         # Point d'entrée
```

## 🎨 Ajouter une nouvelle question

Éditer `src/data/steps.ts` :

```typescript
{
  id: 9,
  question: "🎯 Votre nouvelle question ?",
  choices: [
    {
      text: "Choix 1 - Mauvaise pratique",
      effect: { dep: 1, eco: -1, nird: -1 }
    },
    {
      text: "Choix 2 - Bonne pratique NIRD",
      effect: { dep: -1, eco: 2, nird: 2 }
    }
  ]
}
```

### Système de scoring

- `dep` : Dépendance aux Big Tech (+ = plus dépendant)
- `eco` : Écologie / sobriété (+ = plus écologique)
- `nird` : Autonomie NIRD (+ = plus autonome)

## 🎭 Modifier les profils

Éditer `src/data/steps.ts` dans l'array `profiles` :

```typescript
{
  id: "nouveau-profil",
  title: "Titre du profil",
  emoji: "🎯",
  description: "Description du profil...",
  tips: [
    "Conseil 1",
    "Conseil 2",
    "Conseil 3"
  ]
}
```

Puis mettre à jour la logique dans `src/store/gameStore.ts` → fonction `getProfile()`

## 🎨 Personnaliser le design

### Couleurs

Les couleurs NIRD sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'nird-blue': '#2563eb',
  'nird-green': '#059669',
  'nird-purple': '#7c3aed',
  'nird-orange': '#ea580c',
}
```

### Animations

Les animations sont dans `src/styles/globals.css` :

- `.fade-in` : Apparition en fondu
- `.slide-up` : Glissement vers le haut

## 🧪 Bonnes pratiques

### TypeScript

- Toujours typer les props et les états
- Utiliser les interfaces existantes
- Pas de `any` sauf exception justifiée

### React

- Utiliser les hooks React
- Lazy loading pour les routes
- Composants fonctionnels uniquement

### Styling

- TailwindCSS en priorité
- Classes utilitaires avant le CSS custom
- Mobile-first (responsive par défaut)

### Git

```bash
# Branches
git checkout -b feature/ma-feature
git checkout -b fix/mon-fix

# Commits
git commit -m "feat: ajoute nouvelle question sur la gouvernance"
git commit -m "fix: corrige calcul du profil"
git commit -m "docs: met à jour le README"
```

## 🐛 Déboguer

### Erreurs courantes

**1. Routes non trouvées**
→ Vérifier que les routes lazy sont bien nommées : `*.lazy.tsx`

**2. Zustand ne se met pas à jour**
→ S'assurer d'utiliser `set()` pour modifier l'état

**3. TailwindCSS ne fonctionne pas**
→ Vérifier que la classe est bien dans le fichier scanné (`content` dans `tailwind.config.js`)

**4. Build échoue**
→ Vérifier les erreurs TypeScript : `npx tsc --noEmit`

## 📦 Avant de pousser

```bash
# Vérifier le build
npm run build

# Tester en local
npm run preview

# Vérifier les types
npx tsc --noEmit
```

## 🎯 Idées de contributions

### Facile
- [ ] Ajouter de nouvelles questions
- [ ] Améliorer les descriptions de profils
- [ ] Corriger les fautes de frappe
- [ ] Améliorer le README

### Moyen
- [ ] Ajouter des animations CSS
- [ ] Créer un système de badges
- [ ] Ajouter un graphique radar des scores
- [ ] Mode comparaison de stratégies

### Avancé
- [ ] Intégration i18n (multilingue)
- [ ] Partage sur réseaux sociaux
- [ ] Système de sauvegarde local (localStorage)
- [ ] Mode "campagne" avec progression

## 📞 Questions ?

- Ouvrir une [issue](https://git.unistra.fr/coma-ethylix/ni2025/-/issues)
- Consulter le [README.md](README.md)
- Lire le [DEPLOYMENT.md](DEPLOYMENT.md)

## 📜 Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.

---

**Merci pour vos contributions ! 🎉**
