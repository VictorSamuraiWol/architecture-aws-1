import styles from './PopupDeleteQuestionOption.module.css'
import PopupDefault from '../PopupDefault'

function PopupDeleteQuestionOption({ specificStyles, textPopup, activePopup, activeButtons, questionMain, 
  questionMulti, multiDeleteQuestionOption, multiDeleteMultiQuestionMultiOption }) {
  
  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup} 
      activePopup={activePopup}
      activeButtons={activeButtons}
      questionMain={questionMain}
      questionMulti={questionMulti}
      multiDeleteQuestionOption={multiDeleteQuestionOption}
      multiDeleteMultiQuestionMultiOption={multiDeleteMultiQuestionMultiOption}
      specificStyleButtons={styles.buttons}
      specificStyleButton={styles.button}
    />

  )

}

export default PopupDeleteQuestionOption
