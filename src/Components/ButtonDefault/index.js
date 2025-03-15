import styles from './ButtonDefault.module.css'

function ButtonDefault({ onClick, specificStyleButton, buttonName }) {
    return(
        <button 
            onClick={onClick} 
            className={`${styles.buttonDefault} ${specificStyleButton}`}
        >  

            {buttonName}

        </button>
    )
}

export default ButtonDefault
