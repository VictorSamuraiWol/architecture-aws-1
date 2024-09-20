import styles from './Answer.module.css';

function Answer({ answer, descriptionP, srcImg }) {

    function description() {
        const descriptionText = document.querySelector('#descriptionId')

        if (descriptionText.classList.contains(`${styles.visible}`)) {
                // descriptionText.setAttribute('style', 'display: none')
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
            className={styles.answer} 
        >   
            <div
                onClick={() => description()}
                id='answerTitle'                
                className={styles.answerTitle}
            >
                <h3>{answer}</h3>
                <p>Click for more information</p>
            </div>           
            <p id='descriptionId' className={styles.description}>{descriptionP}</p>
        </section>
    )
}

export default Answer;
