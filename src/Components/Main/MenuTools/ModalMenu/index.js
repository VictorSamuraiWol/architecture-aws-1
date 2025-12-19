import styles from './ModalMenu.module.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { MdEditSquare } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Field from './Field';
import ButtonDefault from '../../../ButtonDefault';

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalMenu({ nextQuestion, setNextQuestion, optionMap, setOptionMap, optionMapNumberId, multiQuestion, setMultiQuestion, multiOptionMap, setMultiOptionMap, multiOptionMapNumberId }) {

  // criando variáveis para todos os atributos das questões
  const [question, setQuestion] = useState(nextQuestion?.question);
  const [answer, setAnswer] = useState(nextQuestion?.answer);
  const [srcImg, setSrcImg] = useState(nextQuestion?.srcImg);
  const [description, setDescription] = useState(nextQuestion?.descriptionP);

  // criando variáveis para todos os atributos das opções
  const [option1, setOption1] = useState(optionMap && optionMap[0]);
  const [option2, setOption2] = useState(optionMap && optionMap[1]);
  const [option3, setOption3] = useState(optionMap && optionMap[2]);
  const [option4, setOption4] = useState(optionMap && optionMap[3]);
  const [option5, setOption5] = useState(optionMap && optionMap[4]);

  // criando variáveis para todos os atributos das questões de múltipla escolha
  const [questionMulti, setQuestionMulti] = useState(multiQuestion?.question);
  const [answerMulti, setAnswerMulti] = useState(multiQuestion?.answerText);
  const [srcImgMulti, setSrcImgMulti] = useState(multiQuestion?.srcImg);
  const [descriptionMulti, setDescriptionMulti] = useState(multiQuestion?.descriptionP);

  // criando variáveis para todos os atributos das opções de múltipla escolha
  const [option1Multi, setOption1Multi] = useState(multiOptionMap && multiOptionMap[0]);
  const [option2Multi, setOption2Multi] = useState(multiOptionMap && multiOptionMap[1]);
  const [option3Multi, setOption3Multi] = useState(multiOptionMap && multiOptionMap[2]);
  const [option4Multi, setOption4Multi] = useState(multiOptionMap && multiOptionMap[3]);
  const [option5Multi, setOption5Multi] = useState(multiOptionMap && multiOptionMap[4]);

  useEffect(() => {
    setOption1(optionMap && optionMap[0])
    setOption2(optionMap && optionMap[1])
    setOption3(optionMap && optionMap[2])
    setOption4(optionMap && optionMap[3])
    setOption5(optionMap && optionMap[4])

    setOption1Multi(multiOptionMap && multiOptionMap[0])
    setOption2Multi(multiOptionMap && multiOptionMap[1])
    setOption3Multi(multiOptionMap && multiOptionMap[2])
    setOption4Multi(multiOptionMap && multiOptionMap[3])
    setOption5Multi(multiOptionMap && multiOptionMap[4])

  }, [optionMap, multiOptionMap]) // sempre atualizar as opções quando houver mudança

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);

  }

  function closeModal() {
    setModalIsOpen(false);

  }

  //função utilizando PUT para alterar as questões na API
  async function onSaveModalQuestion() {
      const jsonBody = JSON.stringify({
          question: question,
          answer: answer,
          srcImg: srcImg,
          descriptionP: description,
          numberQuestion: nextQuestion.numberQuestion, // não será alterado
          id: nextQuestion.id // não será alterado
      })
      await fetch(`http://localhost:3001/questions/${nextQuestion.id}`, {
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
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
          option5: option5,
          numberOption: optionMapNumberId[0], // não será alterado 
          id: optionMapNumberId[1] // não será alterado
      })
      await fetch(`http://localhost:3001/options/${optionMapNumberId[1]}`, {
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
          question: questionMulti,
          answerText: answerMulti,
          srcImg: srcImgMulti,
          descriptionP: descriptionMulti,
          numberQuestion: multiQuestion.numberQuestion, // não será alterado
          id: multiQuestion.id // não será alterado
      })
      await fetch(`http://localhost:3001/multiQuestions/${multiQuestion.id}`, {
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
          option1: option1Multi,
          option2: option2Multi,
          option3: option3Multi,
          option4: option4Multi,
          option5: option5Multi,
          numberOption: multiOptionMapNumberId[0], // não será alterado 
          id: multiOptionMapNumberId[1] // não será alterado
      })
      await fetch(`http://localhost:3001/multiOptions/${multiOptionMapNumberId[1]}`, {
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

  // função que vai salvar quaisquer alterações feitas na questão e opção atual
  function multiFunctionsNewPageMain() {
    onSaveModalQuestion();
    onSaveModalOption();

    console.log('Saved!!!')
    alert('Saved successfully!!!')

  }

  // função que vai salvar quaisquer alterações feitas na questão e opção de múltipla escolha atual
  function multiFunctionsPageMulti() {
    onSaveModalMultiQuestion();
    onSaveModalMultiOption();

    console.log('Saved!!!')
    alert('Saved successfully!!!')

  }

  // funções para capturar os valores dos campos das questões
  function onChangeModalQuestion(event) {
    setQuestion(event.target.value)

  }

  function onChangeModalAnswer(event) {
    setAnswer(event.target.value)

  }

  function onChangeModalImage(event) {
    setSrcImg(event.target.value)

  }

  function onChangeModalDescription(event) {
    setDescription(event.target.value)

  }

  //funções para capturar os valores dos campos das opções
  function onChangeModalOption1(event) {
    setOption1(event.target.value)

  }

  function onChangeModalOption2(event) {
    setOption2(event.target.value)

  }

  function onChangeModalOption3(event) {
    setOption3(event.target.value)

  }

  function onChangeModalOption4(event) {
    setOption4(event.target.value)

  }

  function onChangeModalOption5(event) {
    setOption5(event.target.value)

  }

  // funções para capturar os valores dos campos das questões de múltipla escolha
  function onChangeModalQuestionMulti(event) {
    setQuestionMulti(event.target.value)

  }

  function onChangeModalAnswerMulti(event) {
    setAnswerMulti(event.target.value)

  }

  function onChangeModalImageMulti(event) {
    setSrcImgMulti(event.target.value)

  }

  function onChangeModalDescriptionMulti(event) {
    setDescriptionMulti(event.target.value)

  }

  //funções para capturar os valores dos campos das opções de múltipla escolha
  function onChangeModalOption1Multi(event) {
    setOption1Multi(event.target.value)

  }

  function onChangeModalOption2Multi(event) {
    setOption2Multi(event.target.value)

  }

  function onChangeModalOption3Multi(event) {
    setOption3Multi(event.target.value)

  }

  function onChangeModalOption4Multi(event) {
    setOption4Multi(event.target.value)

  }

  function onChangeModalOption5Multi(event) {
    setOption5Multi(event.target.value)

  }

  // função que limpa todos os campos do formulário
  function cleanForm() {
    if (nextQuestion && optionMap) {
      setQuestion('')
      setAnswer('')
      setSrcImg('')
      setDescription('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      setOption5('')

    }

    if (multiQuestion && multiOptionMap) {
      setQuestionMulti('')
      setAnswerMulti('')
      setSrcImgMulti('')
      setDescriptionMulti('')
      setOption1Multi('')
      setOption2Multi('')
      setOption3Multi('')
      setOption4Multi('')
      setOption5Multi('')

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

      <h1>EDITAR CARD:</h1>
        
      {/* imagem delete do react icon */}
      <TiDeleteOutline
          onClick={closeModal} 
          className={styles.modalImageDelete} 
      />      

      {nextQuestion && optionMap && <form // este form só aparecerá se tiver uma questão e opção da NewPageMain
        onSubmit={multiFunctionsNewPageMain}
        className={styles.formModal}
      > 
        {/* todos os campos das questões */}
        <Field
          onChangeModal={onChangeModalQuestion}
          name="Question*"
          newValue={question}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalAnswer}
          name="Answer*"
          newValue={answer}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalImage}
          name="Image Source"
          newValue={srcImg}

        />
        <Field
          onChangeModal={onChangeModalDescription}
          name="Description*"
          newValue={description}
          required={true}

        />

        {/* todos os campos das opções */}
        <Field
          onChangeModal={onChangeModalOption1}
          name="Option1*"
          newValue={option1}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption2}
          name="Option2*"
          newValue={option2}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption3}
          name="Option3*"
          newValue={option3}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption4}
          name="Option4*"
          newValue={option4}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption5}
          name="Option5"
          newValue={option5}

        />

        {/* Botões submit e clean */}
        <div className={styles.buttons}>
          <ButtonDefault 
            buttonName='Save' 
            specificType='submit'

          />
          <ButtonDefault 
            onClick={cleanForm} 
            buttonName='Clean' 
            specificType='button'
             
          />

        </div>
      
      </form>}

      {multiQuestion && multiOptionMap && <form // este form só aparecerá se tiver uma questão e opção da PageMulti
        onSubmit={multiFunctionsPageMulti}
        className={styles.formModal}
      > 
        {/* todos os campos das questões de múltipla escolha */}
        <Field
          onChangeModal={onChangeModalQuestionMulti}
          name="Question*"
          newValue={questionMulti}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalAnswerMulti}
          name="Answer*"
          newValue={answerMulti}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalImageMulti}
          name="Image Source"
          newValue={srcImgMulti}

        />
        <Field
          onChangeModal={onChangeModalDescriptionMulti}
          name="Description*"
          newValue={descriptionMulti}
          required={true}

        />

        {/* todos os campos das opções de múltipla escolha */}
        <Field
          onChangeModal={onChangeModalOption1Multi}
          name="Option1*"
          newValue={option1Multi}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption2Multi}
          name="Option2*"
          newValue={option2Multi}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption3Multi}
          name="Option3*"
          newValue={option3Multi}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption4Multi}
          name="Option4*"
          newValue={option4Multi}
          required={true}

        />
        <Field
          onChangeModal={onChangeModalOption5Multi}
          name="Option5"
          newValue={option5Multi}

        />

        {/* Botões submit e clean */}
        <div className={styles.buttons}>
          <ButtonDefault 
            buttonName='Save' 
            specificType='submit'

          />
          <ButtonDefault 
            onClick={cleanForm} 
            buttonName='Clean' 
            specificType='button'
             
          />

        </div>
      
      </form>}

      </Modal>

    </div>
  )
}

export default ModalMenu;
