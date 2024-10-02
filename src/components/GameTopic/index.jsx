import { useState, useEffect } from "react"
import MOCKDATA from "../../../mockData"
import UTILS from "../../utils"

const GameTopic = ({startGame, setGameTopic}) => {
    const topics = MOCKDATA.ANSWERS.flatMap(answers => answers.name)
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(UTILS.getShuffledColors())
    }, [])

    return (
        <div className='w-full flex flex-col gap-4'>
            {topics.map((topic, index) => {
                return (
                    <button 
                        key={index}
                        className={`bg-${colors[index]}-700 animate-shake font-medium text-xl rounded-lg p-2`}
                        onClick={() => {
                            setGameTopic(topic)
                            startGame()
                        }}
                    >
                        
                        <span>{topic}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default GameTopic