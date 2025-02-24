import Footer from '../../Components/Footer';
import styles from './PageBase.module.css'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return(
        <>
            <Outlet />
            <Footer />
        </>

    )
}

export default PageBase;
