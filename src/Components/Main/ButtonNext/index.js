import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';
import { useOutletContext } from 'react-router-dom';
import ButtonDefault from '../../ButtonDefault';

function ButtonNext({ 
    questionAnswerButtonNextMain, questionAnswerButtonNextMulti, uniqueRandomMain, uniqueRandomMulti, getPath, number, 
    setAnswerDisplay, setDescriptionDisplay
}) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { validateSound } = useOutletContext();

    const newSoundNextPage = new Audio(soundNextPage);
    
    // som quando mudar de página
    function soundNextPageFunc() {
        validateSound === true && (questionAnswerButtonNextMain === true || questionAnswerButtonNextMulti === true) && newSoundNextPage.play()

    }

    function newRequest() {
        if ((questionAnswerButtonNextMain === false || questionAnswerButtonNextMulti === false)) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')
        }

        // chamar as funções somente se estiverem nas páginas correspondentes
        questionAnswerButtonNextMain === false && uniqueRandomMain && uniqueRandomMain()
        questionAnswerButtonNextMulti === false && uniqueRandomMulti && uniqueRandomMulti()

        // tornar a resposta invisível ao mudar de questão
        setAnswerDisplay(styles.invisible)

        // tornar a descrição invisível ao mudar de questão
        setDescriptionDisplay(styles.invisible)

    }
    
    return(
        <ButtonDefault 
            onClick={() => { soundNextPageFunc(); newRequest && newRequest(); questionAnswerButtonNextMain === true && getPath(number) }} 
            specificStyleButton={styles.buttonNext} 
            buttonName='Next'
            
        />
    )
}

export default ButtonNext;
