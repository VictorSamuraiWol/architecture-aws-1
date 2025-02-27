import { useState } from 'react';
import Footer from '../../Components/Footer';
import styles from './PageBase.module.css';
import { Outlet } from 'react-router-dom';
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";

function PageBase() {

    const [validateSound, setValidateSound] = useState(true)
    const [appearSound, setAppearSound] = useState(false)

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
            <Outlet context={{ validateSound, setValidateSound, setAppearSound }} />

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

            <Footer />
        </>

    )
}

export default PageBase;
