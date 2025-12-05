export interface ScoreEffect {
  dep: number;  // dépendance aux Big Tech
  eco: number;  // sobriété / écologie
  nird: number; // autonomie / libre / résilience
}

export interface Choice {
  text: string;
  effect: ScoreEffect;
  next?: number | 'end';
}

export interface Step {
  id: number;
  question: string;
  choices: [Choice, Choice];
  /** optional background key to select a specific full-page background */
  background?: string;
}

export const steps: Step[] = [
  {
    id: 1,
    question:
      "Vous trouvez une clé USB marquée d'un symbole ancien dans le serveur poussiéreux. Ouvrez-vous l'archive ou suivez-vous la carte qui apparaît ?",
    background: 'none',
    choices: [
      { text: 'Ouvrir l archive', effect: { dep: 0, eco: 0, nird: 1 }, next: 1 },
      { text: 'Suivre la carte', effect: { dep: 0, eco: 0, nird: 0 }, next: 2 },
    ],
  },
  {
    id: 2,
    question:
      "La carte vous mène à une vieille salle de réunion transformée en atelier. Un signal lumineux clignote : récupérer le matériel local ou appeler des volontaires externes ?",
    background: 'blue-waves',
    choices: [
      { text: 'Utiliser le matériel local', effect: { dep: -1, eco: 1, nird: 1 }, next: 3 },
      { text: 'Appeler des volontaires externes', effect: { dep: 1, eco: 0, nird: -1 }, next: 4 },
    ],
  },
  {
    id: 3,
    question:
      "En fouillant, vous trouvez des manuels d autrefois et des scripts. Voulez-vous les traduire en tutoriels ou les partager tels quels ?",
    background: 'paper-pink',
    choices: [
      { text: 'Traduire en tutoriels (pédagogie)', effect: { dep: 0, eco: 1, nird: 2 }, next: 5 },
      { text: 'Partager vite (rapidité)', effect: { dep: 1, eco: 0, nird: 0 }, next: 6 },
    ],
  },
  {
    id: 4,
    question:
      "Les volontaires arrivent avec du matériel neuf mais propriétaire. Acceptez-vous les dons sous condition ou refusez-vous ?",
    background: 'green-forest',
    choices: [
      { text: 'Accepter en conditionnant (mix)', effect: { dep: 1, eco: 0, nird: 0 }, next: 5 },
      { text: 'Refuser et insister sur le libre', effect: { dep: -1, eco: 1, nird: 2 }, next: 7 },
    ],
  },
  {
    id: 5,
    question:
      "Un groupe d élèves curieux propose un atelier. Préférez-vous former les élèves pour maintenir l infrastructure ou externaliser la maintenance ?",
    background: 'lime',
    choices: [
      { text: 'Former les élèves (capacité)', effect: { dep: -1, eco: 1, nird: 2 }, next: 8 },
      { text: 'Externaliser (sécurité immédiate)', effect: { dep: 2, eco: -1, nird: -1 }, next: 9 },
    ],
  },
  {
    id: 6,
    question:
      "En partageant vite, vous attirez l attention d un fournisseur qui propose une offre clé en main. Saisissez-vous l opportunité commerciale ?",
    background: 'beige',
    choices: [
      { text: 'Saisir l offre (gain rapide)', effect: { dep: 2, eco: -1, nird: -2 }, next: 'end' },
      { text: 'Refuser et continuer local', effect: { dep: -1, eco: 1, nird: 2 }, next: 8 },
    ],
  },
  {
    id: 7,
    question:
      "En insistant sur le libre, vous attirez une petite communauté voisine. Voulez-vous créer un annuaire local ou un forum public ?",
    background: 'teal',
    choices: [
      { text: 'Annuaire local (proche)', effect: { dep: 0, eco: 1, nird: 1 }, next: 8 },
      { text: 'Forum public (ouverture)', effect: { dep: -1, eco: 1, nird: 2 }, next: 10 },
    ],
  },
  {
    id: 8,
    question:
      "La maintenance par la communauté fonctionne mais un incident majeur survient : un ancien dépôt contient des logiciels critiqués — la légende du serpent numérique est évoquée. Cherchez-vous le dépôt ?",
    background: 'serpent',
    choices: [
      { text: 'Chercher le dépôt (curiosité)', effect: { dep: 0, eco: 0, nird: 2 }, next: 11 },
      { text: 'Ignorer la légende (prudence)', effect: { dep: 0, eco: 0, nird: 0 }, next: 12 },
    ],
  },
  {
    id: 9,
    question:
      "Externaliser apporte stabilité mais le budget s envole. Cherchez-vous à compenser par des subventions ou coupez-vous des services ?",
    background: 'navy',
    choices: [
      { text: 'Chercher subventions', effect: { dep: 0, eco: 1, nird: 0 }, next: 10 },
      { text: 'Couper des services (réduction)', effect: { dep: 1, eco: -1, nird: -1 }, next: 'end' },
    ],
  },
  {
    id: 10,
    question:
      "Le forum attire des contributeurs lointains. Un développeur propose un outil d échange. Voulez-vous l intégrer immédiatement ou le tester en bac à sable ?",
    background: 'sand',
    choices: [
      { text: 'Intégrer immédiatement', effect: { dep: 1, eco: 0, nird: -1 }, next: 13 },
      { text: 'Tester en bac à sable', effect: { dep: -1, eco: 1, nird: 2 }, next: 13 },
    ],
  },
  {
    id: 11,
    question:
      "Vous trouvez le dépôt gardé par rumeurs : un serpent gravé sur un disque. À son contact, vous découvrez des outils anciens utiles mais instables. Les installez-vous ?",
    background: 'archive',
    choices: [
      { text: 'Installer (chance & risque)', effect: { dep: 0, eco: 0, nird: 2 }, next: 13 },
      { text: 'Archiver pour analyse', effect: { dep: 0, eco: 1, nird: 1 }, next: 13 },
    ],
  },
  {
    id: 12,
    question:
      "En évitant le dépôt, vous consolidez les pratiques actuelles. Un petit groupe souhaite expérimenter malgré tout ; les autorisez-vous ?",
    background: 'neutral',
    choices: [
      { text: 'Autoriser expérimentation', effect: { dep: 0, eco: 1, nird: 1 }, next: 13 },
      { text: 'Interdire (sécurité)', effect: { dep: 1, eco: 0, nird: -1 }, next: 'end' },
    ],
  },
  {
    id: 13,
    question:
      "Un gros incident survient : des données critiques sont corrompues. Choisissez-vous récupération par sauvegarde ou reconstruction manuelle ?",
    background: 'storm',
    choices: [
      { text: 'Restaurer depuis sauvegarde', effect: { dep: 0, eco: 0, nird: 0 }, next: 14 },
      { text: 'Reconstruction manuelle (éducatif)', effect: { dep: 0, eco: 1, nird: 2 }, next: 14 },
    ],
  },
  {
    id: 14,
    question:
      "La reconstruction renforce l autonomie, mais le financement demande des choix : investissement matériel ou formation continue ?",
    background: 'growth',
    choices: [
      { text: 'Investir matériel', effect: { dep: 1, eco: -1, nird: 0 }, next: 15 },
      { text: 'Investir formation', effect: { dep: 0, eco: 1, nird: 2 }, next: 15 },
    ],
  },
  {
    id: 15,
    question:
      "Un grand événement local est proposé : exposer votre démarche ou rester discret ?",
    background: 'festival',
    choices: [
      { text: 'Exposer (visibilité)', effect: { dep: -1, eco: 1, nird: 2 }, next: 16 },
      { text: 'Rester discret', effect: { dep: 0, eco: 0, nird: 0 }, next: 16 },
    ],
  },
  {
    id: 16,
    question:
      "Lors de l événement, un partenaire propose de mutualiser un réseau régional. Signez-vous l accord de mutualisation ou préférez-vous un partenariat léger ?",
    background: 'network',
    choices: [
      { text: 'Signer mutualisation (long terme)', effect: { dep: -1, eco: 1, nird: 2 }, next: 17 },
      { text: 'Partenariat léger', effect: { dep: 0, eco: 0, nird: 0 }, next: 17 },
    ],
  },
  {
    id: 17,
    question:
      "La mutualisation fonctionne : vous devez maintenant décider d ouvrir un dépôt public de ressources ou garder un dépôt interne. Que choisissez-vous ?",
    background: 'public',
    choices: [
      { text: 'Dépôt public (communs)', effect: { dep: -1, eco: 1, nird: 2 }, next: 18 },
      { text: 'Dépôt interne (contrôle)', effect: { dep: 1, eco: 0, nird: 0 }, next: 18 },
    ],
  },
  {
    id: 18,
    question:
      "À l approche de la conclusion, vous trouvez une dernière énigme gravée par le serpent numérique — résoudre l énigme permet d obtenir un outil puissant. Tentez-vous ?",
    background: 'mystery',
    choices: [
      { text: 'Tenter l énigme (récompense)', effect: { dep: 0, eco: 0, nird: 3 }, next: 19 },
      { text: 'Ignorer (sécurité)', effect: { dep: 0, eco: 0, nird: 0 }, next: 19 },
    ],
  },
  {
    id: 19,
    question:
      "Fin de l aventure : quelles leçons retenez-vous et comment partagez-vous vos acquis ?",
    background: 'finale',
    choices: [
      { text: 'Publier un guide et former', effect: { dep: -1, eco: 1, nird: 3 }, next: 20 },
      { text: 'Garder des pratiques internes', effect: { dep: 1, eco: 0, nird: 0 }, next: 20 },
    ],
  },
  {
    id: 20,
    question:
      "Dernière étape — Un dernier choix : voulez-vous partager publiquement votre expérience tout de suite ou préparer un guide plus complet avant publication ?",
    background: 'epilogue',
    choices: [
      { text: 'Publier maintenant (visibilité)', effect: { dep: -1, eco: 0, nird: 2 }, next: 'end' },
      { text: 'Préparer un guide (qualité)', effect: { dep: 0, eco: 1, nird: 2 }, next: 'end' },
    ],
  },
];

