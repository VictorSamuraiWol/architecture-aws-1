import styles from './CamposQuestionsOptions.module.css'

function CampoQuestionsOptions({ nome1, nome2, nome3, nome4, nome5, nome6 }) {
    return(
        <>
            <div className={styles.campo}>
                    <div className={styles.labelTextarea}>
                        <label>{nome1}</label>
                        <textarea />
                    </div>
            </div>
            
            <div className={styles.campo}>
                <div className={styles.labelTextarea}>
                    <label>{nome2}</label>
                    <textarea />
                </div>
            </div>

            <div className={styles.campo}>
                <div className={styles.labelTextarea}>
                    <label>{nome3}</label>
                    <textarea />
                </div>
            </div>

            <div className={styles.campo}>
                <div className={styles.labelTextarea}>
                    <label>{nome4}</label>
                    <textarea />
                </div>
            </div>

            <div className={styles.campo}>
                <div className={styles.labelTextarea}>
                    <label>{nome5}</label>
                    <textarea />
                </div>
            </div>

            <div className={styles.campo}>
                <div className={styles.labelTextarea}>
                    <label>{nome6}</label>
                    <textarea />
                </div>
            </div>
        
        </>
    )

}

export default CampoQuestionsOptions
