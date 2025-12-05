import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import ChatBot from '../components/ChatBot'

export const Route = createLazyFileRoute('/snake')({
  component: SnakeGame,
})

// --- CONFIGURATION ---
const GRID_SIZE = 20
const SPEED = 150 // ms entre chaque mouvement (plus c'est bas, plus c'est rapide)

type Point = { x: number; y: number }
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

function SnakeGame() {
  // États du jeu
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Point>({ x: 15, y: 5 })
  const [isGameOver, setIsGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  // Pour gérer les inputs sans re-render excessif
  const directionRef = useRef<Direction>('RIGHT')

  // Initialisation / Reset
  const initGame = () => {
    setSnake([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }])
    setFood(generateFood())
    directionRef.current = 'RIGHT'
    setScore(0)
    setIsGameOver(false)
    setIsPaused(false)
    setGameStarted(true)
  }

  // Générer de la nourriture aléatoire hors du serpent
  const generateFood = (): Point => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  }

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) return

      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current !== 'DOWN') directionRef.current = 'UP'
          break
        case 'ArrowDown':
          if (directionRef.current !== 'UP') directionRef.current = 'DOWN'
          break
        case 'ArrowLeft':
          if (directionRef.current !== 'RIGHT') directionRef.current = 'LEFT'
          break
        case 'ArrowRight':
          if (directionRef.current !== 'LEFT') directionRef.current = 'RIGHT'
          break
        case ' ': // Pause
          setIsPaused((prev) => !prev)
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gameStarted])

  // Boucle de jeu
  useEffect(() => {
    if (!gameStarted || isGameOver || isPaused) return

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0]
        const newHead = { ...head }

        switch (directionRef.current) {
          case 'UP': newHead.y -= 1; break
          case 'DOWN': newHead.y += 1; break
          case 'LEFT': newHead.x -= 1; break
          case 'RIGHT': newHead.x += 1; break
        }

        // 1. Collision Murs
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          handleGameOver()
          return prevSnake
        }

        // 2. Collision Soi-même
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          handleGameOver()
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // 3. Manger
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10)
          setFood(generateFood()) // Le serpent grandit (on ne retire pas la queue)
        } else {
          newSnake.pop() // Le serpent avance (on retire la queue)
        }

        return newSnake
      })
    }

    const gameInterval = setInterval(moveSnake, SPEED)
    return () => clearInterval(gameInterval)
  }, [gameStarted, isGameOver, isPaused, food])

  const handleGameOver = () => {
    setIsGameOver(true)
    if (score > highScore) setHighScore(score)
  }

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20 overflow-hidden touch-none">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        
        {/* En-tête du jeu */}
        <div className="text-center mb-6 fade-in">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nird-blue to-nird-purple mb-2">
            Le Serpent Résistant 🐍
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Collecte les octets libres (🐧) et évite le Firewall !
          </p>
        </div>

        {/* Zone de Jeu */}
        <div className="relative bg-white p-4 rounded-2xl shadow-2xl border-4 border-gray-800">
          
          {/* Score Board */}
          <div className="flex justify-between mb-4 font-mono font-bold text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐧</span>
              <span>SCORE: {score}</span>
            </div>
            <div className="text-nird-purple">BEST: {highScore}</div>
          </div>

          {/* Grille */}
          <div 
            className="relative bg-gray-100 rounded-lg overflow-hidden grid"
            style={{
              width: 'min(80vw, 400px)',
              height: 'min(80vw, 400px)',
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            }}
          >
            {/* Overlay Start / Game Over */}
            {(!gameStarted || isGameOver || isPaused) && (
              <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white p-6 text-center">
                {isGameOver ? (
                  <>
                    <div className="text-4xl mb-2">💀</div>
                    <h2 className="text-2xl font-bold mb-2">Perdu !</h2>
                    <p className="mb-6 text-sm">Tu as heurté un brevet logiciel.</p>
                  </>
                ) : isPaused ? (
                  <h2 className="text-2xl font-bold">PAUSE ⏸️</h2>
                ) : (
                  <>
                    <div className="text-4xl mb-2">🕹️</div>
                    <h2 className="text-2xl font-bold mb-2">Prêt ?</h2>
                    <p className="mb-6 text-sm">Utilise les flèches pour te diriger.</p>
                  </>
                )}
                
                <button
                  onClick={initGame}
                  className="bg-gradient-to-r from-nird-blue to-nird-purple px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  {isPaused ? 'Reprendre' : isGameOver ? 'Rejouer' : 'Lancer le jeu'}
                </button>
              </div>
            )}

            {/* Nourriture */}
            <div
              className="absolute flex items-center justify-center text-sm md:text-base transition-all duration-300"
              style={{
                left: `${(food.x / GRID_SIZE) * 100}%`,
                top: `${(food.y / GRID_SIZE) * 100}%`,
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
              }}
            >
              🐧
            </div>

            {/* Serpent */}
            {snake.map((segment, index) => {
              const isHead = index === 0
              return (
                <div
                  key={`${segment.x}-${segment.y}-${index}`}
                  className={`absolute rounded-sm transition-all duration-100 ${
                    isHead ? 'bg-nird-purple z-10' : 'bg-nird-blue/80'
                  }`}
                  style={{
                    left: `${(segment.x / GRID_SIZE) * 100}%`,
                    top: `${(segment.y / GRID_SIZE) * 100}%`,
                    width: `${100 / GRID_SIZE}%`,
                    height: `${100 / GRID_SIZE}%`,
                    borderRadius: isHead ? '4px' : '1px'
                  }}
                />
              )
            })}
          </div>

          {/* Contrôles Mobiles */}
          <div className="mt-6 grid grid-cols-3 gap-2 md:hidden max-w-[200px] mx-auto">
            <div />
            <ControlButton onClick={() => directionRef.current !== 'DOWN' && (directionRef.current = 'UP')} icon="⬆️" />
            <div />
            <ControlButton onClick={() => directionRef.current !== 'RIGHT' && (directionRef.current = 'LEFT')} icon="⬅️" />
            <ControlButton onClick={() => setIsPaused(!isPaused)} icon={isPaused ? "▶️" : "⏸️"} />
            <ControlButton onClick={() => directionRef.current !== 'LEFT' && (directionRef.current = 'RIGHT')} icon="➡️" />
            <div />
            <ControlButton onClick={() => directionRef.current !== 'UP' && (directionRef.current = 'DOWN')} icon="⬇️" />
            <div />
          </div>

        </div>

        <Link to="/" className="mt-8 text-gray-500 hover:text-nird-purple underline text-sm">
          Retour à l'accueil
        </Link>
      </div>
      <ChatBot />
    </div>
  )
}

function ControlButton({ onClick, icon }: { onClick: () => void, icon: string }) {
  return (
    <button 
      onClick={(e) => {
        e.preventDefault() // Empêche le double-tap zoom
        onClick()
      }}
      className="bg-gray-100 hover:bg-gray-200 active:bg-nird-blue active:text-white rounded-xl p-3 shadow-sm transition-colors text-xl font-bold h-14 flex items-center justify-center"
    >
      {icon}
    </button>
  )
}