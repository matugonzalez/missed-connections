const EndGame = ({result, restartGame}) => {

    return (
        <div className='flex flex-col items-center'>
            {
                (result === 'win')
                ? <span className='text-green-500 p-8 text-3xl font-semibold'>You win</span>
                : <span className='text-red-500 p-8 text-3xl font-semibold'>You Lost</span>

            }

            <button
                className='bg-purple-700 px-8 py-2 rounded-xl hover:bg-purple-600'
                onClick={restartGame}
            >
                Restart Game
            </button>
        </div>
    )
}
export default EndGame