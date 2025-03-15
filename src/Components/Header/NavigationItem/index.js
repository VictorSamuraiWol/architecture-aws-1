import styles from './NavigationItem.module.css'

function NavigationItem({ component, itemName }) {
    return(
        <li className={styles.link}>{component}{itemName}</li>
    )
}

export default NavigationItem
