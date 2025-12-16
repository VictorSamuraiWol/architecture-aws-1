import ModalMenu from './ModalMenu';
import styles from './MenuTools.module.css'
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../DataContext';

function MenuTools({ nextQuestions, setNextQuestions, optionMap, setOptionMap, optionMapNumberId, multiQuestions, setMultiQuestions, multiOptionMap, setMultiOptionMap, multiOptionMapNumberId }) {

  // pegando as variáveis através do 'useContext' do componente 'DataContext'
  const { listUnicQuestionsContext, listMultiQuestionsContext, setDeleteApi } = useContext(DataContext)

  // função que deleta a questão de única escolha atual
  async function onDeleteQuestion(nextQuestions) {
    const url = `http://localhost:3001/questions/${nextQuestions.id}`

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
  async function onDeleteQuestionMulti(multiQuestions) {
    const url = `http://localhost:3001/multiQuestions/${multiQuestions.id}`

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
      onDeleteQuestion(nextQuestions)
      onDeleteOption(optionMapNumberId)
    
    } else {
      alert('Só restam menos de 3 questões de uma única escolha, atingiu o limite mínimo de questões, por favor, é necessário criar novas questões para poder deletar!')
    
    }

  }

  function multiDeleteMultiQuestionMultiOption() {
    if (listMultiQuestionsContext?.length >= 3) { // só deletar se tiver pelo menos 3 ou mais questões de múltipla escolha disponíveis
      onDeleteQuestionMulti(multiQuestions)
      onDeleteOptionMulti(multiOptionMapNumberId)
    
    } else {
      alert('Só restam menos de 3 questões de múltipla escolha, atingiu o limite mínimo de questões, por favor, é necessário criar novas questões para poder deletar!')
    
    }

  }

  return (
    <div className={styles.menu}>
      <div className={styles.menuTools}>
        <span>Menu</span>
      </div>

      <div className={styles.menuIcons}>
        <ModalMenu 
          nextQuestions={nextQuestions} 
          setNextQuestions={setNextQuestions} 
          optionMap={optionMap} 
          setOptionMap={setOptionMap} 
          optionMapNumberId={optionMapNumberId}
          multiQuestions={multiQuestions}
          setMultiQuestions={setMultiQuestions}
          multiOptionMap={multiOptionMap}
          setMultiOptionMap={setMultiOptionMap}
          multiOptionMapNumberId={multiOptionMapNumberId}

        />

        <div>
          <MdDelete
            onClick={(nextQuestions !== undefined && multiDeleteQuestionOption) || (multiQuestions !== undefined && multiDeleteMultiQuestionMultiOption)}
            className={styles.deleteIcon}
            
          />        

        </div>    

      </div>

    </div>

  )

}

export default MenuTools;
