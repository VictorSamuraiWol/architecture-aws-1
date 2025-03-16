import styles from './ButtonDefault.module.css'

function ButtonDefault({ onClick, specificStyleButton, specificType, buttonName }) {
    return(
        <button 
            onClick={onClick} 
            className={`${styles.buttonDefault} ${specificStyleButton}`}
            type={specificType}
        >  

            {buttonName}

        </button>
    )
}

export default ButtonDefault
