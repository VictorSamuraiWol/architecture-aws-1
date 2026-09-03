// import styles from './PopupAlertMessage.module.css'
import PopupDefault from '../PopupDefault'

function PopupAlertMessage({ text, activePopup, specificStyles }) {

  return (
    <PopupDefault 
      text={text} 
      activePopup={activePopup} 
      specificStyles={specificStyles} 
    />
  )

}

export default PopupAlertMessage
