import ModalMenu from './ModalMenu';
import styles from './MenuTools.module.css'
import { MdDelete } from "react-icons/md";

function MenuTools({ nextQuestions, setNextQuestions, optionMap, setOptionMap, optionMapNumberId, multiQuestions, setMultiQuestions, multiOptionMap, setMultiOptionMap, multiOptionMapNumberId }) {
 
  function deleteQuestionOptionMultiQuestionMultiOption () {
    console.log("delete teste")
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
            onClick={deleteQuestionOptionMultiQuestionMultiOption}
            className={styles.deleteIcon}
            
          />        

        </div>    

      </div>

    </div>

  )

}

export default MenuTools;
