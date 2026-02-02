import styles from './ModalEditMenu.module.css'
import Modal from 'react-modal'
import FieldModalEdit from './FieldModalEdit'
import ButtonDefault from '../../ButtonDefault'
import PopupRepeatedAlternatives from '../../PopupRepeatedAlternatives'
import PopupCheckAlternativeAnswer from '../../PopupCheckAlternativeAnswer'
import PopupAlreadySavedModalEdit from '../../PopupAlreadySavedModalEdit'
import soundClick from '../../../audios/clickAudio.mp3'
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { MdEditSquare } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import { DataContext } from '../../DataContext'
import { isEqual } from 'lodash'

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root')

function ModalEditMenu({ questionMain, optionMain, optionMainNumberId, questionMulti, 
  optionMulti, optionMultiNumberId }) {

  // criando variáveis para todos os atributos das questões
  const [questionTextMain, setQuestionTextMain] = useState(questionMain?.questionText)
  const [correctAnswerMain, setCorrectAnswerMain] = useState(questionMain?.correctAnswer)
  const [imageKeyMain, setImageKeyMain] = useState(questionMain?.imageKey)
  const [descriptionMain, setDescriptionMain] = useState(questionMain?.description)
  const [questionNumberMain] = useState(questionMain?.questionNumber)

  // criando variáveis para todos os atributos das opções
  const [optionAMain, setOptionAMain] = useState(optionMain && optionMain[0])
  const [optionBMain, setOptionBMain] = useState(optionMain && optionMain[1])
  const [optionCMain, setOptionCMain] = useState(optionMain && optionMain[2])
  const [optionDMain, setOptionDMain] = useState(optionMain && optionMain[3])
  const [optionEMain, setOptionEMain] = useState(optionMain && optionMain[4])

  // criando variáveis para todos os atributos das questões de múltipla escolha
  const [questionTextMulti, setQuestionTextMulti] = useState(questionMulti?.questionText)
  const [correctAnswerMulti, setCorrectAnswerMulti] = useState(questionMulti?.correctAnswer)
  const [imageKeyMulti, setImageKeyMulti] = useState(questionMulti?.imageKey)
  const [descriptionMulti, setDescriptionMulti] = useState(questionMulti?.description)
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

  // chamando as funções 'repeatedAlternativesDefault' e 'checkAlternativeAnswerDefault' através do 'useOutletContext' criada na PageBase
  const { repeatedAlternativesDefault, checkAlternativeAnswerDefault, mute } = useOutletContext();

  const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext } = useContext(DataContext)

  const audioClick = new Audio(soundClick) // armazena o som 'soundClick'
  
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

  const [modalIsOpen, setModalIsOpen] = useState(false)

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
      correctAnswer: correctAnswerMain,
      imageKey: imageKeyMain,
      description: descriptionMain,
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
      correctAnswer: correctAnswerMulti,
      imageKey: imageKeyMulti,
      description: descriptionMulti,
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
    const questionMainEdit = [questionTextMain, correctAnswerMain, imageKeyMain, descriptionMain] // armazenando os valores dos campos da questão única editada da 'ModalEdit'
    const optionMainEdit = [optionAMain, optionBMain, optionCMain, optionDMain, optionEMain] // armazenando os valores dos campos da opção única editada da 'ModalEdit'
      
    const newListUnicQuestionsContext = listUnicQuestionsContext.map(questions => [questions.questionText, questions.correctAnswer, questions.imageKey, questions.description]) // armazenando uma nova lista de questões do 'backend', sem o número das questões
    const newListUnicOptionsContext = listUnicOptionsContext.map(options => [options.optionA, options.optionB, options.optionC, options.optionD, options.optionE]) // armazenando uma nova lista de opções do 'backend', sem o número das opções
    
    const findQuestionMain = newListUnicQuestionsContext.filter(question => isEqual(question, questionMainEdit))[0] // comparação usando a biblioteca 'isEqual'
    const findOptionMain = newListUnicOptionsContext.filter(question => isEqual(question, optionMainEdit))[0] // comparação usando a biblioteca 'isEqual'

    // formulário 2    
    const questionMultiEdit = [questionTextMulti, correctAnswerMulti, imageKeyMulti, descriptionMulti] // armazenando os valores dos campos da questão múltipla editada da 'ModalEdit'
    const optionMultiEdit = [optionAMulti, optionBMulti, optionCMulti, optionDMulti, optionEMulti] // armazenando os valores dos campos da opção múltipla editada da 'ModalEdit'

    const newListMultiQuestionsContext = listMultiQuestionsContext.map(questions => [questions.questionText, questions.correctAnswer, questions.imageKey, questions.description]) // armazenando uma nova lista de questões do 'backend', sem o número das questões
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
    if (activePopupAlreadySaved() === true) {
      event.preventDefault() // prevenir atualização, caso esta questão e opção já exista no 'backend'
      setActivePopupAlreadySavedModalEdit(true) // habilita o 'PopupAlreadySavedModalEdit'

    } else {
      setActivePopupAlreadySavedModalEdit(false) // desabilita o 'PopupAlreadySavedModalEdit'

      if (checkAlternativeAnswerDefault(newOption, newMultiOption, (correctAnswerMain || correctAnswerMulti)) === true) {
        event.preventDefault() // prevenir atualização, caso tenha alternativas repetidas
        setActivePopupcheckAlternativeAnswerModalForms1(true)

      } else {
        if (repeatedAlternativesDefault(newOption, newMultiOption).length > 0) {
          event.preventDefault() // prevenir atualização, caso tenha alternativas repetidas
          setActivePopupRepeatedAlternativesModalEdit(true)

          setTimeout(() => {
            setActivePopupRepeatedAlternativesModalEdit(false) // desativa o popup em 10s

          }, 10000)

        } else {
          onSaveModalQuestion() // salvando a questão única
          onSaveModalOption() // salvando a opção única
          
          setActivePopupRepeatedAlternativesModalEdit(false) // desativar o popup, caso esteja visível na tela

          console.log('Saved!')
          alert('Saved successfully!')

        }

      }

    }

  }

  // função que vai salvar quaisquer alterações feitas na questão e opção de múltipla escolha atual (função usada para ativar duas funções 'fetch de método PUT')
  function multiFunctionsPageMulti(event) {
    if (activePopupAlreadySaved() === true) {
      event.preventDefault() // prevenir atualização, caso esta questão e opção já exista no 'backend'
      setActivePopupAlreadySavedModalEdit(true) // habilita o 'PopupAlreadySavedModalEdit'

    } else {
      setActivePopupAlreadySavedModalEdit(false) // desabilita o 'PopupAlreadySavedModalEdit'

      if (checkAlternativeAnswerDefault(newOption, newMultiOption, (correctAnswerMain || correctAnswerMulti)) === true) {
          event.preventDefault() // prevenir atualização, caso tenha alternativas repetidas
          setActivePopupcheckAlternativeAnswerModalForms2(true)

        } else {
        if (repeatedAlternativesDefault(newOption, newMultiOption).length > 0) {
          event.preventDefault() // prevenir atualização, caso tenha alternativas repetidas
          setActivePopupRepeatedAlternativesModalEdit(true)

          setTimeout(() => {
            setActivePopupRepeatedAlternativesModalEdit(false) // desativa o popup em 10s

          }, 10000)

        } else {    
          onSaveModalMultiQuestion() // salvando a questão múltipla
          onSaveModalMultiOption() // salvando a opção múltipla
          
          setActivePopupRepeatedAlternativesModalEdit(false) // desativar o popup, caso esteja visível na tela

          console.log('Saved!')
          alert('Saved successfully!')

        }

      }
    
    }

  }

  // funções para capturar os valores dos campos das questões de única escolha
  function onChangeModalQuestion(event) {
    setQuestionTextMain(event.target.value)

  }

  function onChangeModalAnswer(event) {
    setCorrectAnswerMain(event.target.value)

  }

  function onChangeModalImage(event) {
    setImageKeyMain(event.target.value)

  }

  function onChangeModalDescription(event) {
    setDescriptionMain(event.target.value)

  }

  //funções para capturar os valores dos campos das opções de única escolha
  function onChangeModalOptionA(event) {
    setOptionAMain(event.target.value)

  }

  function onChangeModalOptionB(event) {
    setOptionBMain(event.target.value)

  }

  function onChangeModalOptionC(event) {
    setOptionCMain(event.target.value)

  }

  function onChangeModalOptionD(event) {
    setOptionDMain(event.target.value)

  }

  function onChangeModalOptionE(event) {
    setOptionEMain(event.target.value)

  }

  // funções para capturar os valores dos campos das questões de múltipla escolha
  function onChangeModalQuestionMulti(event) {
    setQuestionTextMulti(event.target.value)

  }

  function onChangeModalAnswerMulti(event) {
    setCorrectAnswerMulti(event.target.value)

  }

  function onChangeModalImageMulti(event) {
    setImageKeyMulti(event.target.value)

  }

  function onChangeModalDescriptionMulti(event) {
    setDescriptionMulti(event.target.value)

  }

  //funções para capturar os valores dos campos das opções de múltipla escolha
  function onChangeModalOptionAMulti(event) {
    setOptionAMulti(event.target.value)

  }

  function onChangeModalOptionBMulti(event) {
    setOptionBMulti(event.target.value)

  }

  function onChangeModalOptionCMulti(event) {
    setOptionCMulti(event.target.value)

  }

  function onChangeModalOptionDMulti(event) {
    setOptionDMulti(event.target.value)

  }

  function onChangeModalOptionEMulti(event) {
    setOptionEMulti(event.target.value)

  }

  // função que limpa todos os campos do formulário
  function cleanForm() {
    if (questionMain && optionMain) {
      setQuestionTextMain('')
      setCorrectAnswerMain('')
      setImageKeyMain('')
      setDescriptionMain('')
      setOptionAMain('')
      setOptionBMain('')
      setOptionCMain('')
      setOptionDMain('')
      setOptionEMain('')

    }

    if (questionMulti && optionMulti) {
      setQuestionTextMulti('')
      setCorrectAnswerMulti('')
      setImageKeyMulti('')
      setDescriptionMulti('')
      setOptionAMulti('')
      setOptionBMulti('')
      setOptionCMulti('')
      setOptionDMulti('')
      setOptionEMulti('')

    }
      
  }

  return (
    <div className={styles.container}>
      <div
          onClick={openModal}
          className={styles.iconsTexts} 
      >
        <MdEditSquare
        className={styles.editIcon}
        />                

      </div>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName={styles.modalOverlay}
          className={styles.modalContent}
      >
        {/* imagem delete do react icon */}
        <TiDeleteOutline
            onClick={() => {closeModal(); mute === false && audioClick.play()}} 
            className={styles.modalImageDelete} 
        />      

        <h1>EDITAR CARD:</h1>

        {questionMain && optionMain && <form // form1, este form só aparecerá se tiver uma questão e opção da PageMain
          onSubmit={multiFunctionsNewPageMain}
          className={styles.formModal}
        > 
          {/* todos os campos das questões */}
          <FieldModalEdit
            onChangeModal={onChangeModalQuestion}
            name="Question*"
            newValue={questionTextMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalAnswer}
            name="Answer*"
            newValue={correctAnswerMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalImage}
            name="Image"
            newValue={imageKeyMain}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalDescription}
            name="Description*"
            newValue={descriptionMain}
            required={true}

          />

          {/* todos os campos das opções */}
          <FieldModalEdit
            onChangeModal={onChangeModalOptionA}
            name="OptionA*"
            newValue={optionAMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionB}
            name="OptionB*"
            newValue={optionBMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionC}
            name="OptionC*"
            newValue={optionCMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionD}
            name="OptionD*"
            newValue={optionDMain}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionE}
            name="OptionE"
            newValue={optionEMain}

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

        {questionMulti && optionMulti && <form // form2, este form só aparecerá se tiver uma questão e opção da PageMulti
          onSubmit={multiFunctionsPageMulti}
          className={styles.formModal}
        > 
          {/* todos os campos das questões de múltipla escolha */}
          <FieldModalEdit
            onChangeModal={onChangeModalQuestionMulti}
            name="Question*"
            newValue={questionTextMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalAnswerMulti}
            name="Answer*"
            newValue={correctAnswerMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalImageMulti}
            name="Image"
            newValue={imageKeyMulti}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalDescriptionMulti}
            name="Description*"
            newValue={descriptionMulti}
            required={true}

          />

          {/* todos os campos das opções de múltipla escolha */}
          <FieldModalEdit
            onChangeModal={onChangeModalOptionAMulti}
            name="OptionA*"
            newValue={optionAMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionBMulti}
            name="OptionB*"
            newValue={optionBMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionCMulti}
            name="OptionC*"
            newValue={optionCMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionDMulti}
            name="OptionD*"
            newValue={optionDMulti}
            required={true}

          />
          <FieldModalEdit
            onChangeModal={onChangeModalOptionEMulti}
            name="OptionE"
            newValue={optionEMulti}

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
      
      </Modal>

    </div>

  )
}

export default ModalEditMenu;
