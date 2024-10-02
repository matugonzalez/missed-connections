import { useState } from "react"
import Game from "./components/Game"
import Tutorial from "./components/Tutorial"

function App() {
    const [gameStarted, setGameStarted] = useState(false)
    const [gameMode, setGameMode] = useState('')
    const startGame = () => {
        setGameStarted(true)
    }
    return (
        <div className='grid place-items-center min-h-screen bg-gray-900'>
            <div className='bg-purple-950 sm:max-w-md sm:text-xl rounded-lg p-2 text-white grid place-items-center gap-4'>
                <span className='font-bold text-3xl'>Missed Connections</span>
                {gameStarted ? <Game setGameStarted={setGameStarted} gameMode={gameMode}/> : <Tutorial startGame={startGame} setGameMode={setGameMode}/>}
            </div>
        </div>
    )
}

export default App
