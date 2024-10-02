import Paragraph from "../Paragraph"
import Subtitle from "../Subtitle"

const GameMode = ({startGame, setGameMode}) => {
    return (
        <div className='flex flex-col gap-2'>
            <Subtitle>Picking Game Difficulty</Subtitle> 
            <Paragraph>The game has 3 Difficulties each one harder than the other:</Paragraph>
            <Paragraph>🌱Easy Mode: Unlimited Lives and Help</Paragraph>
            <Paragraph>😐Normal Mode: Only 5 Lives and bit of Help</Paragraph>
            <Paragraph>🥶Hard Mode: Only 3 Lives and become delusional</Paragraph>
            <Subtitle>Pick one and Start the Game</Subtitle>
            <div className='flex gap-4 justify-center'>
                <button 
                className='bg-lime-500 hover:bg-lime-400 px-2 py-2 rounded-xl'
                onClick={() => {
                    startGame()
                    setGameMode('easy')
                }}
                >Easy</button>

                <button 
                className='bg-yellow-500 hover:bg-yellow-400 px-2 py-2 rounded-xl'
                onClick={() => {
                    startGame()
                    setGameMode('normal')
                }}
                >Normal</button>

                <button 
                className='bg-blue-500 hover:bg-blue-400 px-2 py-2 rounded-xl'
                onClick={() => {
                    startGame()
                    setGameMode('hard')
                }}
                >Hard</button>
            </div>
        </div>
    )
}
export default GameMode