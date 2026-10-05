import styles from './PopupDeleteQuestionOption.module.css'
import PopupDefault from '../PopupDefault'

function PopupDeleteQuestionOption({ specificStyles, textPopup, activePopup, activeButtons, questionMain, 
  questionMulti, deleteMain, deleteMulti, deleteThreeMulti }) {
  
  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup} 
      activePopup={activePopup}
      activeButtons={activeButtons}
      questionMain={questionMain}
      questionMulti={questionMulti}
      deleteMain={deleteMain}
      deleteMulti={deleteMulti}
      deleteThreeMulti={deleteThreeMulti}
      specificStyleButtons={styles.buttons}
      specificStyleButton={styles.button}
    />

  )

}

export default PopupDeleteQuestionOption
