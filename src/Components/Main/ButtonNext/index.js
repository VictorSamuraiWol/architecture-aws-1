import styles from './ButtonNext.module.css';

function ButtonNext({ newRequest }) {
    
    return(
        <>
            <button 
                onClick={newRequest} 
                className={styles.buttonnext}
            >
                Next
            </button>
        </>
    )
}

export default ButtonNext;
