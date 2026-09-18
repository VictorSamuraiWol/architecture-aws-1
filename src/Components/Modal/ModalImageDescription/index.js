import styles from './ModalImageDescription.module.css'
import Modal from 'react-modal'
import soundClick from '../../../audios/clickAudio.mp3'
import ButtonDefault from '../../ButtonDefault'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalImageDescription({ questionMain, questionMulti, imagesDescriptions }) {

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // pegando os dados do resultado
  const { mute } = useOutletContext()

  function openModal() {
    setModalIsOpen(true)

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
        className={styles.containerTextTitle} 
      >
        <ButtonDefault
          onClick={sound}
          specificStyleButton={styles.buttonImageDescriptionModal} 
          buttonName='View Image'
        />

      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Image Description"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <div className={styles.containerTitleIconDelete}>
          <span className={styles.titleImage}>Image:</span>

          {/* imagem delete do react icon */}
          <TiDeleteOutline
            onClick={() => {closeModal(); mute === false && audioClick.play()}} 
            className={styles.modalIconDelete} 
          />

        </div>

        {(imagesDescriptions[questionMain?.imageDescription] !== undefined || imagesDescriptions[questionMulti?.imageDescription] !== undefined) ?
        // se tiver encontrado alguma imagem disponível irá aparecer, se não irá aparecer uma imagem com image not found 
          <img
            className={styles.imageDescription}
            src={(imagesDescriptions[questionMain?.imageDescription] || imagesDescriptions[questionMulti?.imageDescription])}
            alt='img question' 
          />
          :
          <img
            className={styles.imageDescription}
            src={imagesDescriptions['none']}
            alt='img question' 
          />
        }

      </Modal>

    </div>

  )

}

export default ModalImageDescription;
