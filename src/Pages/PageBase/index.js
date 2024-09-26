import styles from './PageBase.module.css'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return(
        <Outlet />
    )
}

export default PageBase;
