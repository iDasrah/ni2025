export interface ScoreEffect {
  dep: number;  // dépendance aux Big Tech
  eco: number;  // sobriété / écologie
  nird: number; // autonomie / libre / résilience
}

export interface Choice {
  text: string;
  effect: ScoreEffect;
}

export interface Step {
  id: number;
  question: string;
  choices: [Choice, Choice];
}

export const steps: Step[] = [
  {
    id: 1,
    question: "🖥️ Votre matériel informatique devient obsolète selon les éditeurs. Que faites-vous ?",
    choices: [
      {
        text: "Jeter et racheter du matériel neuf avec Windows 11",
        effect: { dep: 1, eco: -2, nird: -1 }
      },
      {
        text: "Réemployer avec Linux et optimiser l'existant",
        effect: { dep: -1, eco: 2, nird: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "💿 Quel système d'exploitation choisissez-vous pour vos postes ?",
    choices: [
      {
        text: "Windows 11 avec licences propriétaires",
        effect: { dep: 2, eco: -1, nird: -1 }
      },
      {
        text: "Linux avec logiciels libres",
        effect: { dep: -2, eco: 2, nird: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "☁️ Où stockez-vous les données de votre établissement ?",
    choices: [
      {
        text: "Google Workspace (serveurs USA)",
        effect: { dep: 2, eco: -1, nird: -2 }
      },
      {
        text: "Hébergement souverain (UE) avec solutions libres",
        effect: { dep: -1, eco: 1, nird: 2 }
      }
    ]
  },
  {
    id: 4,
    question: "📚 Quels outils pédagogiques utilisez-vous ?",
    choices: [
      {
        text: "Microsoft 365 Education",
        effect: { dep: 1, eco: -1, nird: -1 }
      },
      {
        text: "OnlyOffice + Moodle (solutions libres)",
        effect: { dep: -1, eco: 1, nird: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "🤝 Comment gérez-vous votre transition numérique ?",
    choices: [
      {
        text: "On utilise ce qui existe déjà, on ne change rien",
        effect: { dep: 1, eco: 0, nird: -1 }
      },
      {
        text: "Rejoindre la communauté NIRD et mutualiser",
        effect: { dep: -1, eco: 1, nird: 2 }
      }
    ]
  },
  {
    id: 6,
    question: "🎯 Vision à long terme : quelle stratégie adoptez-vous ?",
    choices: [
      {
        text: "S'équiper comme les Big Tech le recommandent",
        effect: { dep: 2, eco: -2, nird: -2 }
      },
      {
        text: "Sobriété numérique et communs numériques",
        effect: { dep: -2, eco: 2, nird: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "🔧 Un problème technique survient. Comment réagissez-vous ?",
    choices: [
      {
        text: "Appeler le support payant du fournisseur",
        effect: { dep: 1, eco: -1, nird: -1 }
      },
      {
        text: "S'appuyer sur la communauté et la documentation libre",
        effect: { dep: -1, eco: 1, nird: 2 }
      }
    ]
  },
  {
    id: 8,
    question: "🎓 Comment sensibilisez-vous vos élèves et enseignants ?",
    choices: [
      {
        text: "Pas de sensibilisation particulière",
        effect: { dep: 1, eco: -1, nird: 0 }
      },
      {
        text: "Ateliers réguliers sur le numérique responsable",
        effect: { dep: -1, eco: 2, nird: 2 }
      }
    ]
  }
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
    description: "Votre établissement est fortement dépendant des solutions propriétaires des Big Tech. La sobriété numérique et l'autonomie restent à développer.",
    tips: [
      "Essayez Linux sur quelques postes pilotes pour évaluer la compatibilité",
      "Explorez le réemploi et le reconditionnement du matériel existant",
      "Rapatriez progressivement vos données vers des hébergeurs européens"
    ]
  },
  {
    id: "transition",
    title: "En Transition",
    emoji: "🚀",
    description: "Votre établissement mélange bonnes et mauvaises pratiques. Vous êtes sur la bonne voie mais il reste une marge d'amélioration importante !",
    tips: [
      "Favorisez systématiquement les outils libres lors de nouveaux choix",
      "Réduisez progressivement les abonnements propriétaires coûteux",
      "Rejoignez une communauté locale NIRD pour mutualiser les solutions"
    ]
  },
  {
    id: "resistant",
    title: "Résistant NIRD",
    emoji: "💪",
    description: "Bravo ! Votre établissement suit une démarche libre, éthique et durable. Vous êtes un véritable village numérique résistant !",
    tips: [
      "Contribuez à la Forge des Communs Numériques Éducatifs",
      "Partagez votre expérience et sensibilisez d'autres établissements",
      "Continuez d'optimiser le matériel existant et formez vos équipes"
    ]
  }
];
