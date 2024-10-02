import Subtitle from "../Subtitle"
import Paragraph from "../Paragraph"
import CorrectGuesses from "../CorrectGuesses"
import MOCKDATA from "../../../mockData"

const tutorialAnswers = MOCKDATA.tutorialAnswers

const Intro = () => {
    return (
        <>
            <Subtitle>What's game about</Subtitle>
            <Paragraph>
                You have to make 4 groups. You'll get 16 items, with those items you should try to find things in common to make this groups.
            </Paragraph>
            <Subtitle>Example</Subtitle>
            <Paragraph>
                Let's suppose I have 16 animals, I choose <span className='text-green-400'>cow</span>, <span className='text-green-400'>pig</span>, <span className='text-green-400'>chicken</span>, <span className='text-green-400'>horse</span>, because I think they are Farm Animals.
            </Paragraph>  
            <CorrectGuesses correctGuesses={tutorialAnswers} colors={['green']}/>
            <Paragraph>
                This time i guessed right, but i could be wrong too. (these animals are in deed farm animals but in this game they could be part of another group)
            </Paragraph>
        </>
    )
}
export default Intro