import styles from './MenuTools.module.css'
import ModalEditMenu from './ModalEditMenu'
import PopupDeleteQuestionOption from '../PopupDeleteQuestionOption'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import { MdDelete } from "react-icons/md"

function MenuTools({ nextQuestion, setNextQuestion, optionMap, setOptionMap, optionMapNumberId, multiQuestion, setMultiQuestion, 
  multiOptionMap, setMultiOptionMap, multiOptionMapNumberId }) {

  // pegando as variáveis através do 'useContext' do componente 'DataContext'
  const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, setDeleteApi, ableDisableMenuTools, setAbleDisableMenuTools } = useContext(DataContext)

  const [activePopupDelete, setActivePopupDelete] = useState(false) // ativa o componente 'PopupDeleteQuestionOption'

  // função que deleta a questão de única escolha atual
  async function onDeleteQuestion(nextQuestion) {
    const url = `http://localhost:3001/questions/${nextQuestion.id}`

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json();
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  // função que deleta a opção de única escolha atual
  async function onDeleteOption(optionMapNumberId) {
    const url = `http://localhost:3001/options/${optionMapNumberId[1]}`

    const options = {
        method: "DELETE",
    };

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
  async function onDeleteQuestionMulti(multiQuestion) {
    const url = `http://localhost:3001/multiQuestions/${multiQuestion.id}`

    const options = {
        method: "DELETE",
    };

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
  async function onDeleteOptionMulti(multiOptionMapNumberId) {
    const url = `http://localhost:3001/multiOptions/${multiOptionMapNumberId[1]}`

    const options = {
        method: "DELETE",
    };

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
    const listNumbersQuestionsMain = listUnicQuestionsContext.map(question => question.numberQuestion)    
    const listNumbersOptionsMain = listUnicOptionsContext.map(option => option.numberOption) 

    const listNumbersQuestionsMulti = listMultiQuestionsContext.map(question => question.numberQuestion)    
    const listNumbersOptionsMulti = listMultiOptionsContext.map(option => option.numberOption) 
 
    let matched = null

    if (nextQuestion) {      
      matched = listNumbersQuestionsMain.filter(question => listNumbersOptionsMain.includes(question))

    } else if (multiQuestion) {
      matched = listNumbersQuestionsMulti.filter(question => listNumbersOptionsMulti.includes(question))

    }
        
    return matched

  }

  function multiDeleteQuestionOption() { // função que deleta a questão e opção correspondente da página 'NewPageMain'
    if (listUnicQuestionsContext.length >= 3 && listUnicOptionsContext.length >= 3 && listMatchedQuestionsOptions().length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões e opções de uma única escolha disponíveis       
        onDeleteQuestion(nextQuestion)
        onDeleteOption(optionMapNumberId)
        alert('Deleted successfully!')
    
    } else {
      alert('There are fewer than 3 single-choice questions remaining. The minimum limit has been reached. Please create new questions before deleting any further ones!')
      setActivePopupDelete(false) // fecha o 'PopupDeleteQuestionOption' 
    
    }

  }

  function multiDeleteMultiQuestionMultiOption() { // função que deleta a questão e opção correspondente da página 'PageMulti'
    if (listMultiQuestionsContext.length >= 3 && listMultiOptionsContext.length >=3 && listMatchedQuestionsOptions().length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões e opções de múltipla escolha disponíveis
      onDeleteQuestionMulti(multiQuestion)
      onDeleteOptionMulti(multiOptionMapNumberId)
      alert('Deleted successfully!')
    
    } else {
      alert('There are fewer than 3 multiple-choice questions remaining. The minimum limit has been reached. Please create new questions before deleting any further ones!')
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
          nextQuestion={nextQuestion} 
          setNextQuestion={setNextQuestion} 
          optionMap={optionMap} 
          setOptionMap={setOptionMap} 
          optionMapNumberId={optionMapNumberId}
          multiQuestion={multiQuestion}
          setMultiQuestion={setMultiQuestion}
          multiOptionMap={multiOptionMap}
          setMultiOptionMap={setMultiOptionMap}
          multiOptionMapNumberId={multiOptionMapNumberId}
        />

        <MdDelete
          onClick={() => {setActivePopupDelete(true)}}
          className={styles.deleteIcon}            
        /> 

        {activePopupDelete === true && 
        <PopupDeleteQuestionOption
          specificStyles={styles.popupDeleteMain} 
          textPopup={"Are you sure you want to delete?"}
          activePopup={setActivePopupDelete}
          activeButtons={activePopupDelete}
          nextQuestion={nextQuestion}
          multiQuestion={multiQuestion}
          multiDeleteQuestionOption={multiDeleteQuestionOption}
          multiDeleteMultiQuestionMultiOption={multiDeleteMultiQuestionMultiOption}
        />}   

      </div>

    </div>

  )

}

export default MenuTools;
