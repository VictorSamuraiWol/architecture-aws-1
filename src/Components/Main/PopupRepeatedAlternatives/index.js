import styles from './PopupRepeatedAlternatives.module.css'
import PopupDefault from '../../PopupDefault';

function PopupRepeatedAlternatives({ specificStyles, textPopup, setActivePopupRepeatedAlternatives }) {

  return (
    <PopupDefault specificStyles={specificStyles} text={textPopup} setActivePopupRepeatedAlternatives={setActivePopupRepeatedAlternatives} />
  )

}

export default PopupRepeatedAlternatives;