export interface Profile {
  id: string;
  title: string;
  description: string;
  emoji: string;
  tips: string[];
}

export const profiles: Profile[] = [
  {
    id: "dependent",
    title: "Dépendant du Géant Tech",
    emoji: "😰",
    description:
      "Votre établissement est fortement dépendant des solutions propriétaires des Big Tech. La sobriété numérique et l'autonomie restent à développer.",
    tips: [
      "Essayez Linux sur quelques postes pilotes pour évaluer la compatibilité",
      "Explorez le réemploi et le reconditionnement du matériel existant",
      "Rapatriez progressivement vos données vers des hébergeurs européens",
    ],
  },
  {
    id: "transition",
    title: "En Transition",
    emoji: "🚀",
    description:
      "Votre établissement mélange bonnes et mauvaises pratiques. Vous êtes sur la bonne voie mais il reste une marge d'amélioration importante !",
    tips: [
      "Favorisez systématiquement les outils libres lors de nouveaux choix",
      "Réduisez progressivement les abonnements propriétaires coûteux",
      "Rejoignez une communauté locale NIRD pour mutualiser les solutions",
    ],
  },
  {
    id: "resistant",
    title: "Résistant NIRD",
    emoji: "💪",
    description:
      "Bravo ! Votre établissement suit une démarche libre, éthique et durable. Vous êtes un véritable village numérique résistant !",
    tips: [
      "Contribuez à la Forge des Communs Numériques Éducatifs",
      "Partagez votre expérience et sensibilisez d'autres établissements",
      "Continuez d'optimiser le matériel existant et formez vos équipes",
    ],
  },
];

