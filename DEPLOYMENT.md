# 🚀 Guide de déploiement - Nuit de l'Info 2025

## ✅ Checklist avant déploiement

- [x] Application React + TypeScript configurée
- [x] TanStack Router configuré
- [x] Zustand pour la gestion d'état
- [x] TailwindCSS pour le styling
- [x] 8 questions avec système de scoring
- [x] 3 profils de résultats
- [x] Animations et transitions
- [x] README complet
- [x] Licence MIT
- [x] Build de production fonctionnel

## 📦 Options de déploiement

### Option 1 : Netlify (Recommandé - Le plus simple)

1. **Connecter le dépôt GitLab**
   - Aller sur [netlify.com](https://netlify.com)
   - "New site from Git" → "GitLab"
   - Sélectionner le dépôt `coma-ethylix/ni2025`

2. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Déployer**
   - Cliquer sur "Deploy site"
   - Attendre 2-3 minutes
   - Votre site sera en ligne !

4. **URL personnalisée (optionnel)**
   - Site settings → Domain management
   - Changer le nom : `village-numerique-resistant.netlify.app`

### Option 2 : Vercel

1. **Import du projet**
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

2. **Configuration automatique**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Option 3 : GitHub Pages (via GitLab CI/CD)

1. **Ajouter `.gitlab-ci.yml`**
   ```yaml
   image: node:18

   stages:
     - build
     - deploy

   cache:
     paths:
       - node_modules/

   build:
     stage: build
     script:
       - npm install
       - npm run build
     artifacts:
       paths:
         - dist/

   pages:
     stage: deploy
     script:
       - mv dist public
     artifacts:
       paths:
         - public
     only:
       - main
   ```

2. **Configuration du base dans `vite.config.ts`**
   ```typescript
   export default defineConfig({
     base: '/ni2025/', // nom du repo
     plugins: [TanStackRouterVite(), react()],
   })
   ```

3. **Activer GitLab Pages**
   - Settings → Pages → Activer

### Option 4 : Déploiement manuel

```bash
# Build
npm run build

# Le dossier dist/ contient tout le site statique
# Uploadez-le sur n'importe quel hébergeur web
```

## 🔧 Configuration pour le déploiement

### Variables d'environnement (si nécessaire)

Créer un fichier `.env` :
```bash
# Actuellement aucune variable nécessaire
# Le projet est 100% statique
```

### Optimisations de production

Le projet est déjà optimisé :
- ✅ Code splitting automatique (TanStack Router)
- ✅ CSS minifié (TailwindCSS + PostCSS)
- ✅ Assets optimisés (Vite)
- ✅ Lazy loading des routes
- ✅ Tree shaking automatique

## 📊 Vérifications post-déploiement

1. **Tester toutes les pages**
   - [ ] Page d'accueil (`/`)
   - [ ] Page du jeu (`/game`)
   - [ ] Page des résultats (`/result`)

2. **Tester le flow complet**
   - [ ] Commencer le jeu
   - [ ] Répondre aux 8 questions
   - [ ] Voir le profil final
   - [ ] Cliquer sur "Rejouer"

3. **Tester sur différents devices**
   - [ ] Desktop (Chrome, Firefox, Safari)
   - [ ] Tablette
   - [ ] Mobile

4. **Vérifier les performances**
   - [ ] Lighthouse Score > 90
   - [ ] Temps de chargement < 2s

## 🐛 Dépannage

### Le site ne se charge pas
- Vérifier que le build s'est bien terminé
- Vérifier le chemin de base dans `vite.config.ts`
- Regarder la console du navigateur (F12)

### Les routes ne fonctionnent pas
- Vérifier que le serveur supporte le routing côté client
- Sur Netlify/Vercel : ajouter un fichier `public/_redirects` :
  ```
  /*    /index.html   200
  ```

### Erreur 404 sur les assets
- Vérifier le `base` dans `vite.config.ts`
- S'assurer que les assets sont dans `dist/assets/`

## 📝 Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Vérifier les types TypeScript
npx tsc --noEmit

# Nettoyer et rebuild
rm -rf node_modules dist && npm install && npm run build
```

## 🎯 Pour la présentation au jury

1. **Préparer le pitch (3 minutes)**
   - Contexte : Dépendance des écoles aux Big Tech
   - Solution : Mini-jeu pédagogique NIRD
   - Démo live du jeu

2. **Points à mettre en avant**
   - ✅ Licence libre (MIT)
   - ✅ Technologies modernes (React, TypeScript)
   - ✅ UX soignée (animations, responsive)
   - ✅ Message engagé et pédagogique
   - ✅ Code propre et maintenable

3. **Démo structurée**
   - Montrer la page d'accueil
   - Jouer jusqu'à la fin
   - Montrer les différents profils possibles
   - Expliquer le système de scoring

## 🌟 Améliorations possibles (si temps restant)

- [ ] Partage des résultats sur les réseaux sociaux
- [ ] Graphique radar pour visualiser les scores
- [ ] Mode "comparaison" entre deux stratégies
- [ ] Animation du logo (SVG animé)
- [ ] Son et effets sonores
- [ ] Easter eggs sur le thème Astérix
- [ ] Système de badges/achievements
- [ ] Traduction EN/FR

## 📞 Contact équipe

En cas de problème technique urgent :
- Vérifier les logs de déploiement
- Consulter la documentation Netlify/Vercel
- Contacter l'équipe sur le channel Discord

---

**Bonne chance pour la Nuit de l'Info 2025 ! 🚀**

*N'oubliez pas : l'important c'est de montrer votre engagement pour un numérique plus libre et responsable !*
