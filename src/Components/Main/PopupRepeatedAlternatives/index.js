import styles from './PopupRepeatedAlternatives.module.css'
import PopupDefault from '../../PopupDefault';

function PopupRepeatedAlternatives({ specificStyles, textPopup }) {

  return (
    <PopupDefault specificStyles={specificStyles} text={textPopup} />
  )

}

export default PopupRepeatedAlternatives;
