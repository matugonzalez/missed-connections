const AttemptsLeft = ({livesLeft}) => {
    const hearts = []
    for(let i=0; i<livesLeft; i++){
        hearts.push(<span key={i}>❤️</span>)
    }
    return (
        <>
            {!hearts 
            ? <span>No lives left</span> 
            : hearts}
        </>
    )
}
export default AttemptsLeft