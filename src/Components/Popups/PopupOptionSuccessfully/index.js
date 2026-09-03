// import styles from './PopupOptionSuccessfully.module.css'
import PopupDefault from '../PopupDefault'

function PopupOptionSuccessfully({ text, activePopup, specificStyles }) {

  return (
    <PopupDefault 
      text={text} 
      activePopup={activePopup}
      specificStyles={specificStyles}
    />
  )

}

export default PopupOptionSuccessfully
