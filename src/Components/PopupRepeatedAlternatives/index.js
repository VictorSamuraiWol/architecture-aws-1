// import styles from './PopupRepeatedAlternatives.module.css'
import PopupDefault from '../PopupDefault';

function PopupRepeatedAlternatives({ specificStyles, textPopup, activePopup }) {

  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup} 
      activePopup={activePopup} 
      
    />
  )

}

export default PopupRepeatedAlternatives;
