// import styles from './PopupQuestionSuccessfully.module.css'
import PopupDefault from '../PopupDefault'

function PopupQuestionSuccessfully({ text, activePopup, specificStyles }) {

  return (
    <PopupDefault 
      text={text} 
      activePopup={activePopup} 
      specificStyles={specificStyles} 
    />
  )

}

export default PopupQuestionSuccessfully
