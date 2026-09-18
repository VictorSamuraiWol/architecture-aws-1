import styles from './ModalResults.module.css'
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault'
import soundClick from '../../../audios/clickAudio.mp3'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalResults() {

    const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [activeCorrect, setActiveCorrect] = useState(false)
    const [activeIncorrect, setActiveIncorrect] = useState(false)

    // pegando os dados do resultado
    const { dataResults, mute } = useOutletContext()

    function openModal() {
        setModalIsOpen(true)

        if (dataResults.numCorrectOption > dataResults.numIncorrectOption) {
            setActiveCorrect(true)
            setActiveIncorrect(false)

        } else if (dataResults.numCorrectOption < dataResults.numIncorrectOption) {
            setActiveIncorrect(true)
            setActiveCorrect(false)

        }

    }

    function closeModal() {
        setModalIsOpen(false)

    }

    const sound = () => { // ativa o som 'audioClick'
        mute === false && audioClick.play()
    }

    return (
        <div className={styles.container}>
            <div
                onClick={openModal}
                className={styles.iconsTexts} 
            >

                <ButtonDefault
                    onClick={sound}
                    specificStyleButton={styles.buttonResultsModal} 
                    buttonName='Results'
                />

            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal Results"
                overlayClassName={styles.modalOverlay}
                className={styles.modalContent}
            >
                {/* imagem delete do react icon */}
                <TiDeleteOutline
                    onClick={() => {closeModal(); mute === false && audioClick.play()}} 
                    className={styles.modalImageDelete} 
                />

                <h1>✔REAL-TIME RESULT:</h1>
                <p id='corrects' className={styles.correct}>Correct questions: {dataResults.numCorrectOption}</p>
                <p id='incorrects' className={styles.incorrect}>Incorrect questions: {dataResults.numIncorrectOption}</p>
                <p id='correctsIncorrects'>All questions: {dataResults.allCorrectIncorrectResults}</p>
                <p id='pontuations' className={activeCorrect ? styles.correct : activeIncorrect ? styles.incorrect : null}>Pontuation: {dataResults.pontuationResults}</p>
                <p id='performances' className={activeCorrect ? styles.correct : activeIncorrect ? styles.incorrect : null}>Performance: {dataResults.performanceResults}%</p>

            </Modal>

        </div>
    )
}

export default ModalResults;
