import { useEffect, useState } from "react"
import MOCKDATA from "../mockdata"
import ItemBox from "./components/ItemBox"
import UTILS from "./utils"
function App() {
    const selectedData = MOCKDATA.animeList.slice(0, 16)
    const answers = MOCKDATA.answers
    const [pickedItems, setPickedItems] = useState([])
    const [allItemsPicked, setAllItemsPicked] = useState(true)
    
    const guessAnswers = () => {
        if (pickedItems.length !== 4) {
            setAllItemsPicked(false)
            return 
        }

        if (UTILS.answerIsCorrect(pickedItems, answers[0])) {
            console.log('Answer IS correct')
        } else {
            console.log('Incorrect Answer')
            clearPicks()
        }
    }

    const clearPicks = () => {
        setPickedItems([])
    }

    return (
        <div className='grid place-items-center min-h-screen bg-gray-900'>
            <div className='bg-purple-950 rounded-lg p-2 text-white grid place-items-center gap-4'>
                <span className='font-bold text-2xl'>Missed Connections</span>
                {!allItemsPicked 
                    ? <span className='font-normal text-lg'>You have to pick 4 items</span>
                    : ''
                }
                <div className='grid grid-cols-4 grid-rows-4 gap-2'>
                    {
                        selectedData.map((item, i) => {
                            return (
                                <ItemBox 
                                    key={i} 
                                    item={item} 
                                    pickedItems={pickedItems} 
                                    setPickedItems={setPickedItems} 
                                    items={selectedData}
                                    setAllItemsPicked= {setAllItemsPicked}
                                />
                            );
                        })
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <button 
                    className='bg-red-700 px-8 py-2 rounded-xl'
                    onClick={clearPicks}
                    >
                        Clear
                    </button>
                    <button 
                    className='bg-lime-700 px-8 py-2 rounded-xl'
                    onClick={guessAnswers}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App
