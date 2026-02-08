import styles from './ModalResults.module.css'
import Modal from 'react-modal'
import ButtonDefault from '../ButtonDefault'
import soundClick from '../../audios/clickAudio.mp3'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalResults() {

    const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // pegando os dados do resultado
    const { dataResults, mute } = useOutletContext()

    function openModal() {
        setModalIsOpen(true);
 
        // setTimeout para dar tempo de capturar as variáveis ao abrir a modal e, em seguida, mudar a cor de acordo com os resultados
        setTimeout(() => {
            if (dataResults.numCorrectOption > dataResults.numIncorrectOption) {
                const corrects = document.querySelector('#corrects')
                const pontuations = document.querySelector('#pontuations')
                const performances = document.querySelector('#performances')

                corrects?.classList.add(`${styles.correct}`)
                pontuations?.classList.add(`${styles.correct}`)
                performances?.classList.add(`${styles.correct}`)

            } else if (dataResults.numCorrectOption < dataResults.numIncorrectOption) {
                const incorrects = document.querySelector('#incorrects')
                const pontuations = document.querySelector('#pontuations')
                const performances = document.querySelector('#performances')

                incorrects?.classList.add(`${styles.incorrect}`)
                pontuations?.classList.add(`${styles.incorrect}`)
                performances?.classList.add(`${styles.incorrect}`)

            }

        }, 0)
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
                className={styles.iconesTextos} 
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
                contentLabel="Example Modal"
                overlayClassName={styles.modalOverlay}
                className={styles.modalContent}
            >
                {/* imagem delete do react icon */}
                <TiDeleteOutline
                    onClick={() => {closeModal(); mute === false && audioClick.play()}} 
                    className={styles.modalImageDelete} 
                />

                <h1>✔REAL-TIME RESULT:</h1>
                <p id='corrects' className={styles.test}>Correct questions: {dataResults.numCorrectOption}</p>
                <p id='incorrects'>Incorrect questions: {dataResults.numIncorrectOption}</p>
                <p id='correctsIncorrects'>All questions: {dataResults.allCorrectIncorrectResults}</p>
                <p id='pontuations'>Pontuation: {dataResults.pontuationResults}</p>
                <p id='performances'>Performance: {dataResults.performanceResults}</p>
                <p>Note: Minimum passing performance: 72% across 65 questions.</p>

            </Modal>

        </div>
    )
}

export default ModalResults;
