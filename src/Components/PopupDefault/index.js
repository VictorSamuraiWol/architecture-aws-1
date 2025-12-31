import styles from './PopupDefault.module.css'
import { TiDeleteOutline } from "react-icons/ti";

function PopupDefault({ specificStyles, text, setActivePopupRepeatedAlternatives }) {

  function closePopup() { // função para desativar o popup ao clicar no icone delete
    setActivePopupRepeatedAlternatives(false)

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
