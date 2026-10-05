import styles from './PopupDefault.module.css'
import ButtonDefault from '../../ButtonDefault'
import soundClick from '../../../audios/clickAudio.mp3'
import ModalPopupCheckAlternativeAnswer from '../../Modal/ModalPopupCheckAlternativeAnswer'
import { TiDeleteOutline } from "react-icons/ti"
import { useOutletContext } from 'react-router-dom'

function PopupDefault({ specificStyles, text, activePopup, activeModalPopupCheckAlternativeAnswer, 
  textModalForMoreInformation, textModalDescription, activeButtons, questionMain, questionMulti, 
  deleteMain, deleteMulti, deleteThreeMulti, specificStyleButton,
  specificStyleButtons }) {

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

  const { activePageMain, activePageMulti, activePageThreeMulti, mute } = useOutletContext()

  function closePopup() { // função para desativar o popup ao clicar no icone delete    
    activePopup(false)

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  function deleteQuestion() { // função que irá deletar a questão e opção correspondentes, exclusivo do componente 'PopupDeleteQuestionOption'
    if (activePageMain && questionMain) {
      deleteMain() // deleta a questão e opção correspondentes da 'PageMain' 
      
    } else if (activePageMulti && questionMulti) {
      deleteMulti() // deleta a questão e opção correspondentes da 'PageMulti' 

    } else if (activePageThreeMulti && questionMulti) {
      deleteThreeMulti() // deleta a questão e opção correspondentes da 'PageThreeMulti' 

    }

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  const disablePopupButton = () => {
    activePopup(false)

    mute === false && audioClick.play() // ativa o som 'audioClick'

  }

  return (
    <div
      className={`${styles.popupDefault} ${specificStyles}`}
    > 
      {/* imagem delete do react icon */}
      {activePopup && <TiDeleteOutline
          onClick={closePopup}
          className={styles.modalImageDelete} 
      />}

      <span className={styles.textPopupDefault}>{text}</span>
      
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
          onClick={deleteQuestion}
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
