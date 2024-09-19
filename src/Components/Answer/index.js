import styles from './Answer.module.css';

function Answer({ answer, descriptionP }) {

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
                <svg className="w-6 h-6" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M19.871 4c-5.743 0-9.286 1.666-12.87 3.736V46H5V7.161c0-.355.187-.683.493-.863C9.361 4.033 13.37 2 19.871 2c6.042 0 10.468 2.281 14.024 4.115l.305.157a.999.999 0 01.542.889V24.5h-2V7.771C29.262 5.978 25.304 4 19.872 4zM41.8 44.1H16.294V26.521h6.325l.856 1.773a1 1 0 00.901.564H41.8V44.1zm1-17.242H25.003l-.857-1.772a1 1 0 00-.9-.565h-7.952a1 1 0 00-1 1V45.1a1 1 0 001 1H42.8a1 1 0 001-1V27.858a1 1 0 00-1-1z" fill="#3F8624" fillRule="evenodd"></path></svg>
                <p>Click for more information</p>
            </div>           
            <p id='descriptionId' className={styles.description}>{descriptionP}</p>
        </section>
    )
}

export default Answer;
