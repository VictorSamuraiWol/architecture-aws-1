import styles from './ModalResults.module.css';
import React, { useState } from 'react';
import deleteIcon from './delete-icon.png'
import Modal from 'react-modal';
import { useOutletContext } from 'react-router-dom';
import ButtonDefault from '../ButtonDefault';

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalResults() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // pegando os dados do resultado
    const { dataResults } = useOutletContext()

    function openModal() {
        setModalIsOpen(true);
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
                <p>Correct questions: {dataResults.numCorrectOption}</p>
                <p>Incorrect questions: {dataResults.numIncorrectOption}</p>
                <p>All questions: {dataResults.allCorrectIncorrectResults}</p>
                <p>Pontuation: {dataResults.pontuationResults}</p>
                <p>Performance: {dataResults.performanceResults}</p>
                <p>Obs: Performance para aprovação: 70% em 65 questões</p>

                <img 
                    onClick={closeModal} 
                    src={deleteIcon} 
                    alt='imagem delete'
                />

            </Modal>

        </div>
    )
}

export default ModalResults;
