// import styles from './PopupSuccessfully.module.css'
import PopupDefault from '../PopupDefault'

function PopupSuccessfully({ text, activePopup, specificStyles }) {

  return (
    <PopupDefault 
      text={text} 
      activePopup={activePopup} 
      specificStyles={specificStyles} 
    />
  )

}

export default PopupSuccessfully;
