import { create } from 'zustand';
import { ScoreEffect } from '../data/steps';

interface GameState {
  currentStep: number;
  scores: {
    dep: number;
    eco: number;
    nird: number;
  };
  applyChoice: (effect: ScoreEffect) => void;
  nextStep: () => void;
  reset: () => void;
  getProfile: () => 'dependent' | 'transition' | 'resistant';
}

export const useGameStore = create<GameState>((set, get) => ({
  currentStep: 0,
  scores: {
    dep: 0,
    eco: 0,
    nird: 0,
  },

  applyChoice: (effect: ScoreEffect) => {
    set((state) => ({
      scores: {
        dep: state.scores.dep + effect.dep,
        eco: state.scores.eco + effect.eco,
        nird: state.scores.nird + effect.nird,
      },
    }));
  },

  nextStep: () => {
    set((state) => ({
      currentStep: state.currentStep + 1,
    }));
  },

  reset: () => {
    set({
      currentStep: 0,
      scores: { dep: 0, eco: 0, nird: 0 },
    });
  },

  getProfile: () => {
    const { scores } = get();

    // Déterminer le profil dominant
    const maxScore = Math.max(scores.dep, scores.eco, scores.nird);

    // Si NIRD domine largement
    if (scores.nird === maxScore && scores.nird > 5) {
      return 'resistant';
    }

    // Si dépendance domine
    if (scores.dep === maxScore && scores.dep > 5) {
      return 'dependent';
    }

    // Si c'est équilibré ou score moyen
    if (scores.nird >= 2 && scores.eco >= 2) {
      return 'transition';
    }

    // Par défaut selon le score le plus élevé
    if (scores.nird === maxScore) return 'resistant';
    if (scores.dep === maxScore) return 'dependent';

    return 'transition';
  },
}));
