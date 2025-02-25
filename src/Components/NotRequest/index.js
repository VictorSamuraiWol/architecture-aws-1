import styles from './NotRequest.module.css';

function NotRequest({ image }) {
    return (
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
        </div>
    )

}

export default NotRequest
