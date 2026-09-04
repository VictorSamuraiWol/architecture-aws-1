import styles from './MenuTools.module.css'
import ModalEditMenu from './ModalEditMenu'
import PopupDeleteQuestionOption from '../Popups/PopupDeleteQuestionOption'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import { MdDelete } from "react-icons/md"
import { useOutletContext } from 'react-router-dom'

function MenuTools({ questionMain, optionMain, optionMainNumberId, questionMulti, 
  optionMulti, optionMultiNumberId, setAnswerDescriptionDisplay, setDescriptionDisplay }) {

  // pegando as variáveis através do 'useContext' do componente 'DataContext'
  const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, setDeleteApi, ableDisableMenuTools, setAbleDisableMenuTools } = useContext(DataContext)

  const { activePageDemo } = useOutletContext()

  const [activePopupDelete, setActivePopupDelete] = useState(false) // ativa o componente 'PopupDeleteQuestionOption'
  const [staticQuestionAlert, setStaticQuestionAlert] = useState(false) // ativa o componente PopupAlertMessage
  const [fewer3SigleChoice, setFewer3SigleChoice] = useState(false) // ativa o componente PopupAlertMessage
  const [fewer3MultipleChoice, setFewer3MultipleChoice] = useState(false) // ativa o componente PopupAlertMessage

  // função que deleta a questão de única escolha atual
  async function onDeleteQuestion(questionMain) {
    const url = `http://localhost:3001/listQuestionsMain/${questionMain.id}`

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json()
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  // função que deleta a opção de única escolha atual
  async function onDeleteOption(optionMainNumberId) {
    const url = `http://localhost:3001/listOptionsMain/${optionMainNumberId[1]}`

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json()
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  // função que deleta a questão de múltipla escolha atual
  async function onDeleteQuestionMulti(questionMulti) {
    const url = `http://localhost:3001/listQuestionsMulti/${questionMulti.id}`

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json()
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  // função que deleta a opção de múltipla escolha atual
  async function onDeleteOptionMulti(optionMultiNumberId) {
    const url = `http://localhost:3001/listOptionsMulti/${optionMultiNumberId[1]}`

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json()
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  function listMatchedQuestionsOptions() { // função que mostra todas as questões e opções correspondentes da Main e MultiMain
    const listNumbersQuestionsMain = listUnicQuestionsContext.map(question => question.questionNumber)    
    const listNumbersOptionsMain = listUnicOptionsContext.map(option => option.optionNumber) 

    const listNumbersQuestionsMulti = listMultiQuestionsContext.map(question => question.questionNumber)    
    const listNumbersOptionsMulti = listMultiOptionsContext.map(option => option.optionNumber) 
 
    let matched = null

    if (questionMain) {      
      matched = listNumbersQuestionsMain.filter(question => listNumbersOptionsMain.includes(question))

    } else if (questionMulti) {
      matched = listNumbersQuestionsMulti.filter(question => listNumbersOptionsMulti.includes(question))

    }
        
    return matched

  }

  function multiDeleteQuestionOption() { // função que deleta a questão e opção correspondente da página 'NewPageMain'
    if (activePageDemo) {
      setStaticQuestionAlert(true)
      setActivePopupDelete(false)

    } else {
      if (listUnicQuestionsContext.length >= 3 && listUnicOptionsContext.length >= 3 && listMatchedQuestionsOptions().length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões e opções de uma única escolha disponíveis       
          onDeleteQuestion(questionMain)
          onDeleteOption(optionMainNumberId)
          setAnswerDescriptionDisplay(styles.invisibleAnswerDescription) // tornar a resposta da próxima questão invisível
          setDescriptionDisplay(styles.invisibleDescription) // tornar a descrição da próxima questão invisível
          console.log('Deleted successfully!')
      
      } else {
        setFewer3SigleChoice(true)
        setActivePopupDelete(false) // fecha o 'PopupDeleteQuestionOption' 
      
      }

    }

  }

  function multiDeleteMultiQuestionMultiOption() { // função que deleta a questão e opção correspondente da página 'PageMulti'
    if (listMultiQuestionsContext.length >= 3 && listMultiOptionsContext.length >=3 && listMatchedQuestionsOptions().length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões e opções de múltipla escolha disponíveis
      onDeleteQuestionMulti(questionMulti)
      onDeleteOptionMulti(optionMultiNumberId)
      setAnswerDescriptionDisplay(styles.invisibleAnswerDescription) // tornar a resposta da próxima questão invisível
      setDescriptionDisplay(styles.invisibleDescription) // tornar a descrição da próxima questão invisível
      console.log('Deleted successfully!')
    
    } else {
      setFewer3MultipleChoice(true)
      setActivePopupDelete(false) // fecha o 'PopupDeleteQuestionOption'
    
    }

  }  

  // função para habilitar e desabilitar o Menu
  function ableDisableMenu() {
    // usando o 'operador ternário'
    ableDisableMenuTools === styles.disableMenu 
    ? setAbleDisableMenuTools(styles.menuIcons)
    : setAbleDisableMenuTools(styles.disableMenu)

  }

  return (
    <div className={styles.menu}>
      <div
        onClick={ableDisableMenu}
        className={styles.menuTools}
      >
        <span>Menu</span>

      </div>

      <div 
        className={`menuToolsSelector ${styles.menuToolsSelector} ${ableDisableMenuTools}`}        
      >
        <ModalEditMenu 
          questionMain={questionMain} 
          questionMulti={questionMulti}
          optionMain={optionMain} 
          optionMulti={optionMulti}
          optionMainNumberId={optionMainNumberId}
          optionMultiNumberId={optionMultiNumberId}
        />

        <MdDelete
          onClick={() => {setActivePopupDelete(true)}}
          className={styles.deleteIcon}            
        /> 

        {/* PopupDeleteQuestionOption */}
        {activePopupDelete && 
        <PopupDeleteQuestionOption
          specificStyles={styles.popupDelete} 
          textPopup={"Are you sure you want to delete?"}
          activePopup={setActivePopupDelete}
          activeButtons={activePopupDelete}
          questionMain={questionMain}
          questionMulti={questionMulti}
          multiDeleteQuestionOption={multiDeleteQuestionOption}
          multiDeleteMultiQuestionMultiOption={multiDeleteMultiQuestionMultiOption}
        />}

        {/* PopupAlertMessage */}
        {staticQuestionAlert && 
          <PopupAlertMessage
            text="This is a static question and cannot be removed."
            activePopup={setStaticQuestionAlert}
            specificStyles={styles.popupAlertMessage}
          /> 
        }

        {fewer3SigleChoice && 
          <PopupAlertMessage 
            text="There are fewer than 3 single-choice questions remaining. The minimum limit has been reached. Please create new questions before deleting any further ones!"
            activePopup={setFewer3SigleChoice}
            specificStyles={styles.popupAlertMessage}
          /> 
        }

        {fewer3MultipleChoice && 
          <PopupAlertMessage 
            text="There are fewer than 3 multiple-choice questions remaining. The minimum limit has been reached. Please create new questions before deleting any further ones!"
            activePopup={setFewer3MultipleChoice}
            specificStyles={styles.popupAlertMessage}
          /> 
        }

      </div>

    </div>

  )

}

export default MenuTools;
