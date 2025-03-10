import { useState } from 'react';
import Footer from '../../Components/Footer';
import styles from './PageBase.module.css';
import { Outlet } from 'react-router-dom';
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import backgroundImage from '../../imgs/cloud-neon-vibe.png'
import IllustrativePage from '../IllustrativePage';

function PageBase() {
    const [validateSound, setValidateSound] = useState(true)
    const [appearSound, setAppearSound] = useState(false)

    //questões corretas das páginas main e multi
    const [numCorrectOption, setNumCorrectOption] = useState(0)
    const [numIncorrectOption, setNumIncorrectOption] = useState(0)

    //inicializar com um valor que não existe no intervalo (número das questões) para poder ser gerado um número dentro do intervalo nas funções 'uniqueRandomMain e uniqueRandomMulti'
    const [lastRandomMain, setLastRandomMain] = useState(-1);
    const [lastRandomMulti, setLastRandomMulti] = useState(-1);

    const dataResults = {
        numCorrectOption, 
        numIncorrectOption, 
        allCorrectIncorrectResults: (numCorrectOption + numIncorrectOption), 
        pontuationResults: (numCorrectOption + numIncorrectOption > 0) ? `${parseInt((((numCorrectOption/(numCorrectOption + numIncorrectOption))*1000)))}/1000` : 0,
        performanceResults: (numCorrectOption + numIncorrectOption > 0) ? `${(((((numCorrectOption/(numCorrectOption+ numIncorrectOption))*1000))/1000)*100).toFixed(2)}%` : 0
    }

    function validateSoundBaseFunc() {
        const soundFull = document.querySelector('#soundFullBaseId')
        const soundMute = document.querySelector('#soundMuteBaseId')
        if (validateSound === true) {
            setValidateSound(false)
            soundFull.style.display = 'none'
            soundMute.style.display = 'flex'

        } 
        else {
            setValidateSound(true)
            soundFull.style.display = 'flex'
            soundMute.style.display = 'none'

        }
        
    }

    return(
        <>
            {appearSound === true && <img className={styles.backgroundImage} src={backgroundImage} alt='imagem de fundo' />}

            <Outlet context={{ validateSound, setValidateSound, setAppearSound, numCorrectOption, setNumCorrectOption, numIncorrectOption, setNumIncorrectOption, dataResults, lastRandomMain, setLastRandomMain, lastRandomMulti, setLastRandomMulti }} />

            {appearSound === true && <BiSolidVolumeFull 
                onClick={validateSoundBaseFunc} 
                id='soundFullBaseId' 
                className={styles.soundFull} 
            />}
            {appearSound === true && <BiSolidVolumeMute 
                onClick={validateSoundBaseFunc} 
                id='soundMuteBaseId' 
                className={styles.soundMute}
            />}

            {appearSound === true && <Footer />}

            {!appearSound && <IllustrativePage />}
        </>
    )
}

export default PageBase;
