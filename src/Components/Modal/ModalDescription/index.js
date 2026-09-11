import styles from './ModalDescription.module.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root')

function ModalDescription({ imagesDescriptions, imageDescription, description }) {
    
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

        <div className={styles.modalDescription}>
          {/* só irá aparecer a imagem na descrição se ela estiver na lista de imagens salvas */}
          {imagesDescriptions[imageDescription] !== undefined ? 
            <img 
              className={styles.imageDescriptionStyle} 
              src={imagesDescriptions[imageDescription]} 
              alt='img'
            /> 
            : 
            null
          }
          {description}

        </div>

      </Modal>

    </div>
  )
}

export default ModalDescription;
