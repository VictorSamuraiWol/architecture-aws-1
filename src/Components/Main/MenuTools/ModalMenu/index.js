import styles from './ModalMenu.module.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { MdEditSquare } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Field from './Field';
import ButtonDefault from '../../../ButtonDefault';

// certifique-se de vincular o modal ao seu appElement
Modal.setAppElement('#root');

function ModalMenu({ nextQuestions, setNextQuestions, optionMap, setOptionMap, optionMapNumberId }) {

  // criando variáveis para todos os atributos das questões
  const [question, setQuestion] = useState(nextQuestions.question);
  const [answer, setAnswer] = useState(nextQuestions.answer);
  const [srcImg, setSrcImg] = useState(nextQuestions.srcImg);
  const [description, setDescription] = useState(nextQuestions.descriptionP);

  // criando variáveis para todos os atributos das opções
  const [option1, setOption1] = useState(optionMap[0]);
  const [option2, setOption2] = useState(optionMap[1]);
  const [option3, setOption3] = useState(optionMap[2]);
  const [option4, setOption4] = useState(optionMap[3]);
  const [option5, setOption5] = useState(optionMap[4]);

  // sempre atualizar as opções quando houver mudança
  useEffect(() => {
      setOption1(optionMap[0])
      setOption2(optionMap[1])
      setOption3(optionMap[2])
      setOption4(optionMap[3])
      setOption5(optionMap[4])

  }, [optionMap, optionMapNumberId])

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);

  }

  function closeModal() {
    setModalIsOpen(false);

  }

  //função utilizando PUT para alterar as questões na API
  async function onSalveModalQuestion() {
      const jsonBody = JSON.stringify({
          question: question,
          answer: answer,
          srcImg: srcImg,
          descriptionP: description,
          numberQuestion: nextQuestions.numberQuestion, // não será alterado
          id: nextQuestions.id // não será alterado
      })
      await fetch(`http://localhost:3001/questions/${nextQuestions.id}`, {
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
  async function onSalveModalOption() {
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

  // função que vai salvar quaisquer alterações feitas na questão e opção atual
  function multiFunctions() {
    onSalveModalQuestion();
    onSalveModalOption();

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

  // função que limpa todos os campos do formulário
  function cleanForm() {
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

      <form
        onSubmit={multiFunctions}
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
      
      </form>

      </Modal>

    </div>
  )
}

export default ModalMenu;
