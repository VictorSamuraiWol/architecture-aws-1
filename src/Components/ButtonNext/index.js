import styles from './ButtonNext.module.css'
import ButtonDefault from '../ButtonDefault'
import audioNextPage from '../../audios/paperNextPage.mp3'
import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

function ButtonNext({ 
    questionAnswerButtonNextMain, questionAnswerButtonNextMultiAndThreeMulti, onClick
}) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { mute } = useOutletContext()

    const { listUnicQuestionsContextLength, getApi, setGetApi } = useContext(DataContext)

    const newSoundNextPage = new Audio(audioNextPage) // som 'newSoundNextPage'
   
    // som ao mudar de questão e opção na página Main e MultiMain
    function soundNextPage() {
        mute === false && questionAnswerButtonNextMain && listUnicQuestionsContextLength && newSoundNextPage.play()
        mute === false && questionAnswerButtonNextMultiAndThreeMulti && listUnicQuestionsContextLength && newSoundNextPage.play() 

    }
    
    return(
        <ButtonDefault
            onClick={() => {onClick(); soundNextPage(); setGetApi(!getApi)}}
            specificStyleButton={styles.buttonNext}
            buttonName='Next'
        />
    )
}

export default ButtonNext
