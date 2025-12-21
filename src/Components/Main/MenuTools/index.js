import styles from './MenuTools.module.css'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import ModalEditMenu from './ModalEditMenu';

function MenuTools({ nextQuestion, setNextQuestion, optionMap, setOptionMap, optionMapNumberId, multiQuestion, setMultiQuestion, 
  multiOptionMap, setMultiOptionMap, multiOptionMapNumberId }) {

  // pegando as variáveis através do 'useContext' do componente 'DataContext'
  const { listUnicQuestionsContext, listMultiQuestionsContext, setDeleteApi, ableDisableMenuTools, setAbleDisableMenuTools } = useContext(DataContext)

  // função que deleta a questão de única escolha atual
  async function onDeleteQuestion(nextQuestion) {
    const url = `http://localhost:3001/questions/${nextQuestion.id}`

    const options = {
        method: "DELETE",
    };

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting');

      } else {
        response.json();
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error);
    })

  };

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
        throw new Error('Error deleting');

      } else {
        response.json();
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error);
    })

  };

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
        throw new Error('Error deleting');

      } else {
        response.json();
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error);
    })

  };

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
        throw new Error('Error deleting');

      } else {
        response.json();
        setDeleteApi(true)

      }

    })
    .catch((error) => {
        console.error('Erro:', error);
    })

  };

  function multiDeleteQuestionOption() {
    if (listUnicQuestionsContext?.length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões de uma única escolha disponíveis
      onDeleteQuestion(nextQuestion)
      onDeleteOption(optionMapNumberId)
    
    } else {
      alert('Só restam menos de 3 questões de uma única escolha, atingiu o limite mínimo de questões, por favor, é necessário criar novas questões para poder deletar!')
    
    }

  }

  function multiDeleteMultiQuestionMultiOption() {
    if (listMultiQuestionsContext?.length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões de múltipla escolha disponíveis
      onDeleteQuestionMulti(multiQuestion)
      onDeleteOptionMulti(multiOptionMapNumberId)
    
    } else {
      alert('Só restam menos de 3 questões de múltipla escolha, atingiu o limite mínimo de questões, por favor, é necessário criar novas questões para poder deletar!')
    
    }

  }  

  // função para habilitar e desabilitar o Menu
  function ableDisableMenu() {
    // usando 'operador ternário'
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
        className={`menuToolsSelector ${ableDisableMenuTools}`}        
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

        <div>
          <MdDelete
            onClick={(nextQuestion !== undefined && multiDeleteQuestionOption) || (multiQuestion !== undefined && multiDeleteMultiQuestionMultiOption)}
            className={styles.deleteIcon}            
          />        

        </div>    

      </div>

    </div>

  )

}

export default MenuTools;
