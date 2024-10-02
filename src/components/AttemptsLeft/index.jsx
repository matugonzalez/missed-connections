const AttemptsLeft = ({livesLeft, difficulty}) => {
    const hearts = []
    for(let i=1; i<livesLeft+1; i++){
        hearts.push('❤️')
    }
    while (hearts.length < (difficulty === 'hard' ? 3 : 5)) {
        hearts.push('☠️')
    } 
    return (
        <div className='flex'>
            {hearts === 0 
            ? <span>No lives left</span> 
            : hearts.map((item, index) => {
                return (
                    <div
                    key={index} 
                    className={livesLeft<3?'animate-[bounce_1s_ease-in_infinite]' : 'animate-[bounce_2s_ease-in_infinite]'}
                    >
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
export default AttemptsLeft