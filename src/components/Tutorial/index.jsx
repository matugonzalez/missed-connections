import { useState } from "react"
import Intro from "../Intro"
import GameMode from "../GameMode"
import GameTopic from "../GameTopic"


const Tutorial = ({startGame, setGameMode, setGameTopic}) => {
    const [page, setPage] = useState(0)
    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    const prevPage = () => {
        setPage(prev => prev - 1)
    }
    return (
        <div className='w-full flex flex-col gap-4'>
            {(page === 0) ? <Intro /> : (page === 1) ? 
            <GameMode setGameMode={setGameMode} nextPage={nextPage}/>:
            <GameTopic setGameTopic={setGameTopic} startGame={startGame}/>
            }
            
            <div className='flex justify-center gap-4'>
                {page == 0 ? '' : <button className='bg-purple-700 hover:bg-purple-600 px-2 py-2 rounded-xl' onClick={prevPage}>Prev</button>}
                {(page == 1 || page ==2) ? '' : <button className='bg-purple-700 hover:bg-purple-600 px-2 py-2 rounded-xl' onClick={nextPage}>Next</button>}
            </div>
        </div>
    )
}
export default Tutorial