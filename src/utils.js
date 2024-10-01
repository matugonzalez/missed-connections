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

const shuffleArray =  (array) => {
    let sortedArray = array.sort((a, b) => 0.5 - Math.random())
    return sortedArray
}

const getShuffledColors = () => {
    const colors = ['gray', 'yellow', 'green', 'blue', 'indigo', 'pink']
    const shuffledColors = shuffleArray(colors)
    shuffledColors.length = 4
    return shuffledColors
}

const UTILS = {
    verifyAnswers,
    shuffleArray,
    getShuffledColors,
}

export default UTILS