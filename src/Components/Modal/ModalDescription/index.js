import styles from './ModalDescription.module.css'
import Modal from 'react-modal'
import ModalImageDescription from '../ModalImageDescription'
import { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root')

function ModalDescription({ questionMain, questionMulti, iconsDescriptions, iconDescription, imagesDescriptions, description }) {
    
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
          {iconsDescriptions[iconDescription] !== undefined ? 
            <img 
              className={styles.iconDescriptionStyle} 
              src={iconsDescriptions[iconDescription]} 
              alt='img'
            /> 
            :
            iconDescription && iconsDescriptions[iconDescription] === undefined ? // se tiver algo digitado no atributo iconDescription, mas não encontra a imagem correspondente 
            <img 
              className={styles.iconDescriptionStyle} 
              src={iconsDescriptions['iconNotFound']} 
              alt='img'
            />
            :
            null // se não tiver nada digitado no atributo iconDescription não aparecerá nada
          }
          {description}

          {/* esta modal só irá aparecer se tiver uma imagem na questão para mostrar */}
          {(questionMain?.imageDescription || questionMulti?.imageDescription) && 
            <ModalImageDescription 
              questionMain={questionMain} 
              questionMulti={questionMulti}
              imagesDescriptions={imagesDescriptions}
            />
          }

        </div>

      </Modal>

    </div>
  )
}

export default ModalDescription;
