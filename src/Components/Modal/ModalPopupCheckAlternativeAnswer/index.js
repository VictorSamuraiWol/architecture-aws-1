import styles from './ModalPopupCheckAlternativeAnswer.module.css'
import Modal from 'react-modal';
import { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";

function ModalPopupCheckAlternativeAnswer({ textModalForMoreInformation, textModalDescription, activePopup }) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)
    activePopup(false) // desativa o popup ao fechar a Modal

  }

  return (
    <div className={styles.container}>
      <div
          onClick={openModal}
      >
        <span className={styles.clickModal}>{textModalForMoreInformation}</span>

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
            onClick={closeModal} 
            className={styles.modalImageDelete} 
        />      

        <h1>INFORMATION:</h1>
          
        <p>{textModalDescription}</p>
      
      </Modal>

    </div>
  )

}

export default ModalPopupCheckAlternativeAnswer
