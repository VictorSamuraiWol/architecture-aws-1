import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';

function ButtonNext({ newRequest }) {

    //som quando mudar de página
    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        newSoundNextPage.play()

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
