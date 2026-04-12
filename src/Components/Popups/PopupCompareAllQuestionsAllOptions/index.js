// import styles from './PopupCompareAllQuestionsAllOptions.module.css'
import PopupDefault from '../PopupDefault'

function PopupCompareAllQuestionsAllOptions({ specificStyles, textPopup, activePopup }) {
  
  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup}
      activePopup={activePopup}
    />

  )

}

export default PopupCompareAllQuestionsAllOptions
