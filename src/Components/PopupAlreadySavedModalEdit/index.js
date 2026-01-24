// import styles from './PopupAlreadySavedModalEdit.module.css'
import PopupDefault from '../PopupDefault'

function PopupAlreadySavedModalEdit({ textPopup, activePopup, specificStyles}) {
  
  return (
    <PopupDefault 
      text={textPopup} 
      activePopup={activePopup} 
      specificStyles={specificStyles}
    />
  )

}

export default PopupAlreadySavedModalEdit
