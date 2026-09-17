import styles from './HeaderLogin.module.css'
import ModalLogin from '../Modal/ModalLogin'
import logo from '../../imgs/icon-start.png'
import ButtonDefault from '../ButtonDefault'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import { Link, useOutletContext } from 'react-router-dom'

function HeaderLogin({ setActivateNavigateDefault }) {
  
  const [passwordUser, setPasswordUser] = useState('')

  const [alertLoginMessage, setAlertLoginMessage] = useState('')

  const [ableAlertLoginMessage, setAbleAlertLoginMessage] = useState(false)

  const { listUsers } = useContext(DataContext)

  const { nameUser, setNameUser, setLoginValidate } = useOutletContext()

  const onLoginValidate = (e) => {
    e.preventDefault()

    let matchedUser;

    if (nameUser || passwordUser) {
      matchedUser = listUsers.filter(user =>
        (user.name.toLowerCase() === nameUser.toLowerCase().trim()) && 
        (user.password.toLowerCase() === passwordUser.toLowerCase().trim()))[0]

      if (matchedUser) {
        setLoginValidate(true)
        // setActivateNavigateDefault(true)

      } else {
        setLoginValidate(false)
        setAlertLoginMessage('Invalid user.')

        setAbleAlertLoginMessage(true)
        setTimeout(() => setAbleAlertLoginMessage(false), 3000)

      }

    } else {
      setAlertLoginMessage('Please, fill all fields.')
      setAbleAlertLoginMessage(true)
      setTimeout(() => setAbleAlertLoginMessage(false), 3000)
    
    }

  }

  return(
    <div className={styles.login}>
      <Link className={styles.linkImg} to='/'>
        <img
          className={styles.iconStartLogin}
          src={logo} 
          alt='imgLogo'
        />
      </Link>

      <ModalLogin listUsers={listUsers} />

      <form 
        onSubmit={onLoginValidate}
        className={styles.formLogin}
      >
        <div className={styles.formLabelsInputs}>
          <div className={styles.formLabelInput}>
            <label htmlFor='name'>Name:</label>

            <input
              onChange={(e) => setNameUser(e.target.value)}
              value={nameUser}
              className={styles.inputStyle}
              id='name'
              name='name'
              autoComplete='off'
            />

          </div>

          <div className={styles.formLabelInput}>
            <label htmlFor='password'>Password:</label>

            <input 
              onChange={(e) => setPasswordUser(e.target.value)}
              value={passwordUser}
              className={styles.inputStyle}
              id='password'
              name='password'
              autoComplete='off'
            />

          </div>

          <span
            id={styles.alertLoginMessage}
            className={ableAlertLoginMessage ? styles.alertLoginMessageAble : styles.alertLoginMessageDisable}
          >
            {alertLoginMessage}
          </span>

        </div>

        <div className={styles.containerButton}>
          <ButtonDefault 
            buttonName='SIGN IN'
            specificStyleButton={styles.specificStylesLoginButton}
            specificType='submit'
          />

        </div>

      </form>

    </div>
  )
}

export default HeaderLogin
