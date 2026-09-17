import styles from './ModalLogin.module.css'
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault'
import { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti"

Modal.setAppElement('#root')

function ModalLogin({ listUsers }) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  return (
    <div className={styles.container}>
      {/* responsividade: longo texto no botão */}
      <ButtonDefault
        onClick={openModal}
        buttonName='SHOW ALL NAMES AND PASSWORDS'
        specificStyleButton={styles.containerModalLongButton}
      />

      {/* responsividade: curto texto no botão */}
      <ButtonDefault
        onClick={openModal}
        buttonName='NAMES AND PASS'
        specificStyleButton={styles.containerModalShortButton}
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="ModalLogin"
          overlayClassName={styles.modalLoginOverlay}
          className={styles.modalLoginContent}
      > 
        <div className={styles.containerLoginModalDelete}>
          <h1 className={styles.containerLoginModalDeleteText}>LOGIN</h1>

          <TiDeleteOutline
            onClick={closeModal}
            className={styles.containerLoginModalDeleteIcon}
          />

        </div>

        <div className={styles.loginUsersPasswords}>
          {/* list users */}
          {listUsers && 
          listUsers.map(user => (
            <div 
              key={user.id} 
              className={styles.loginUsersPasswordsUsers}
            >
              <div className={styles.loginUsersPasswordsUser}>
                <p className={styles.loginUsersPasswordsUserName}>Name: {user.name}</p>
                <p className={styles.loginUsersPasswordsPassword}>Password: {user.password}</p>

              </div>

            </div>
          ))}

        </div>

      </Modal>

    </div>

  )

}

export default ModalLogin
