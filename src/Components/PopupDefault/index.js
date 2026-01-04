import styles from './PopupDefault.module.css'
import { TiDeleteOutline } from "react-icons/ti";

function PopupDefault({ specificStyles, text, activePopup }) {

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

    </div>
  )
}

export default PopupDefault
