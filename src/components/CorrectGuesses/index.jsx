const CorrectGuesses = ({correctGuesses, colors}) => {
    return (
        <>
            {correctGuesses.length === 0 ? '' :
                correctGuesses.map((correctGuess, index)=>{
                    return (
                        <div 
                            className= {`${'bg-'+colors[index]+ '-700'} animate-shake font-medium text-xl rounded-lg p-2 col-span-4 text-center grid place-items-center`}
                            key={index}
                        >
                            <span>{correctGuess?.name}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CorrectGuesses