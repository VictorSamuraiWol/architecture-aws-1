import styles from './PopupDefault.module.css'

function PopupDefault({ text }) {

  return (
    <div className={styles.popupDefault}> 
      <span>{text}</span>
    </div>
  )
}

export default PopupDefault
