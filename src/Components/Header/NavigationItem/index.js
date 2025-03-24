import styles from './NavigationItem.module.css'

function NavigationItem({ component, itemName }) {
    return(
        <li className={`link ${styles.link}`}>{component}{itemName}</li>
    )
}

export default NavigationItem
