import styles from './ModalSearchTools.module.css'
import Modal from 'react-modal'
import soundClick from '../../../audios/clickAudio.mp3'
import DescriptionIconMenuTools from '../../MenuTools/DescriptionIconMenuTools'
import { useContext, useState } from 'react'
import { DataContext } from '../../DataContext'
import { useOutletContext } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti"
import { FaSearch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { BsDiamondFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { MdBadge } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalSearchTools({ activeDescriptionIcon, setActiveDescriptionIcon, listUnicQuestionsContext, listMultiQuestionsContext, listThreeMultiQuestionsContext,
  listUnicOptionsContext, listMultiOptionsContext, listThreeMultiOptionsContext, questionMain, setQuestionMain, questionMulti, setQuestionMulti
 }) {

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [valueNumber, setValueNumber] = useState('')

  const [allListsQuestions] = useState([...listUnicQuestionsContext, ...listMultiQuestionsContext, ...listThreeMultiQuestionsContext])

  const [allListsOptions] = useState([...listUnicOptionsContext, ...listMultiOptionsContext, ...listThreeMultiOptionsContext])

  const [optionFilter, setOptionFilter] = useState('')

  const [activeErrorMessageInput, setActiveErrorMessageInput] = useState(false)

  const [errorMessageText, setErrorMessageText] = useState(false)

  const { questionDemo, optionDemo } = useContext(DataContext)

  const { mute, setActivateNavigateDefault, setPathNavigate, questionFilter, setQuestionFilter, setActiveSearchTools, activePageDemo, activePageMain, activePageMulti, 
    activePageThreeMulti } = useOutletContext()

  function openModal() {
    setModalIsOpen(true)
    setValueNumber('')
    setQuestionFilter('')
    setOptionFilter('')
    setActiveErrorMessageInput(false)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  const sound = () => { // ativa o som 'audioClick'
    mute === false && audioClick.play()
  }

  function onChangeNumber(e) {
    let value = null

    value = e.target.value
    setValueNumber(e.target.value)

    if (value === '0' && questionDemo.questionNumber === '0') { // se a pesquisa for o número 0
      setQuestionFilter(questionDemo)
      setOptionFilter({optionA: optionDemo[0], optionB: optionDemo[1], optionC: optionDemo[2], optionD: optionDemo[3]})

    } else if (value) {
      setQuestionFilter(allListsQuestions.filter(e => e.questionNumber === value)[0])
      setOptionFilter(allListsOptions.filter(e => e.optionNumber === value)[0])

    } else {
      setQuestionFilter('')
      setOptionFilter('')

    }

  }

  function numberSearch() {
    let tags = null
    let tagFilter = null

    if (questionFilter && optionFilter) {
      tags = questionFilter.tags
      tagFilter = tags?.filter(tag => tag === 'demo' || tag === 'main' || tag === 'multi' || tag === 'threeMulti')[0] // filtra as tags descritas

    }

    if (valueNumber === '') { // se o campo tiver vazio
      setActiveErrorMessageInput(true)
      setErrorMessageText("Please fill in this field.")

      setTimeout(() => {
        setActiveErrorMessageInput(false)

      }, 3000)

    } else if (activePageDemo && valueNumber === '0' && (listUnicQuestionsContext.length === 0 || listMultiQuestionsContext.length === 0 || listThreeMultiQuestionsContext.length === 0)) { // se não tiver com o banco de dados ativo
      setActiveErrorMessageInput(true)
      setErrorMessageText("Please choose a number different from the current page.")

      setTimeout(() => {
        setActiveErrorMessageInput(false)

      }, 3000)

    } else if (listUnicQuestionsContext.length === 0 || listMultiQuestionsContext.length === 0 || listThreeMultiQuestionsContext.length === 0) { // se não tiver com o banco de dados ativo
      setActiveErrorMessageInput(true)
      setErrorMessageText("No data found. You need to mock an API to use this search tool.")

      setTimeout(() => {
        setActiveErrorMessageInput(false)

      }, 3000)

    } else if (tagFilter) {
      if ((activePageDemo && questionDemo?.questionNumber === valueNumber) || questionMain?.questionNumber === valueNumber || questionMulti?.questionNumber === valueNumber) {
        setActiveErrorMessageInput(true)
        setErrorMessageText("Please choose a number different from the current page.")

        setTimeout(() => {
          setActiveErrorMessageInput(false)

        }, 3000)

      } else if (tagFilter === 'demo') {
        setActivateNavigateDefault(true)
        setPathNavigate('/')

      } else if (tagFilter === 'main') {
        setActivateNavigateDefault(true)
        setPathNavigate('/page-main')
        activePageMain && setQuestionMain(questionFilter) // se tiver na mesma página atualizar por aqui
        setActiveSearchTools(true)

      } else if (tagFilter === 'multi') {
        setActivateNavigateDefault(true)
        setPathNavigate('/page-multi')
        activePageMulti && setQuestionMulti(questionFilter) // se tiver na mesma página atualizar por aqui
        setActiveSearchTools(true)

      } else if (tagFilter === 'threeMulti') {
        setActivateNavigateDefault(true)
        setPathNavigate('/page-three-multi')
        activePageThreeMulti && setQuestionMulti(questionFilter) // se tiver na mesma página atualizar por aqui
        setActiveSearchTools(true)

      }

    }

  }

  return (
    <div className={styles.container}>
      <div
        onClick={openModal}
        className={styles.textIcon} 
      >
        {activeDescriptionIcon && 
          <DescriptionIconMenuTools 
            activeDescriptionIcon={activeDescriptionIcon} 
            key={'search'} 
            text={'search'}
          />
        }

        <FaSearch 
          onClick={sound}
          onMouseOver={() => setActiveDescriptionIcon('search')}
          onMouseOut={() => setActiveDescriptionIcon('')}
          className={styles.searchIcon}
        />

      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Results"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <div className={styles.containerTextIcon}>
          <h1 className={styles.textTitle}>Find question</h1>

          {/* imagem delete do react icon */}
          <TiDeleteOutline
            onClick={() => {closeModal(); mute === false && audioClick.play()}} 
            className={styles.modalImageDelete} 
          />
        </div>

        <div className={styles.containerTextDigitNumber}>
          <label htmlFor='amount'>Question number:</label>

          <div className={styles.containerStyleInput}>
            <input
              id='amound' 
              type='number' 
              name='amount' 
              placeholder='e.g. 10'
              value={valueNumber}
              onChange={(e) => onChangeNumber(e)}
              className={styles.styleInput}
            />
          </div>

          <span className={activeErrorMessageInput ? 
            styles.errorMessageInput 
            :
            styles.hiddenErrorMessageInput}
          >
            {errorMessageText}
          </span>

        </div>

        <div className={styles.containerResumeQuestionOption}>
          {questionFilter && optionFilter &&  <>
            <div className={styles.containerIdNumber}>
              <span className={styles.idSearch}><MdBadge className={styles.icons} /> Id: {questionFilter.id}</span>
              <span className={styles.numberSearch}><FaHashtag className={styles.icons} /> Number: {questionFilter.questionNumber}</span>
            </div>

            <span className={styles.questionTitleSearch}><FaQuestionCircle className={styles.icons} /> Question:</span>

            <div className={styles.containerQuestionSearch}>
              <span className={styles.questionSearch}>{questionFilter.questionText}</span>  
            </div>

            <span className={styles.optionsSearch}><MdFormatListBulleted className={styles.icons} /> Options:</span>

            <div className={styles.containerOptionSearch}>
              <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionA}</span>
            </div>

            <div className={styles.containerOptionSearch}>
              <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionB}</span>
            </div>

            <div className={styles.containerOptionSearch}>
              <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionC}</span>
            </div>

            <div className={styles.containerOptionSearch}>
              <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionD}</span>
            </div>

            {optionFilter.optionE &&<div className={styles.containerOptionSearch}>
               <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionE}</span>
            </div>}

            {optionFilter.optionF &&  <div className={styles.containerOptionSearch}>
              <span className={styles.optionSearch}><BsDiamondFill className={styles.icons} /> {optionFilter.optionF}</span>
            </div>}

          </>}

          {!questionFilter && valueNumber !== '' && 
          <span className={styles.numberNotFound}>Number not found.</span>}
          
        </div>

        <div className={styles.containerCheckClose}>
          <IoMdCheckbox
            onClick={numberSearch}
            className={styles.iconCheck} 
          />

          <IoMdCloseCircle
            onClick={closeModal}
            className={styles.iconClose} 
          />

        </div>

      </Modal>

    </div>

  )

}

export default ModalSearchTools;
