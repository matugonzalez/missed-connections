const AttemptsLeft = ({livesLeft}) => {
    const hearts = []
    for(let i=1; i<livesLeft+1; i++){
        hearts.push('❤️')
    }
    while (hearts.length < 5) {
        hearts.push('☠️')
    } 
    return (
        <>
            {hearts === 0 
            ? <span>No lives left</span> 
            : hearts.map((item, index) => {
                return (
                    <div
                    key={index} 
                    className={`animate-[bounce_${livesLeft < 3 ? 1 : 2}s_ease-in_infinite]`}
                    >
                        {item}
                    </div>
                )
            })}
        </>
    )
}
export default AttemptsLeft