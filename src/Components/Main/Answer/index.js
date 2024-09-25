import styles from './Answer.module.css';

function Answer({ answer, descriptionP, srcImg, answerDisplay, descriptionDisplay, setDescriptionDisplay, answerMainDisplay, descriptionMainDisplay, setDescriptionMainDisplay }) {

    function description() {

        if (document.querySelector('#descriptionId').classList.contains(`${styles.visibleDescription}`)) {
                descriptionDisplay && setDescriptionDisplay(styles.invisible)
                descriptionMainDisplay && setDescriptionMainDisplay(styles.invisible)

            } else {
                descriptionDisplay && setDescriptionDisplay(styles.visibleDescription)
                descriptionMainDisplay && setDescriptionMainDisplay(styles.visibleDescription)

            }
        }

    return(
        <section            
            id='answerId' 
            className={`${answerDisplay} ${answerMainDisplay}` } 
        >   
            <div
                onClick={description}
                id='answerTitle'                
                className={styles.answerTitle}
            >
                <h3>{answer}</h3>
                <p>Click here for more information</p>
            </div>           
            <p 
                id='descriptionId' 
                className={`${descriptionDisplay} ${descriptionMainDisplay}`}
            >
                {descriptionP}
            </p>
        </section>
    )
}

export default Answer;
