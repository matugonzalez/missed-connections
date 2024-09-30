const verifyAnswers = (pickedITems, answers) => {
    let a = 0
    pickedITems.map((item) => {
        answers.map((answer) => {
            if(JSON.stringify(item) === JSON.stringify(answer)) {
                a = a+1
            }
        })
    })
    if (a < 4) return false 
    if (a === 4) return true
}

const UTILS = {
    verifyAnswers,
}

export default UTILS