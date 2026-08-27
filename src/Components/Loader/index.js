import styles from "./Loader.module.css"

function Loader() { // Componente de Loader com animação

    return (
        <div className={styles.loaderSpan}>
            <div className={styles.loaderSpanAnimation}></div>
            <span className={styles.loaderSpanText}>Loading Content...</span>
        </div>
    )

}

export default Loader;
