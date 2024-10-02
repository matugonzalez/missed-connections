import { useEffect, useState } from "react"
import MOCKDATA from "../../../mockData"
import ItemBox from "../ItemBox"
import UTILS from "../../utils"
import AttemptsLeft from "../AttemptsLeft"
import EndGame from "../EndGame"
import CorrectGuesses from "../CorrectGuesses"
import GameButtons from "../GameButtons"

const Game = ({gameMode, setGameStarted}) => {
    const selectedData = MOCKDATA.answers.flatMap(item => item.answer)
    const [colors, setColors] = useState([]) 
    const [items, setItems] = useState(UTILS.shuffleArray(selectedData))
    const [pickedItems, setPickedItems] = useState([])
    const [allItemsPicked, setAllItemsPicked] = useState(true)
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [correctItems, setCorrectItems] = useState()
    const [wrongAnswer, setWrongAnswer] = useState()
    const [livesLeft, setLivesLeft] = useState(gameMode === 'hard' ? 3 : 5)
    const difficulty = gameMode

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
        let correctItems = 0
        MOCKDATA.answers.map((answer) => {
            if (UTILS.verifyAnswers(pickedItems, answer.answer).verified) {
                isCorrect= true
                setCorrectGuesses([...correctGuesses, answer])
                extractItems()
                setPickedItems([])
                if(correctGuesses.length === 4){
                    setWinGame(true)
                }
            } else {
                if (UTILS.verifyAnswers(pickedItems, answer.answer).correctItems > correctItems) {
                    correctItems = UTILS.verifyAnswers(pickedItems, answer.answer).correctItems
                }
            }
        })

        if(!isCorrect){
            setWrongAnswer(true)
            setLivesLeft(prev => prev - 1)
            setCorrectItems(correctItems)
        } else {
            setWrongAnswer(false)
        }
    }
    

    const clearPicks = () => {
        setPickedItems([])
    }

    const restartGame = () => {
        
        setGameStarted(false)
    }


    return (
        <div className='grid place-items-center gap-4'>
            {(!allItemsPicked ) ? <span className='text-red-600 font-bold text-lg animate-shake'>You have to pick 4 items</span> : ''}
            {livesLeft < 1 ? <EndGame result='loss' restartGame={restartGame}/>: 
                <>
                    {(wrongAnswer) ? <span className='text-red-600 font-bold text-lg animate-shake'>Wrong answer</span>: ''}
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
                                        setCorrectItems= {setCorrectItems}
                                    />
                                )
                            })
                        }
                    </div>
                    {(correctGuesses.length === 4) ? <EndGame result='win' restartGame={restartGame}/> : ''}
                    {(difficulty === 'easy' || difficulty === 'normal') & correctItems  === 3 ? <span>You have found 3 correct items of a group</span> : ''}
                    <AttemptsLeft livesLeft={livesLeft} difficulty={difficulty}/>
                    <GameButtons 
                        correctGuesses={correctGuesses} 
                        clearPicks={clearPicks} 
                        guessAnswers={guessAnswers}
                    />
                </> 
            }
        </div>
    )
}

export default Game