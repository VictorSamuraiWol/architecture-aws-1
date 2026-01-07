import styles from './PopupDefault.module.css'
import ModalPopupCheckAlternativeAnswer from './ModalPopupCheckAlternativeAnswer';
import { TiDeleteOutline } from "react-icons/ti";

function PopupDefault({ specificStyles, text, activePopup, activeModalPopupCheckAlternativeAnswer, textModalForMoreInformation, textModalDescription }) {

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

    </div>
  )
}

export default PopupDefault
