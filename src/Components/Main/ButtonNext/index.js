import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';
import { useOutletContext } from 'react-router-dom';
import ButtonDefault from '../../ButtonDefault';

function ButtonNext({ 
    questionAnswerButtonNextMain, questionAnswerButtonNextMulti, uniqueRandomMain, uniqueRandomMulti 
}) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { validateSound } = useOutletContext();

    // som quando mudar de página
    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        validateSound === true && (questionAnswerButtonNextMain === true || questionAnswerButtonNextMulti === true) && newSoundNextPage.play()

    }

    function newRequest() {
        if ((questionAnswerButtonNextMain === false || questionAnswerButtonNextMulti === false)) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')
        } else {}

        // chamar as funções somente se estiverem nas páginas correspondentes
        questionAnswerButtonNextMain === false && uniqueRandomMain && uniqueRandomMain()
        questionAnswerButtonNextMulti === false && uniqueRandomMulti && uniqueRandomMulti()

    }
    
    return(
        <ButtonDefault 
            onClick={() => { soundNextPageFunc() ; newRequest && newRequest() }} 
            specificStyleButton={styles.buttonNext} 
            buttonName='Next' 
        />
    )
}

export default ButtonNext;
