// import styles from './PopupCheckNumbers.module.css'
import PopupDefault from '../PopupDefault'

function PopupCheckNumbers({ text, specificStyles, activePopup }) {

  return (
    <PopupDefault text={text} specificStyles={specificStyles} activePopup={activePopup}/>
  )

}

export default PopupCheckNumbers
