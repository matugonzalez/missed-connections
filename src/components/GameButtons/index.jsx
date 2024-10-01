const GameButtons = ({correctGuesses, clearPicks, guessAnswers}) => {
    return (
        <>  
            {
                correctGuesses.length === 4 ? '' :
                    <div className='flex justify-between w-full'>
                        <button 
                            className='bg-red-700 hover:bg-red-600 px-8 py-2 rounded-xl'
                            onClick={clearPicks}
                        >
                            Clear
                        </button>
                        <button 
                            className='bg-lime-700 hover:bg-lime-600 px-8 py-2 rounded-xl'
                            onClick={guessAnswers}
                        >
                            Send
                        </button>
                    </div>
            }
        </>
    )
}

export default GameButtons