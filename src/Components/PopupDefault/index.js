import styles from './PopupDefault.module.css'
import ModalPopupCheckAlternativeAnswer from './ModalPopupCheckAlternativeAnswer'
import ButtonDefault from '../ButtonDefault'
import soundClick from '../../audios/clickAudio.mp3'
import { TiDeleteOutline } from "react-icons/ti"
import { useOutletContext } from 'react-router-dom'

function PopupDefault({ specificStyles, text, activePopup, activeModalPopupCheckAlternativeAnswer, 
  textModalForMoreInformation, textModalDescription, activeButtons, nextQuestion, multiQuestion, 
  multiDeleteQuestionOption, multiDeleteMultiQuestionMultiOption, specificStyleButton,
  specificStyleButtons }) {

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

  const { mute } = useOutletContext()

  function closePopup() { // função para desativar o popup ao clicar no icone delete    
    activePopup(false)

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  function handleClick() { // função que irá deletar a questão e opção correspondentes, exclusivo do componente 'PopupDeleteQuestionOption'
    if (nextQuestion !== undefined) {
      multiDeleteQuestionOption() // deleta a questão e opção correspondentes da 'PageMain' 
      
    } else if (multiQuestion !== undefined) {
      multiDeleteMultiQuestionMultiOption() // deleta a questão e opção correspondentes da 'PageMulti' 

    }

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  const disablePopupButton = () => {
    activePopup(false)

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  return (
    <div
      className={specificStyles}
    > 
      {/* imagem delete do react icon */}
      <TiDeleteOutline
          onClick={closePopup}
          className={styles.modalImageDelete} 
      />

      <span>{text}</span>
      
      {activeModalPopupCheckAlternativeAnswer === true && 
        <ModalPopupCheckAlternativeAnswer 
          textModalForMoreInformation={textModalForMoreInformation} 
          textModalDescription={textModalDescription}
          activePopup={activePopup}
        />
      }

      {/* Os botões serão ativados somente quando o 'PopupDeleteQuestionOption' estiver ativo. */}
      {activeButtons === true && <div className={specificStyleButtons}>
        <ButtonDefault
          onClick={handleClick}
          buttonName='Yes'
          specificStyleButton={specificStyleButton} 
        />

        <ButtonDefault 
          onClick={disablePopupButton} 
          buttonName='No'
          specificStyleButton={specificStyleButton} 
        />

      </div>}

    </div>
  )
}

export default PopupDefault
