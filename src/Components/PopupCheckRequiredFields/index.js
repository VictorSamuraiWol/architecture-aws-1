// import styles from './PopupCheckRequiredFields.module.css'
import PopupDefault from '../PopupDefault'

function PopupCheckRequiredFields({ text, specificStyles, activePopup }) {

  return (
    <PopupDefault 
      text={text} 
      specificStyles={specificStyles} 
      activePopup={activePopup}
    />
  )

}

export default PopupCheckRequiredFields
