import styles from './PopupDefault.module.css'
import ModalPopupCheckAlternativeAnswer from './ModalPopupCheckAlternativeAnswer';
import { TiDeleteOutline } from "react-icons/ti";
import ButtonDefault from '../ButtonDefault';

function PopupDefault({ specificStyles, text, activePopup, activeModalPopupCheckAlternativeAnswer, 
  textModalForMoreInformation, textModalDescription, activeButtons, nextQuestion, multiQuestion, 
  multiDeleteQuestionOption, multiDeleteMultiQuestionMultiOption, specificStyleButton,
  specificStyleButtons }) {

  function closePopup() { // função para desativar o popup ao clicar no icone delete    
    activePopup(false)

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
          onClick={() => (nextQuestion !== undefined ? multiDeleteQuestionOption() : null) || (multiQuestion !== undefined ? multiDeleteMultiQuestionMultiOption() : null)}
          buttonName='Yes'
          specificStyleButton={specificStyleButton} 
        />

        <ButtonDefault 
          onClick={() => activePopup(false)} 
          buttonName='No'
          specificStyleButton={specificStyleButton} 
        />

      </div>}

    </div>
  )
}

export default PopupDefault
