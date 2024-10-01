import { useEffect, useState } from "react"
import MOCKDATA from "../mockdata"
import ItemBox from "./components/ItemBox"
import UTILS from "./utils"
import AttemptsLeft from "./components/AttemptsLeft"
import EndGame from "./components/EndGame"
import CorrectGuesses from "./components/CorrectGuesses"
import GameButtons from "./components/GameButtons"

function App() {
    const selectedData = MOCKDATA.animeList.slice(0, 16)
    const answers = MOCKDATA.answers
    const [colors, setColors] = useState([]) 
    const [items, setItems] = useState(UTILS.shuffleArray(selectedData))
    const [pickedItems, setPickedItems] = useState([])
    const [allItemsPicked, setAllItemsPicked] = useState(true)
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [wrongAnswer, setWrongAnswer] = useState()
    const [livesLeft, setLivesLeft] = useState(5)

    useEffect(() => {
        setColors(UTILS.getShuffledColors())
    }, [])

    const extractItems = () => {
        const reducedItems = items.filter(item => 
            !pickedItems.some(pickedItem => JSON.stringify(item) === JSON.stringify(pickedItem))
        )
        setItems(reducedItems)
    }

    const guessAnswers = () => {
        if (pickedItems.length !== 4) {
            setAllItemsPicked(false)
            return 
        }

        let isCorrect = false

        answers.map((answer) => {
            if (UTILS.verifyAnswers(pickedItems, answer.answer)) {
                isCorrect= true
                setCorrectGuesses([...correctGuesses, answer])
                extractItems()
                if(correctGuesses.length === 4){
                    setWinGame(true)
                }
            }
        })

        if(!isCorrect){
            setWrongAnswer(true)
            setLivesLeft(prev => prev - 1)
        } else {
            setWrongAnswer(false)
        }
    }
    

    const clearPicks = () => {
        setPickedItems([])
    }

    const restartGame = () => {
        setLivesLeft(5)
        setWrongAnswer(false)
        setCorrectGuesses([])
        setItems(selectedData)
        clearPicks()
    }

    return (
        <div className='grid place-items-center min-h-screen bg-gray-900'>
            <div className='bg-purple-950 sm:max-w-md sm:text-xl rounded-lg p-2 text-white grid place-items-center gap-4'>
                <span className='font-bold text-3xl'>Missed Connections</span>
                {   
                    (!allItemsPicked ) ? 
                    <span className='text-red-600 font-bold text-lg animate-shake'>You have to pick 4 items</span> : ''
                }

                {
                livesLeft < 1 ? <EndGame result='loss' restartGame={restartGame}/>: 
                    <>
                        {
                            (wrongAnswer) ? 
                            <span className='text-red-600 font-bold text-lg animate-shake'>Wrong answer</span>: ''
                        }
                        <div className='grid grid-cols-4 grid-rows-4 gap-2'>
                            <CorrectGuesses correctGuesses={correctGuesses} colors={colors}/>
                            {
                                items.map((item, i) => {
                                    return (
                                        <ItemBox 
                                            key={i} 
                                            item={item} 
                                            pickedItems={pickedItems} 
                                            setPickedItems={setPickedItems} 
                                            setAllItemsPicked= {setAllItemsPicked}
                                            setWrongAnswer= {setWrongAnswer}
                                        />
                                    )
                                })
                            }
                        </div>
                        {
                            (correctGuesses.length === 4) ? 
                            <EndGame result='win' restartGame={restartGame}/> : ''
                        }
                        
                        <AttemptsLeft livesLeft={livesLeft}/>
                        <GameButtons 
                            correctGuesses={correctGuesses} 
                            clearPicks={clearPicks} 
                            guessAnswers={guessAnswers}
                        />
                    </> 
                }
            </div>
        </div>
    )
}

export default App
