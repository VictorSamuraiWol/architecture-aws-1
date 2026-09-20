import styles from './ModalEditMenu.module.css'
import Modal from 'react-modal'
import FieldModalEdit from './FieldModalEdit'
import ButtonDefault from '../../ButtonDefault'
import soundClick from '../../../audios/clickAudio.mp3'
import PopupRepeatedAlternatives from '../../Popups/PopupRepeatedAlternatives'
import PopupCheckAlternativeAnswer from '../../Popups/PopupCheckAlternativeAnswer'
import PopupAlreadySavedModalEdit from '../../Popups/PopupAlreadySavedModalEdit'
import PopupAlertMessage from '../../Popups/PopupAlertMessage'
import DescriptionIconMenuTools from '../../MenuTools/DescriptionIconMenuTools'
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { MdEditSquare } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import { DataContext } from '../../DataContext'
import { isEqual } from 'lodash'

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root')

function ModalEditMenu({ questionMain, optionMain, optionMainNumberId, questionMulti, 
  optionMulti, optionMultiNumberId, activeDescriptionIcon, setActiveDescriptionIcon }) {

  // criando variáveis para todos os atributos das questões
  const [questionTextMain, setQuestionTextMain] = useState(questionMain?.questionText)
  const [imageQuestionMain, setImageQuestionMain] = useState(questionMain?.imageQuestion)
  const [correctAnswerMain, setCorrectAnswerMain] = useState(questionMain?.correctAnswer)
  const [iconDescriptionMain, setIconDescriptionMain] = useState(questionMain?.iconDescription)
  const [descriptionMain, setDescriptionMain] = useState(questionMain?.description)
  const [imageDescriptionMain, setImageDescriptionMain] = useState(questionMain?.imageDescription)
  const [questionNumberMain] = useState(questionMain?.questionNumber)

  // criando variáveis para todos os atributos das opções
  const [optionAMain, setOptionAMain] = useState(optionMain && optionMain[0])
  const [optionBMain, setOptionBMain] = useState(optionMain && optionMain[1])
  const [optionCMain, setOptionCMain] = useState(optionMain && optionMain[2])
  const [optionDMain, setOptionDMain] = useState(optionMain && optionMain[3])
  const [optionEMain, setOptionEMain] = useState(optionMain && optionMain[4])

  // criando variáveis para todos os atributos das questões de múltipla escolha
  const [questionTextMulti, setQuestionTextMulti] = useState(questionMulti?.questionText)
  const [imageQuestionMulti, setImageQuestionMulti] = useState(questionMulti?.imageQuestion)
  const [correctAnswerMulti, setCorrectAnswerMulti] = useState(questionMulti?.correctAnswer)
  const [iconDescriptionMulti, setIconDescriptionMulti] = useState(questionMulti?.iconDescription)
  const [descriptionMulti, setDescriptionMulti] = useState(questionMulti?.description)
  const [imageDescriptionMulti, setImageDescriptionMulti] = useState(questionMulti?.imageDescription)
  const [questionNumberMulti] = useState(questionMulti?.questionNumber)

  // criando variáveis para todos os atributos das opções de múltipla escolha
  const [optionAMulti, setOptionAMulti] = useState(optionMulti && optionMulti[0])
  const [optionBMulti, setOptionBMulti] = useState(optionMulti && optionMulti[1])
  const [optionCMulti, setOptionCMulti] = useState(optionMulti && optionMulti[2])
  const [optionDMulti, setOptionDMulti] = useState(optionMulti && optionMulti[3])
  const [optionEMulti, setOptionEMulti] = useState(optionMulti && optionMulti[4])

  const [newOption, setNewOption] = useState([]) // lista das alternativas da opção única
  const [newMultiOption, setNewMultiOption] = useState([]) // lista das alternativas da opção múltipla

  // ativa o componente 'PopupRepeatedAlternatives' na ModalEditMenu
  const [activePopupRepeatedAlternativesModalEdit, setActivePopupRepeatedAlternativesModalEdit] = useState(false) 

  // ativa o componente 'PopupCheckAlternativeAnswer' na ModalEditMenu
  const [activePopupcheckAlternativeAnswerModalForms1, setActivePopupcheckAlternativeAnswerModalForms1] = useState(false)

  // ativa o componente 'PopupCheckAlternativeAnswer' na ModalEditMenu
  const [activePopupcheckAlternativeAnswerModalForms2, setActivePopupcheckAlternativeAnswerModalForms2] = useState(false)
  
  // ativa o componente 'PopupAlreadySavedModalEdit' na ModalEditMenu
  const [activePopupAlreadySavedModalEdit, setActivePopupAlreadySavedModalEdit] = useState(false)

  const [staticQuestionEditAlert, setStaticQuestionEditAlert] = useState(false) // ativa o componente PopupAlertMessage
  const [staticQuestionClearDisabledAlert, setStaticQuestionClearDisabledAlert] = useState(false) // ativa o componente PopupAlertMessage

  // variáveis para ativar e desativar a mensagem de erro
  const [errorMessageModalEdit] = useState("This required field is empty.")
  const [voidField, setVoidField] = useState([])

  // chamando as funções 'repeatedAlternativesDefault' e 'checkAlternativeAnswerDefault' através do 'useOutletContext' criada na PageBase
  const { repeatedAlternativesDefault, checkAlternativeAnswerDefault, mute, activePageDemo, activePageMain, activePageMulti, setActiveModalEditMenu } = useOutletContext()

  const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, putApi, setPutApi } = useContext(DataContext)

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  useEffect(() => {
    setOptionAMain(optionMain && optionMain[0])
    setOptionBMain(optionMain && optionMain[1])
    setOptionCMain(optionMain && optionMain[2])
    setOptionDMain(optionMain && optionMain[3])
    setOptionEMain(optionMain && optionMain[4])

    setOptionAMulti(optionMulti && optionMulti[0])
    setOptionBMulti(optionMulti && optionMulti[1])
    setOptionCMulti(optionMulti && optionMulti[2])
    setOptionDMulti(optionMulti && optionMulti[3])
    setOptionEMulti(optionMulti && optionMulti[4])

  }, [optionMain, optionMulti]) // sempre atualizar as opções quando houver mudança

  useEffect(() => {
    setNewOption([optionAMain, optionBMain, optionCMain, optionDMain, optionEMain]) // lista das alternativas da opção única

    setNewMultiOption([optionAMulti, optionBMulti, optionCMulti, optionDMulti, optionEMulti]) // lista das alternativas da opção múltipla

  }, [optionAMain, optionBMain, optionCMain, optionDMain, optionEMain, optionAMulti, optionBMulti, optionCMulti, optionDMulti, optionEMulti])

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)
    setActivePopupcheckAlternativeAnswerModalForms1(false) // fechar o popup 'PopupCheckAlternativeAnswer' do form1 ao fechar a modal
    setActivePopupcheckAlternativeAnswerModalForms2(false) // fechar o popup 'PopupCheckAlternativeAnswer' do form2 ao fechar a modal

  }

  //função utilizando PUT para alterar as questões na API
  async function onSaveModalQuestion() {
    const jsonBody = JSON.stringify({
      questionText: questionTextMain,
      imageQuestion: imageQuestionMain,
      correctAnswer: correctAnswerMain,
      iconDescription: iconDescriptionMain,
      description: descriptionMain,
      imageDescription: imageDescriptionMain,
      questionNumber: questionMain.questionNumber, // não será alterado
      id: questionMain.id // não será alterado

    })
    await fetch(`http://localhost:3001/listQuestionsMain/${questionMain.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

    }) 
    .catch((error) => {
        console.log(error)

    })

  }

  //função utilizando PUT para alterar as opções na API
  async function onSaveModalOption() {
    const jsonBody = JSON.stringify({
      optionA: optionAMain,
      optionB: optionBMain,
      optionC: optionCMain,
      optionD: optionDMain,
      optionE: optionEMain,
      optionNumber: optionMainNumberId[0], // não será alterado 
      id: optionMainNumberId[1] // não será alterado

    })
    await fetch(`http://localhost:3001/listOptionsMain/${optionMainNumberId[1]}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody
    })

    .then((res) => res.json())
    .then((data) => {
      console.log(data)

    }) 
    .catch((error) => {
      console.log(error)

    })

  }

  //função utilizando PUT para alterar as questões de múltipla escolha na API
  async function onSaveModalMultiQuestion() {
    const jsonBody = JSON.stringify({
      questionText: questionTextMulti,
      imageQuestion: imageQuestionMulti,
      correctAnswer: correctAnswerMulti,
      iconDescription: iconDescriptionMulti,
      description: descriptionMulti,
      imageDescription: imageDescriptionMulti,
      questionNumber: questionMulti.questionNumber, // não será alterado
      id: questionMulti.id // não será alterado

    })
    await fetch(`http://localhost:3001/listQuestionsMulti/${questionMulti.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })

    .then((res) => res.json())
    .then((data) => {
      console.log(data)

    }) 
    .catch((error) => {
      console.log(error)

    })

  }

  //função utilizando PUT para alterar as opções de múltipla escolha na API
  async function onSaveModalMultiOption() {
    const jsonBody = JSON.stringify({
      optionA: optionAMulti,
      optionB: optionBMulti,
      optionC: optionCMulti,
      optionD: optionDMulti,
      optionE: optionEMulti,
      optionNumber: optionMultiNumberId[0], // não será alterado 
      id: optionMultiNumberId[1] // não será alterado

    })
    await fetch(`http://localhost:3001/listOptionsMulti/${optionMultiNumberId[1]}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      
    }) 

    .catch((error) => {
      console.log(error)
    }) 

  }

  function activePopupAlreadySaved() {
    let active

    // formulário 1
    const questionMainEdit = [questionTextMain, imageQuestionMain, correctAnswerMain, iconDescriptionMain, descriptionMain, imageDescriptionMain] // armazenando os valores dos campos da questão única editada da 'ModalEdit'
    const optionMainEdit = [optionAMain, optionBMain, optionCMain, optionDMain, optionEMain] // armazenando os valores dos campos da opção única editada da 'ModalEdit'
      
    const newListUnicQuestionsContext = listUnicQuestionsContext.map(questions => [questions.questionText, questions.correctAnswer, questions.iconDescription, questions.description]) // armazenando uma nova lista de questões do 'backend', sem o número das questões
    const newListUnicOptionsContext = listUnicOptionsContext.map(options => [options.optionA, options.optionB, options.optionC, options.optionD, options.optionE]) // armazenando uma nova lista de opções do 'backend', sem o número das opções
    
    const findQuestionMain = newListUnicQuestionsContext.filter(question => isEqual(question, questionMainEdit))[0] // comparação usando a biblioteca 'isEqual'
    const findOptionMain = newListUnicOptionsContext.filter(question => isEqual(question, optionMainEdit))[0] // comparação usando a biblioteca 'isEqual'

    // formulário 2    
    const questionMultiEdit = [questionTextMulti, imageQuestionMulti, correctAnswerMulti, iconDescriptionMulti, descriptionMulti, imageDescriptionMulti] // armazenando os valores dos campos da questão múltipla editada da 'ModalEdit'
    const optionMultiEdit = [optionAMulti, optionBMulti, optionCMulti, optionDMulti, optionEMulti] // armazenando os valores dos campos da opção múltipla editada da 'ModalEdit'

    const newListMultiQuestionsContext = listMultiQuestionsContext.map(questions => [questions.questionText, questions.correctAnswer, questions.iconDescription, questions.description]) // armazenando uma nova lista de questões do 'backend', sem o número das questões
    const newListMultiOptionsContext = listMultiOptionsContext.map(options => [options.optionA, options.optionB, options.optionC, options.optionD, options.optionE]) // armazenando uma nova lista de opções do 'backend', sem o número das opções

    const findQuestionMulti = newListMultiQuestionsContext.filter(question => isEqual(question, questionMultiEdit))[0] // comparação usando a biblioteca 'isEqual'
    const findOptionMulti = newListMultiOptionsContext.filter(question => isEqual(question, optionMultiEdit))[0] // comparação usando a biblioteca 'isEqual'

    if (findQuestionMain && findOptionMain) {
    // condição: se a questão ou opção única editada já existe no 'backend'
      active = true

    } else if (findQuestionMulti && findOptionMulti) {
    // condição: se a questão ou opção múltipla editada já existe no 'backend'
      active = true

    } else {
      active = false
      
    }
    
    return active

  }

  // função que vai salvar quaisquer alterações feitas na questão e opção atual (função usada para ativar duas funções 'fetch de método PUT')
  function multiFunctionsNewPageMain(event) {
    event.preventDefault()

    if (activePageDemo) { // se a página demo estiver aberta
      setStaticQuestionEditAlert(true)

    } else if (!questionTextMain || !correctAnswerMain || !descriptionMain || !questionNumberMain || !optionAMain ||
      !optionBMain || !optionCMain || !optionDMain) { // se tiver algum campo obrigatório vazio
        console.error("One or more fields are empty.")

    } else {
      if (activePopupAlreadySaved() === true) {
        setActivePopupAlreadySavedModalEdit(true) // habilita o 'PopupAlreadySavedModalEdit'

      } else {
        setActivePopupAlreadySavedModalEdit(false) // desabilita o 'PopupAlreadySavedModalEdit'

        if (checkAlternativeAnswerDefault(newOption, newMultiOption, (correctAnswerMain || correctAnswerMulti)) === true) {
          setActivePopupcheckAlternativeAnswerModalForms1(true)

        } else {
          if (repeatedAlternativesDefault(newOption, newMultiOption).length > 0) {
            setActivePopupRepeatedAlternativesModalEdit(true)

            setTimeout(() => {
              setActivePopupRepeatedAlternativesModalEdit(false) // desativa o popup em 10s

            }, 10000)

          } else {
            onSaveModalQuestion() // salvando a questão única
            onSaveModalOption() // salvando a opção única

            setActivePopupRepeatedAlternativesModalEdit(false) // desativar o popup, caso esteja visível na tela
            console.log('Saved successfully!')
            setPutApi(!putApi)
            setActiveModalEditMenu(true) // mostrará que esta Modal está ativada
            setTimeout(() => setActiveModalEditMenu(false), 300) // mostrará que esta Modal está desativada em 300ms, tempo que atualiza a questão que permanecerá
            closeModal()

          }  

        }

      }

    }

  }

  // função que vai salvar quaisquer alterações feitas na questão e opção de múltipla escolha atual (função usada para ativar duas funções 'fetch de método PUT')
  function multiFunctionsPageMulti(event) {
    event.preventDefault()

    if (!questionTextMulti || !correctAnswerMulti || !descriptionMulti || !questionNumberMulti || !optionAMulti ||
      !optionBMulti || !optionCMulti || !optionDMulti) { // se tiver algum campo obrigatório vazio
        console.error("One or more fields are empty.")

    } else {
      if (activePopupAlreadySaved() === true) {
        setActivePopupAlreadySavedModalEdit(true) // habilita o 'PopupAlreadySavedModalEdit'

      } else {
        setActivePopupAlreadySavedModalEdit(false) // desabilita o 'PopupAlreadySavedModalEdit'

        if (checkAlternativeAnswerDefault(newOption, newMultiOption, (correctAnswerMain || correctAnswerMulti)) === true) {
            setActivePopupcheckAlternativeAnswerModalForms2(true)

          } else {
          if (repeatedAlternativesDefault(newOption, newMultiOption).length > 0) {
            setActivePopupRepeatedAlternativesModalEdit(true)

            setTimeout(() => {
              setActivePopupRepeatedAlternativesModalEdit(false) // desativa o popup em 10s

            }, 10000)

          } else {    
            onSaveModalMultiQuestion() // salvando a questão múltipla
            onSaveModalMultiOption() // salvando a opção múltipla
            
            setActivePopupRepeatedAlternativesModalEdit(false) // desativar o popup, caso esteja visível na tela
            console.log('Saved successfully!')
            setPutApi(!putApi)
            closeModal()

          }

        }
      
      }

    }

  }

  useEffect(() => {
    function voidFieldModalEdit () { // função para capturar os campos obrigatórios que estão vazios
      if (activePageMain) {
        const fields = {
          questionTextMain,
          correctAnswerMain,
          descriptionMain,
          optionAMain,
          optionBMain,
          optionCMain,
          optionDMain
        }
        
        const voidFieldFilter = Object.entries(fields)
          .filter(([key, value]) => !value)
          .map(([key]) => key)
  
        setVoidField(voidFieldFilter)
  
      } else if (activePageMulti) {
        const fields = {
          questionTextMulti,
          correctAnswerMulti,
          descriptionMulti,
          optionAMulti,
          optionBMulti,
          optionCMulti,
          optionDMulti
        }
  
        const voidFieldFilter = Object.entries(fields)
          .filter(([key, value]) => !value)
          .map(([key]) => key)
  
        setVoidField(voidFieldFilter)
  
      }

    }

    voidFieldModalEdit()

  }, [activePageMain, activePageMulti, questionTextMain, correctAnswerMain, descriptionMain, optionAMain, optionBMain, optionCMain, optionDMain, 
    questionTextMulti, correctAnswerMulti, descriptionMulti, optionAMulti, optionBMulti, optionCMulti, optionDMulti])

  // função que limpa todos os campos do formulário
  function cleanForm() {
    if (activePageDemo) {
      setStaticQuestionClearDisabledAlert(true)

    } else {
      if (questionMain && optionMain) {
        setQuestionTextMain('')
        setImageQuestionMain('')
        setCorrectAnswerMain('')
        setIconDescriptionMain('')
        setDescriptionMain('')
        setImageDescriptionMain('')
        setOptionAMain('')
        setOptionBMain('')
        setOptionCMain('')
        setOptionDMain('')
        setOptionEMain('')

      }

      if (questionMulti && optionMulti) {
        setQuestionTextMulti('')
        setImageQuestionMulti('')
        setCorrectAnswerMulti('')
        setIconDescriptionMulti('')
        setDescriptionMulti('')
        setImageDescriptionMulti('')
        setOptionAMulti('')
        setOptionBMulti('')
        setOptionCMulti('')
        setOptionDMulti('')
        setOptionEMulti('')

      }
    
    }
      
  }

  return (
    <div className={styles.container}>
      <div
          onClick={openModal}
          className={styles.iconsTexts}
      >
        {activeDescriptionIcon && 
          <DescriptionIconMenuTools 
            activeDescriptionIcon={activeDescriptionIcon} 
            key={'edit'} 
            text={'edit'}
          />
        }

        <MdEditSquare
        onMouseOver={() => setActiveDescriptionIcon('edit')}
        onMouseOut={() => setActiveDescriptionIcon('')}
        className={styles.editIcon}
        />                

      </div>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName={styles.modalOverlay}
          className={styles.modalContent}
      >
        <div className={styles.containerTitleIconDelete}>
          <h1>EDIT CARD:</h1>

          {/* imagem delete do react icon */}
          <TiDeleteOutline
              onClick={() => {closeModal(); mute === false && audioClick.play()}} 
              className={styles.modalImageDelete} 
          />      

        </div>

        {questionMain && optionMain && 
        <form // form1, este form só aparecerá se tiver uma questão e opção da PageMain
          onSubmit={(event) => multiFunctionsNewPageMain(event)}
          className={styles.formModal}
        > 
          {/* todos os campos das questões */}
          <FieldModalEdit
            newValue={questionTextMain}
            onChangeModal={(e) => setQuestionTextMain(e.target.value)}
            name="Question*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'questionTextMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={imageQuestionMain}
            onChangeModal={(e) => setImageQuestionMain(e.target.value)}
            name="Image Question"
          />

          <FieldModalEdit
            newValue={correctAnswerMain}
            onChangeModal={(e) => setCorrectAnswerMain(e.target.value)}
            name="Answer*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'correctAnswerMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={iconDescriptionMain}
            onChangeModal={(e) => setIconDescriptionMain(e.target.value)}
            name="Icon Description"
          />

          <FieldModalEdit
            newValue={descriptionMain}
            onChangeModal={(e) => setDescriptionMain(e.target.value)}
            name="Description*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'descriptionMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={imageDescriptionMain}
            onChangeModal={(e) => setImageDescriptionMain(e.target.value)}
            name="Image Description"
          />

          {/* todos os campos das opções */}
          <FieldModalEdit
            newValue={optionAMain}
            onChangeModal={(e) => setOptionAMain(e.target.value)}
            name="OptionA*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionAMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionBMain}
            onChangeModal={(e) => setOptionBMain(e.target.value)}
            name="OptionB*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionBMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionCMain}
            onChangeModal={(e) => setOptionCMain(e.target.value)}
            name="OptionC*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionCMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionDMain}
            onChangeModal={(e) => setOptionDMain(e.target.value)}
            name="OptionD*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionDMain'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionEMain}
            onChangeModal={(e) => setOptionEMain(e.target.value)}
            name="OptionE"
          />

          {/* Botões submit e clean */}
          <div className={styles.buttons}>
            <ButtonDefault
              onClick={() => {repeatedAlternativesDefault(newOption, newMultiOption); mute === false && audioClick.play()}}
              buttonName='Save' 
              specificType='submit'
              specificStyleButton={styles.button}

            />
            <ButtonDefault 
              onClick={() => {cleanForm(); mute === false && audioClick.play()}}
              buttonName='Clean' 
              specificType='button'
              specificStyleButton={styles.button}
              
            />

          </div>
        
        </form>}

        {questionMulti && optionMulti && 
        <form // form2, este form só aparecerá se tiver uma questão e opção da PageMulti
          onSubmit={multiFunctionsPageMulti}
          className={styles.formModal}
        > 
          {/* todos os campos das questões de múltipla escolha */}
          <FieldModalEdit
            newValue={questionTextMulti}
            onChangeModal={(e) => setQuestionTextMulti(e.target.value)}
            name="Question*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'questionTextMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={imageQuestionMulti}
            onChangeModal={(e) => setImageQuestionMulti(e.target.value)}
            name="Image Question"
          />

          <FieldModalEdit
            newValue={correctAnswerMulti}
            onChangeModal={(e) => setCorrectAnswerMulti(e.target.value)}
            name="Answer*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'correctAnswerMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={iconDescriptionMulti}
            onChangeModal={(e) => setIconDescriptionMulti(e.target.value)}
            name="Icon Description"
          />

          <FieldModalEdit
            newValue={descriptionMulti}
            onChangeModal={(e) => setDescriptionMulti(e.target.value)}
            name="Description*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'descriptionMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={imageDescriptionMulti}
            onChangeModal={(e) => setImageDescriptionMulti(e.target.value)}
            name="Image Description"
          />

          {/* todos os campos das opções de múltipla escolha */}
          <FieldModalEdit
            newValue={optionAMulti}
            onChangeModal={(e) => setOptionAMulti(e.target.value)}
            name="OptionA*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionAMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionBMulti}
            onChangeModal={(e) => setOptionBMulti(e.target.value)}
            name="OptionB*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionBMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionCMulti}
            onChangeModal={(e) => setOptionCMulti(e.target.value)}
            name="OptionC*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionCMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionDMulti}
            onChangeModal={(e) => setOptionDMulti(e.target.value)}
            name="OptionD*"
            errorMessageText={errorMessageModalEdit}
            errorTargetLabel={'optionDMulti'}
            voidField={voidField}
          />

          <FieldModalEdit
            newValue={optionEMulti}
            onChangeModal={(e) => setOptionEMulti(e.target.value)}
            name="OptionE"
          />

          {/* Botões submit e clean */}
          <div className={styles.buttons}>
            <ButtonDefault
              onClick={() => {repeatedAlternativesDefault(newOption, newMultiOption); mute === false && audioClick.play()}}
              buttonName='Save' 
              specificType='submit'
              specificStyleButton={styles.button}
            />
            <ButtonDefault
              onClick={() => {cleanForm(); mute === false && audioClick.play()}}
              buttonName='Clean' 
              specificType='button'
              specificStyleButton={styles.button}   
            />

          </div>
        
        </form>}

        {/* PopupRepeatedAlternatives */}
        {activePopupRepeatedAlternativesModalEdit && 
          <PopupRepeatedAlternatives 
            specificStyles={styles.popupRepeatedModalEdit} 
            textPopup={"There are repeated alternatives. Please, before editing the option, modify the duplicated alternatives and then proceed with editing the question and the option."} 
            activePopup={setActivePopupRepeatedAlternativesModalEdit}            
          />
        }

        {/* PopupCheckAlternativeAnswer */}
        {activePopupcheckAlternativeAnswerModalForms1 && 
          <PopupCheckAlternativeAnswer 
            specificStyles={styles.popupCheckModalForm} 
            activePopup={setActivePopupcheckAlternativeAnswerModalForms1}
            textPopup={`No alternative matching the answer to question ${questionNumberMain} was found. Please ensure that, before editing the question and the option, one of the alternatives is exactly the same as the answer to question. Then proceed with editing this question and the option. For more information, click the phrase below.`} 
            textModalDescription={`Choose one: (1)Include in the answer to question ${questionNumberMain} the correct alternative from the option highlighted below: ${optionAMain}, ${optionBMain}, ${optionCMain}, ${optionDMain}${optionEMain !== '' ? ` or ${optionEMain}.` : `.`} (2)Include in one of the alternatives of this option the answer to question ${questionNumberMain}, highlighted below: ${correctAnswerMain}.`}
          />
        }

        {activePopupcheckAlternativeAnswerModalForms2 && 
          <PopupCheckAlternativeAnswer 
            specificStyles={styles.popupCheckModalForm} 
            activePopup={setActivePopupcheckAlternativeAnswerModalForms2}
            textPopup={`The two alternatives included in the answer of question ${questionNumberMulti} were not found. Please ensure that, before editing the question and the option, the alternatives Option 1 and Option 2 are exactly the same as those included in the answer of question. Then proceed with editing the question and the option. For more information, click the phrase below.`} 
            textModalDescription={`Choose One: (1)Include in the answer of question ${questionNumberMulti} the two correct alternatives from the option highlighted below: ${optionAMulti} e ${optionBMulti}. (2)Include in the first two alternatives (Option A and Option B) of this option the answer included in question ${questionNumberMulti}, highlighted below: ${correctAnswerMulti}. `}
          />
        }

        {/* PopupAlreadySavedModalEdit */}
        {activePopupAlreadySavedModalEdit &&  
          <PopupAlreadySavedModalEdit
            specificStyles={styles.popupAlreadySaved} 
            activePopup={setActivePopupAlreadySavedModalEdit}
            textPopup={'No changes detected. Please update one or more fields and try saving again.'}
          />
        }

        {/* {PopupAlertMessage} */}
        {staticQuestionEditAlert &&
          <PopupAlertMessage 
            text="This is a static question and cannot be edited here."
            activePopup={setStaticQuestionEditAlert}
            specificStyles={styles.popupAlertMessage}
          />
        }

        {staticQuestionClearDisabledAlert &&
          <PopupAlertMessage 
            text="This is a static question and clearing is disabled."
            activePopup={setStaticQuestionClearDisabledAlert}
            specificStyles={styles.popupAlertMessage}
          />
        }
      
      </Modal>

    </div>

  )
}

export default ModalEditMenu;
