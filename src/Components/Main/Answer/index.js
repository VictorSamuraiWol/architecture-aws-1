import styles from './Answer.module.css';

function Answer({ answer, descriptionP, srcImg, answerDisplay, descriptionDisplay, setDescriptionDisplay }) {

    function description() {

        if (document.querySelector('#descriptionId').classList.contains(`${styles.visibleDescription}`)) {
                setDescriptionDisplay(styles.invisible)
            } else {
                setDescriptionDisplay(styles.visibleDescription)
            }
        }

    return(
        <section            
            id='answerId' 
            className={answerDisplay} 
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
                className={descriptionDisplay}
            >
                {descriptionP}
            </p>
        </section>
    )
}

export default Answer;
