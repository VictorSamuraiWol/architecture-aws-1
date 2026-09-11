import styles from './ModalImageQuestion.module.css'
import Modal from 'react-modal'
import soundClick from '../../../audios/clickAudio.mp3'
import ButtonDefault from '../../ButtonDefault'
import imageQuestionNotFound from '../../../imgs/question-imgs/imageQuestionNotFound.png'
import imageQuestion13 from '../../../imgs/question-imgs/question13.png';
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti"

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalImageQuestion({ questionMain, questionMulti }) {

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [imagesQuestions] = useState({
    none: imageQuestionNotFound,
    imageQuestion13: imageQuestion13,

  })

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
          specificStyleButton={styles.buttonImageQuestionModal} 
          buttonName='View Image'
        />

      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Image Question"
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

        {(imagesQuestions[questionMain?.imageQuestion] !== undefined || imagesQuestions[questionMulti?.imageQuestion] !== undefined) ?
        // se tiver encontrado alguma imagem disponível irá aparecer, se não irá aparecer uma imagem com image not found 
          <img
            className={styles.imageQuestion}
            src={(imagesQuestions[questionMain?.imageQuestion] || imagesQuestions[questionMulti?.imageQuestion])}
            alt='img question' 
          />
          :
          <img
            className={styles.imageQuestion}
            src={imagesQuestions['none']}
            alt='img question' 
          />
        }

      </Modal>

    </div>

  )

}

export default ModalImageQuestion;
