import styles from './Answer.module.css';

function Answer({ answer, descriptionP, srcImg, answerDisplay, descriptionDisplay }) {

    function description() {
        const descriptionText = document.querySelector('#descriptionId')

        if (descriptionText.classList.contains(`${styles.visible}`)) {
                descriptionText.setAttribute('style', 'visibility: hidden')
                descriptionText.classList.remove(`${styles.visible}`)
            } else {
                descriptionText.setAttribute('style', 'visibility: visible')
                descriptionText.classList.add(`${styles.visible}`)
            }
        }

    return(
        <section            
            id='answerId' 
            // className={styles.answer}
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
                // className={styles.description}
                className={descriptionDisplay}
            >
                {descriptionP}
            </p>
        </section>
    )
}

export default Answer;
