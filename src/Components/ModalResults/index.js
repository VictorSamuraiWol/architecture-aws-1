import styles from './ModalResults.module.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useOutletContext } from 'react-router-dom';
import ButtonDefault from '../ButtonDefault';
import { TiDeleteOutline } from "react-icons/ti";

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalResults() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    // pegando os dados do resultado
    const { dataResults } = useOutletContext()

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

            } else {
                console.error('Há algo errado com o setTimeout do componente ModalResults, l.41')

            }

        }, 0)
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <div
                onClick={openModal}
                className={styles.iconesTextos} 
            >

                <ButtonDefault 
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

                <h1>✔REAL-TIME RESULT:</h1>
                <p id='corrects' className={styles.test}>Correct questions: {dataResults.numCorrectOption}</p>
                <p id='incorrects'>Incorrect questions: {dataResults.numIncorrectOption}</p>
                <p id='correctsIncorrects'>All questions: {dataResults.allCorrectIncorrectResults}</p>
                <p id='pontuations'>Pontuation: {dataResults.pontuationResults}</p>
                <p id='performances'>Performance: {dataResults.performanceResults}</p>
                <p>Obs: Performance para aprovação: 70% em 65 questões</p>

                {/* imagem do react icon */}
                <TiDeleteOutline
                    onClick={closeModal} 
                    className={styles.modalImageDelete} 
                />

            </Modal>

        </div>
    )
}

export default ModalResults;
