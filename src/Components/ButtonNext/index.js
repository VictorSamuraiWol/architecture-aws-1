import styles from './ButtonNext.module.css'
import ButtonDefault from '../ButtonDefault'
import audioNextPage from '../../audios/paperNextPage.mp3'
import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

function ButtonNext({ 
    questionAnswerButtonNextMain, questionAnswerButtonNextMulti, onClick
}) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { mute } = useOutletContext()

    const { listUnicQuestionsContextLength } = useContext(DataContext)

    const newSoundNextPage = new Audio(audioNextPage) // som 'newSoundNextPage'
    
    // som ao mudar de questão e opção na página Main e MultiMain
    function soundNextPage() {
        mute === false && questionAnswerButtonNextMain === true &&  listUnicQuestionsContextLength && newSoundNextPage.play()
        mute === false && questionAnswerButtonNextMulti === true && listUnicQuestionsContextLength && newSoundNextPage.play() 

    }
    
    return(
        <ButtonDefault
            onClick={() => {onClick(); soundNextPage()}}
            specificStyleButton={styles.buttonNext}
            buttonName='Next'
        />
    )
}

export default ButtonNext
