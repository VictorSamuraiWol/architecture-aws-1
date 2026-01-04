import styles from './PopupCheckAlternativeAnswer.module.css'
import PopupDefault from '../PopupDefault';

function PopupCheckAlternativeAnswer({ specificStyles, textPopup, activePopup }) {

  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup} 
      activePopup={activePopup}

    />
  )

}

export default PopupCheckAlternativeAnswer;
