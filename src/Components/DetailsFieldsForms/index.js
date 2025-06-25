import styles from './DetailsFieldsForms.module.css'

function DetailsFieldsForms({ detailsFields, textDetail }) {
    return (
        <div className={`${detailsFields} ${styles.detailsFieldsForms}`}>
            <span className={styles.textSpeech}>{textDetail}</span>
        </div>

    )

}

export default DetailsFieldsForms
