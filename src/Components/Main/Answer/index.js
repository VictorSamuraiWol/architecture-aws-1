import styles from './Answer.module.css';

function Answer({ answer, answerText, descriptionP, srcImg, answerDisplay, descriptionDisplay, setDescriptionDisplay, nextOptions, multiOptions }) {

    function description() {
        if (document.querySelector('#descriptionId').classList.contains(`${styles.visibleDescription}`)) {
                descriptionDisplay && setDescriptionDisplay(styles.invisible)
            } else {
                descriptionDisplay && setDescriptionDisplay(styles.visibleDescription)
            }

    }

    function descriptionOnMouseOver() {
        const descriptionNewStyle = document.querySelector('#descriptionId')
        descriptionNewStyle.classList.add(styles.descriptionNewStyleClass)
    }

    function descriptionOnMouseOut() {
        const descriptionDefaultStyle = document.querySelector('#descriptionId')
        descriptionDefaultStyle.classList.remove(styles.descriptionNewStyleClass)

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
                <h3>{(nextOptions && answer) || (multiOptions && answerText)}</h3>
                <p>Click here for more information</p>
            </div>

            <p
                onMouseOver={descriptionOnMouseOver}
                onMouseOut={descriptionOnMouseOut} 
                id='descriptionId' 
                className={descriptionDisplay}
            >
                {descriptionP}
            </p>

        </section>
    )
}

export default Answer;
