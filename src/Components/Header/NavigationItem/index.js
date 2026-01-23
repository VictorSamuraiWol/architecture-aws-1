import styles from './NavigationItem.module.css'

function NavigationItem({ component, itemName, onClick }) {
    return(
        <li
            onClick={onClick}
            className={`link ${styles.link}`}
        >
                {component}{itemName}
        </li>
    )
}

export default NavigationItem
