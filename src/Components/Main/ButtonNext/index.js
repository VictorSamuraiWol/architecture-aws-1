import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';
import { useOutletContext } from 'react-router-dom';

function ButtonNext({ newRequest }) {

    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { validateSound } = useOutletContext(); 

    //som quando mudar de página
    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        validateSound === true && newSoundNextPage.play()

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
