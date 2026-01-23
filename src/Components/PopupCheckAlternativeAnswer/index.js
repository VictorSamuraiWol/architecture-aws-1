// import styles from './PopupCheckAlternativeAnswer.module.css'
import PopupDefault from '../PopupDefault'

function PopupCheckAlternativeAnswer({ specificStyles, textPopup, activePopup, textModalDescription }) {

  return (
      <PopupDefault 
        specificStyles={specificStyles} 
        text={textPopup} 
        activePopup={activePopup}
        activeModalPopupCheckAlternativeAnswer={true}
        textModalForMoreInformation={"For more information"}
        textModalDescription={textModalDescription}
      />
  )

}

export default PopupCheckAlternativeAnswer;
