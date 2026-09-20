import styles from './DescriptionIconMenuTools.module.css'

function DescriptionIconMenuTools({ activeDescriptionIcon, text }) {
  return (
    activeDescriptionIcon === text && <span className={styles.descriptionIconMenuTools}>{text}</span>
  )

}

export default DescriptionIconMenuTools
