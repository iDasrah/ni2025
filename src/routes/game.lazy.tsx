import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import { steps } from '../data/steps'

export const Route = createLazyFileRoute('/game')({
  component: Game,
})

function Game() {
  const navigate = useNavigate()
  const { currentStep, applyChoice, nextStep } = useGameStore()
  const [isAnimating, setIsAnimating] = useState(false)

  const step = steps[currentStep]

  if (!step) {
    navigate({ to: '/result' })
    return null
  }

  const handleChoice = (choiceIndex: 0 | 1) => {
    const choice = step.choices[choiceIndex]
    applyChoice(choice.effect)

    setIsAnimating(true)
    setTimeout(() => {
      nextStep()
      setIsAnimating(false)

      if (currentStep + 1 >= steps.length) {
        navigate({ to: '/result' })
      }
    }, 300)
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentStep + 1} sur {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-nird-blue to-nird-purple h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 ${isAnimating ? 'opacity-50' : 'fade-in'}`}>
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
    </div>
  )
}
