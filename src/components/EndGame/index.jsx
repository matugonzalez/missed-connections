const EndGame = ({result, restartGame}) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            {
                (result === 'win')
                ? 
                <>
                    <img className='rounded-lg animate-shake' src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=329%2Cq=70%2Csharpen=1%2Cwidth=800/wp-content/uploads/happy-cat-month-1.jpg" alt="madcat" />
                    <span className='text-green-500 text-3xl font-semibold animate-shake'>You win</span>
                </>
                : 
                <>
                    <span className='text-red-500 text-3xl font-semibold'>You Lost</span>
                    <img className='rounded-lg animate-shake' src="https://eclectech.co.uk/stuff/madcatwallpaper.jpg" alt="madcat" />
                </> 

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