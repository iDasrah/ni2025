import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import FullPageBackground from '../components/FullPageBackground'
import { useGameStore } from '../store/gameStore'
import { steps } from '../data/steps'
import ChatBot from './ChatBot'

export const Route = createLazyFileRoute('/game')({
  component: Game,
})

function Game() {
  const navigate = useNavigate()
  const { currentStep, applyChoice, nextStep, gotoStep } = useGameStore()
  const [isAnimating, setIsAnimating] = useState(false)

  const step = steps[currentStep]
  const showSnake = step?.question?.toString().toLowerCase().includes('serpent')

  const renderBackground = (s: typeof step) => {
    if (!s) return null
    const q = s.question?.toString().toLowerCase() || ''

    // If the step explicitly defines a background, use it
    const bgKey = (s as any).background as string | undefined
    if (bgKey) {
      // explicit 'none' disables the full-page background for this step
      if (bgKey === 'none') return null
      switch (bgKey) {
        case 'peach':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff7ed,#fffefc)' }} />
        case 'blue-waves':
          return (
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <rect width="100%" height="100%" fill="#f0fbff" />
              <g fill="#cfeeff" opacity="0.8">
                <path d="M0 240 C120 200 200 280 360 240 C520 200 620 280 800 240 L800 400 L0 400 Z" />
                <path d="M0 280 C140 240 240 320 420 280 C600 240 700 320 800 280 L800 400 L0 400 Z" opacity="0.5" />
              </g>
            </svg>
          )
        case 'paper-pink':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff0f6,#fffdfd)' }} />
        case 'green-forest':
          return (
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <rect width="100%" height="100%" fill="#eefbf3" />
              <g fill="#bbf7d0" opacity="0.7">
                <circle cx="120" cy="260" r="80" />
                <circle cx="240" cy="240" r="100" />
                <circle cx="420" cy="260" r="90" />
              </g>
            </svg>
          )
        case 'lime':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f7fff8,#ffffff)' }} />
        case 'beige':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fffaf0,#ffffff)' }} />
        case 'teal':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#ecfeff,#ffffff)' }} />
        case 'serpent':
          return (
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.22 }}>
              <rect width="100%" height="100%" fill="#f7fff8" />
              <g stroke="#dcfce7" strokeWidth="8" fill="none" opacity="0.9">
                <path d="M-50 260 C 100 180, 200 340, 360 260 C 520 180, 620 340, 900 260" />
                <path d="M-50 300 C 120 220, 240 380, 400 300 C 560 220, 680 380, 920 300" />
              </g>
            </svg>
          )
        case 'navy':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#eef2ff,#ffffff)' }} />
        case 'sand':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff7ed,#fffef7)' }} />
        case 'archive':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f8fafc,#fffdfd)' }} />
        case 'neutral':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fbfafa,#ffffff)' }} />
        case 'storm':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f0f9ff,#fff7f3)' }} />
        case 'growth':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f0fff4,#ffffff)' }} />
        case 'festival':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff7f0,#fffdfc)' }} />
        case 'network':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f4faff,#ffffff)' }} />
        case 'public':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff9f0,#ffffff)' }} />
        case 'mystery':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#f4f3ff,#ffffff)' }} />
        case 'finale':
          return <div className="w-full h-full" style={{ background: 'linear-gradient(120deg,#fff8f4,#ffffff)' }} />
        default:
          break
      }
    }

    // Fallback: keep keyword detection as before
    if (q.includes('chateau') || q.includes('château')) {
      return (
        <svg
          className="w-full h-full opacity-60 mix-blend-multiply"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradCard" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradCard)" />
        </svg>
      )
    }

    // fallback deterministic set by id (keeps variety)
    const variants: React.ReactNode[] = [
      <div key="v0" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #fff7ed, #ffffff)' }} />,
      <div key="v1" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #f0f9ff, #ffffff)' }} />,
      <div key="v2" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #fef3f3, #ffffff)' }} />,
      <div key="v3" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #f7fff8, #ffffff)' }} />,
      <div key="v4" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #fffaf0, #ffffff)' }} />,
      <div key="v5" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #f8fafc, #ffffff)' }} />,
      <div key="v6" className="w-full h-full" style={{ background: 'linear-gradient(120deg, #fff8f4, #ffffff)' }} />,
    ]

    const idx = ((s.id ?? 1) - 1) % variants.length
    return variants[idx]
  }

  if (!step) {
    navigate({ to: '/result' })
    return null
  }

  const handleChoice = (choiceIndex: 0 | 1) => {
    const choice = step.choices[choiceIndex]
    applyChoice(choice.effect)

    setIsAnimating(true)
    setTimeout(() => {
      // Branching: if choice.next is a number, jump to that step index
      // if it's 'end', navigate to result; otherwise advance sequentially
      if ((choice as any).next === 'end') {
        setIsAnimating(false)
        navigate({ to: '/result' })
        return
      }

      if (typeof (choice as any).next === 'number') {
        gotoStep((choice as any).next)
      } else {
        nextStep()
      }

      setIsAnimating(false)

      // If we've reached beyond available steps, go to result
      if (currentStep + 1 >= steps.length && typeof (choice as any).next !== 'number') {
        navigate({ to: '/result' })
      }

    }, 300)
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="max-w-3xl w-full relative">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span />
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-nird-blue to-nird-purple h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* background behind the card (full-page layer so it's visible behind entire card) */}
        <FullPageBackground>
          <div className="w-full h-full overflow-hidden">{renderBackground(step)}</div>
        </FullPageBackground>

        <div className={`relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-12 ${isAnimating ? 'opacity-50' : 'fade-in'}`}>
          {/* small clickable snake when the text mentions 'serpent' */}
          {showSnake && (
            <button
              onClick={() => navigate({ to: '/snack' as any })}
              aria-label="Voir le serpent"
              className="absolute top-4 right-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/60 rounded-full backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 40 C18 24, 30 52, 46 40 C54 32, 58 36, 58 36" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="30" r="3" fill="#062f1a" />
              </svg>
            </button>
          )}

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {step.question}
            </h2>
          </div>

          <div className="space-y-4">
            {step.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(index as 0 | 1)}
                disabled={isAnimating}
                className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                  isAnimating
                    ? 'opacity-50 cursor-not-allowed'
                    : 'border-gray-200 hover:border-nird-purple hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-nird-blue to-nird-purple text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {choice.text}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {isAnimating && (
          <div className="text-center mt-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-nird-purple"></div>
          </div>
        )}
      </div>
      <ChatBot />
    </div>
  )
}
