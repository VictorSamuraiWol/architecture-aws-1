import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';
import { useOutletContext } from 'react-router-dom';

function ButtonNext({ questionAnswerButtonNextMain, questionAnswerButtonNextMulti }) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { validateSound } = useOutletContext();

    //som quando mudar de página
    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        validateSound === true && (questionAnswerButtonNextMain === true || questionAnswerButtonNextMulti === true) && newSoundNextPage.play()

    }

    function newRequest() {
        if ((questionAnswerButtonNextMain === false || questionAnswerButtonNextMulti === false)) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')
        } else {}

    }
    
    return(
        <>
            <button
                //duas funções ao clicar no botão para mudar de página 
                onClick={() => { soundNextPageFunc() ; newRequest && newRequest() }} 
                className={styles.buttonnext}
            >
                Next
            </button>
        </>
    )
}

export default ButtonNext;
