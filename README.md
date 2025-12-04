# 🏰 Le Village Numérique Résistant

> **Mini-jeu "Choisis ta voie"** - Nuit de l'Info 2025

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📖 À propos du projet

**Le Village Numérique Résistant** est une application web gamifiée créée pour la **Nuit de l'Info 2025**.

Le projet illustre le thème : *"Comment les établissements scolaires peuvent tenir tête aux Big Tech ?"*
🎯 **David contre Goliath · Astérix contre l'Empire numérique**

### 🎮 Concept du jeu

À travers **8 situations concrètes**, le joueur fait des choix qui impactent 3 scores :
- 🔗 **Dépendance** aux Big Tech
- 🌱 **Écologie** & sobriété numérique
- 💪 **Autonomie** NIRD (Numérique Inclusif, Responsable et Durable)

À la fin, le joueur obtient :
- Un **profil personnalisé** (Dépendant / En Transition / Résistant NIRD)
- **3 conseils** adaptés pour progresser
- Un lien vers les ressources NIRD

---

## 🚀 Installation et lancement

### Prérequis
- **Node.js** >= 18.x
- **npm** >= 9.x

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

L'application sera accessible sur **http://localhost:5173**

### Build de production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`

### Prévisualiser le build

```bash
npm run preview
```

---

## 🛠️ Technologies utilisées

- **React 18** - Interface utilisateur
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **TanStack Router** - Routing moderne
- **Zustand** - Gestion d'état légère
- **TailwindCSS** - Styles utilitaires
- **PostCSS** - Transformation CSS

---

## 📁 Structure du projet

```
src/
├── components/       # Composants réutilisables
├── routes/          # Pages de l'application
│   ├── __root.tsx          # Route racine
│   ├── index.lazy.tsx      # Page d'accueil
│   ├── game.lazy.tsx       # Page du jeu
│   └── result.lazy.tsx     # Page des résultats
├── data/
│   └── steps.ts     # Questions, choix et profils
├── store/
│   └── gameStore.ts # Gestion des scores (Zustand)
├── styles/
│   └── globals.css  # Styles globaux + animations
├── main.tsx         # Point d'entrée
└── routeTree.gen.ts # Routes générées automatiquement
```

---

## 🎯 La démarche NIRD

**NIRD** signifie **Numérique Inclusif, Responsable et Durable**.

### 3 piliers fondamentaux :
1. **Inclusion** - Accessible à tous
2. **Responsabilité** - Éthique et souverain
3. **Durabilité** - Écologique et pérenne

### Actions concrètes :
- ♻️ Réemploi et reconditionnement du matériel
- 🐧 Promotion de Linux et logiciels libres
- 🇪🇺 Hébergement souverain (UE)
- 🤝 Mutualisation via la [Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr)
- 📚 Sensibilisation à la sobriété numérique

---

## 🎮 Comment jouer ?

1. **Accueil** : Présentation du concept
2. **8 Questions** : Situations concrètes avec 2 choix chacune
3. **Résultats** : Profil personnalisé + conseils adaptés
4. **Rejouer** : Tester d'autres stratégies

---

## 🌟 Fonctionnalités

- ✅ Interface responsive (mobile, tablette, desktop)
- ✅ Animations fluides (fade, slide)
- ✅ Barre de progression
- ✅ Calcul dynamique du profil
- ✅ Conseils personnalisés
- ✅ Design moderne avec TailwindCSS
- ✅ Code 100% TypeScript
- ✅ Routing avec TanStack Router

---

## 📜 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

### Licence MIT

```
MIT License

Copyright (c) 2025 Équipe Nuit de l'Info 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Équipe

Projet réalisé par **Coma-Ethylix** pour la **Nuit de l'Info 2025**.

---

## 🔗 Liens utiles

- [Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr)
- [La Nuit de l'Info](https://www.nuitdelinfo.com/)
- [Démarche NIRD](https://forge.apps.education.fr)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TailwindCSS](https://tailwindcss.com/)

---

## 🙏 Remerciements

- La **Nuit de l'Info** pour ce sujet engagé
- La communauté **NIRD** pour son engagement
- Les contributeurs de **React**, **Vite**, **TanStack Router** et **TailwindCSS**

---

## 📞 Support

Pour toute question ou suggestion :
- Ouvrir une [issue](https://git.unistra.fr/coma-ethylix/ni2025/-/issues)
- Contacter l'équipe via GitLab

---

**Fait avec ❤️ pour un numérique plus libre, éthique et durable**

*Nuit de l'Info 2025 · Numérique Inclusif, Responsable et Durable*
