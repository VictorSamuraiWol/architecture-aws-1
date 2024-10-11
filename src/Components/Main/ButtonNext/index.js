import styles from './ButtonNext.module.css';
import soundNextPage from '../../../audios/paperNextPage.mp3';

function ButtonNext({ newRequest }) {

    //sound when pass the next page
    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        newSoundNextPage.play()

    }
    
    return(
        <>
            <button
                //two functions in the onClick event 
                onClick={() => { soundNextPageFunc() ; newRequest && newRequest() }} 
                className={styles.buttonnext}
            >
                Next
            </button>
        </>
    )
}

export default ButtonNext;
