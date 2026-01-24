import styles from './PopupDeleteQuestionOption.module.css'
import PopupDefault from '../PopupDefault'

function PopupDeleteQuestionOption({ specificStyles, textPopup, activePopup, activeButtons, nextQuestion, 
  multiQuestion, multiDeleteQuestionOption, multiDeleteMultiQuestionMultiOption }) {
  
  return (
    <PopupDefault 
      specificStyles={specificStyles} 
      text={textPopup} 
      activePopup={activePopup}
      activeButtons={activeButtons}
      nextQuestion={nextQuestion}
      multiQuestion={multiQuestion}
      multiDeleteQuestionOption={multiDeleteQuestionOption}
      multiDeleteMultiQuestionMultiOption={multiDeleteMultiQuestionMultiOption}
      specificStyleButtons={styles.buttons}
      specificStyleButton={styles.button}
    />

  )

}

export default PopupDeleteQuestionOption
