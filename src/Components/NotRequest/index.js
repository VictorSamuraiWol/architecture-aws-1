import styles from './NotRequest.module.css';
import image from '../../imgs/cloud-neon-vibe.png'

function NotRequest() {
    return (
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
        </div>
    )

}

export default NotRequest