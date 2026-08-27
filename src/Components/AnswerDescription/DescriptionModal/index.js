import styles from './DescriptionModal.module.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root')

function DescriptionModal({ imagesDescriptions, imageDescription, description }) {
    
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  return (
    <div className={styles.container}>
      <span
        onClick={openModal}
        className={styles.longTextModal} 
      >
        click here for more information
      </span>

      <span
        onClick={openModal}
        className={styles.shortTextModal} 
      >
        more information
      </span>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Description Modal"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <div className={styles.containerTextIcon}>
          <span>Description</span>

          <TiDeleteOutline
            onClick={closeModal}
            className={styles.modalImageDelete} 
          />

        </div>

        <div className={styles.descriptionModal}>
          {imageDescription !== '' && <img className={styles.imageDescriptionStyle} src={imagesDescriptions[imageDescription]} alt='img' />}
          {description}

        </div>

      </Modal>

    </div>
  )
}

export default DescriptionModal;
