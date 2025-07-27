import styles from './FormsNewQuestionsOptions.module.css'
import FieldsQuestionsOptions from './FieldsQuestionsOptions'
import ButtonDefault from '../ButtonDefault'
import { useContext, useEffect, useState } from 'react'
import backgroundImage from '../../imgs/forms-image.png'
import { DataContext } from '../DataContext'

function FormsNewQuestionsOptionsPage() {

    const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, updateList, setPostApi } = useContext(DataContext)

    // capturando o conteúdo da label
    const [labelTarget, setLabelTarget] = useState("")

    // elementos do Question's Form:
    const [newQuestionQuestions, setNewQuestionQuestions] = useState("")
    const [newAnswerQuestions, setNewAnswerQuestions] = useState("")
    const [newSourceImageQuestions, setNewSourceImageQuestions] = useState("")
    const [newDescriptionQuestions, setNewDescriptionQuestions] = useState("")
    const [newQuestionsNumberQuestions, setNewQuestionsNumberQuestions] = useState("")

    // elementos do Option's Form:
    const [newOption1Question, setNewOption1Question] = useState("")
    const [newOption2Question, setNewOption2Question] = useState("")
    const [newOption3Question, setNewOption3Question] = useState("")
    const [newOption4Question, setNewOption4Question] = useState("")
    const [newOption5Question, setNewOption5Question] = useState("")
    const [newOptionsNumberQuestions, setNewOptionsNumberQuestions] = useState("")

    // elementos do MultiQuestion's Form
    const [newQuestionMultiQuestions, setNewQuestionMultiQuestions] = useState("")
    const [newAnswerTextMultiQuestions, setNewAnswerTextMultiQuestions] = useState("")
    const [newSourceImageMultiQuestions, setNewSourceImageMultiQuestions] = useState("")
    const [newDescriptionMultiQuestions, setNewDescriptionMultiQuestions] = useState("")
    const [newQuestionsNumberMultiQuestions, setNewQuestionsNumberMultiQuestions] = useState("")

    // elementos do MultiOption's Form
    const [newOption1MultiQuestion, setNewOption1MultiQuestion] = useState("")
    const [newOption2MultiQuestion, setNewOption2MultiQuestion] = useState("")
    const [newOption3MultiQuestion, setNewOption3MultiQuestion] = useState("")
    const [newOption4MultiQuestion, setNewOption4MultiQuestion] = useState("")
    const [newOption5MultiQuestion, setNewOption5MultiQuestion] = useState("")
    const [newOptionsNumberMultiQuestions, setNewOptionsNumberMultiQuestions] = useState("")

    const [readyToSendForm1, setReadyToSendForm1] = useState(false);
    const [readyToSendForm2, setReadyToSendForm2] = useState(false);
    const [readyToSendForm3, setReadyToSendForm3] = useState(false);
    const [readyToSendForm4, setReadyToSendForm4] = useState(false);
    const [readyToCleanAll, setReadyToCleanAll] = useState(false);

    // capturar a mensagem de alerta para exibir na tela dos formulários
    const [alertMessage, setAlertMessage] = useState('')

    // função utilizando POST para salvar os dados do form1 na API
    const onSaveForm1 = async (e) => {
        e.preventDefault();
        let data = '';

        // colocando somente os campos que serão obrigatórios
        if (readyToSendForm1 === true && newQuestionQuestions && newAnswerQuestions && newDescriptionQuestions && newQuestionsNumberQuestions) { 
            data = {
                question: newQuestionQuestions,
                answer: newAnswerQuestions,
                srcImg: newSourceImageQuestions, // não obrigatório
                descriptionP: newDescriptionQuestions,
                numberQuestion: newQuestionsNumberQuestions
            }

        } else {
                console.error('Erro nos dados recebidos do form 1!')
                alert("Por favor! Preencha todos os campos necessários do form 1!")
                
        }        
            
        try {
            const response = await fetch('http://localhost:3001/questions', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
                
            }); 
                        
            if (response.ok) {
                console.log(data, "Dados enviados com sucesso do form 1! Preencha um formulário por vez.");
                alert('Questão adicionada com sucesso do form 1! Preencha um formulário por vez.')
                cleanForm(); // limpar o formulário
              
                // tornar verdadeiro a cada POST
                setPostApi(true)

            }
            
        } catch(error) {
        console.error("Erro ao enviar os dados", error);

        }
        
    };

    // função utilizando POST para salvar os dados do form2 na API
    const onSaveForm2 = async (e) => {
        e.preventDefault();
        let data = '';

        // colocando somente os campos que serão obrigatórios
        if (readyToSendForm2 === true && newOption1Question && newOption2Question && newOption3Question && newOption4Question && newOptionsNumberQuestions) { 
            data = {
                option1: newOption1Question,
                option2: newOption2Question,
                option3: newOption3Question,
                option4: newOption4Question,
                option5: newOption5Question, // não obrigatório
                numberOption: newOptionsNumberQuestions
            }

        } else {
                console.error('Erro nos dados recebidos do form 2!')
                alert("Por favor! Preencha todos os campos necessários do form 2!")
                
        }      

        try {
            const response = await fetch('http://localhost:3001/options', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
        
            if (response.ok) {
                console.log(data, "Dados enviados com sucesso do form 2! Preencha um formulário por vez.");
                alert('Questão adicionada com sucesso do form 2! Preencha um formulário por vez.')
                cleanForm(); // limpar o formulário
                
                // tornar verdadeiro a cada POST
                setPostApi(true)
                
            }

        } catch(error) {
            console.error("Erro ao enviar os dados", error);
            
        }    
    };

    // função utilizando POST para salvar os dados do form3 na API
    const onSaveForm3 = async (e) => {
        e.preventDefault();
        let data = '';
        
        // colocando somente os campos que serão obrigatórios
        if (readyToSendForm3 === true && newQuestionMultiQuestions && newAnswerTextMultiQuestions && newDescriptionMultiQuestions && newQuestionsNumberMultiQuestions) {  
            data = {
                question: newQuestionMultiQuestions,
                answerText: newAnswerTextMultiQuestions,
                srcImg: newSourceImageMultiQuestions, // não obrigatório
                descriptionP: newDescriptionMultiQuestions,
                numberQuestion: newQuestionsNumberMultiQuestions
            }

        } else {
                console.error('Erro nos dados recebidos do form 3!')
                alert("Por favor! Preencha todos os campos necessários do form 3!")
                
        }      

        try {
            const response = await fetch('http://localhost:3001/multiQuestions', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
        
            if (response.ok) {
                console.log(data, "Dados enviados com sucesso do form 3! Preencha um formulário por vez.");
                alert('Questão adicionada com sucesso do form 3! Preencha um formulário por vez.')
                cleanForm(); // limpar o formulário
                
                // tornar verdadeiro a cada POST
                setPostApi(true)
                
            }

        } catch(error) {
            console.error("Erro ao enviar os dados", error);
            
        }   
    };

    // função utilizando POST para salvar os dados do form4 na API
    const onSaveForm4 = async (e) => {
        e.preventDefault();
        let data = '';

        // colocando somente os campos que serão obrigatórios
        if (readyToSendForm4 === true && newOption1MultiQuestion && newOption2MultiQuestion && newOption3MultiQuestion && newOption4MultiQuestion && newOptionsNumberMultiQuestions) {
            data = {
                option1: newOption1MultiQuestion,
                option2: newOption2MultiQuestion,
                option3: newOption3MultiQuestion,
                option4: newOption4MultiQuestion,
                option5: newOption5MultiQuestion, // não obrigatório
                numberOption: newOptionsNumberMultiQuestions
            }

        } else {
                console.error('Erro nos dados recebidos do form 4!')
                alert("Por favor! Preencha todos os campos necessários do form 4!")
                cleanForm();
        }      

        try {
            const response = await fetch('http://localhost:3001/multiOptions', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
        
            if (response.ok) {
                console.log(data, "Dados enviados com sucesso do form 4! Preencha um formulário por vez.");
                alert('Questão adicionada com sucesso do form 4! Preencha um formulário por vez.')
                cleanForm(); // limpar o formulário
               
                // tornar verdadeiro a cada POST
                setPostApi(true)

            }

        } catch(error) {
            console.error("Erro ao enviar os dados", error);
            
        }
        
    };

    function cleanForm() { 
        
        // zerando os valores aqui e os do componente "CampoQuestionOption" para certificar que todos serão zerados após envio de qualquer formulário
        if ((readyToSendForm1 === true) || (readyToSendForm2 === true) || (readyToSendForm3 === true) || (readyToSendForm4 === true)) {
            // form 1
            setNewQuestionQuestions('')
            setNewAnswerQuestions('')
            setNewSourceImageQuestions('')
            setNewDescriptionQuestions('')
            setNewQuestionsNumberQuestions('')

            // form 2
            setNewOption1Question('')
            setNewOption2Question('')
            setNewOption3Question('')
            setNewOption4Question('')
            setNewOption5Question('')
            setNewOptionsNumberQuestions('')

            // form 3
            setNewQuestionMultiQuestions('')
            setNewAnswerTextMultiQuestions('')
            setNewSourceImageMultiQuestions('')
            setNewDescriptionMultiQuestions('')
            setNewQuestionsNumberMultiQuestions('')

            // form 4
            setNewOption1MultiQuestion('')
            setNewOption2MultiQuestion('')
            setNewOption3MultiQuestion('')
            setNewOption4MultiQuestion('')
            setNewOption5MultiQuestion('')
            setNewOptionsNumberMultiQuestions('')

        }

        setReadyToCleanAll(true)

    }   

    useEffect(() => {

        function formsCheck() {

            if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length === listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais questões no "form 1" do que opções no "form 2". Não esqueça de adicionar as opções que faltam no "form 2".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicOptionsContext.length > listUnicQuestionsContext.length && listMultiQuestionsContext.length === listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais opções no "form 2" do que questões no "form 1". Não esqueça de adicionar as questões que faltam no "form 1".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listMultiQuestionsContext.length > listMultiOptionsContext.length && listUnicQuestionsContext.length === listUnicOptionsContext.length) {
                setAlertMessage('⚠ Há mais questões no "form 3" do que opções no "form 4". Não esqueça de adicionar as opções que faltam no "form 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listMultiOptionsContext.length > listMultiQuestionsContext.length && listUnicQuestionsContext.length === listUnicOptionsContext.length) {
                setAlertMessage('⚠ Há mais opções no "form 4" do que questões no "form 3". Não esqueça de adicionar as questões que faltam no "form 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length > listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais questões nos "forms 1 e 3" do que opções nos "forms 2 e 4". Não esqueça de adicionar as opções que faltam nos "forms 2 e 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length < listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais questões no "form 1" do que opções no "form 2" e mais opções no "form 4" do que questões no "form 3". Não esqueça de adicionar as opções que faltam no "form 2" e as questões que faltam no "form 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length < listUnicOptionsContext.length && listMultiQuestionsContext.length > listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais opções no "form 2" do que questões no "form 1" e mais questões no "form 3" do que opções no "form 4". Não esqueça de adicionar as questões que faltam no "form 1" e as opções que faltam no "form 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length < listUnicOptionsContext.length && listMultiQuestionsContext.length < listMultiOptionsContext.length) {
                setAlertMessage('⚠ Há mais opções nos "forms 2 e 4" do que questões nos "forms 1 e 3". Não esqueça de adicionar as questões que faltam nos "forms 1 e 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            }

            setPostApi(false)

        } 

        updateList && setTimeout(() => {
            formsCheck() // disparar a função após atualizar o backend

        }, 1000)

    }, [listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, updateList, setPostApi])

    return(
        <div className={styles.formsNewQuestionsOptions}>            
            <img 
                className={styles.backgroundImage} 
                src={backgroundImage} 
                alt='backgroundImage' 
            />

            <div className={styles.messageAlert}>{alertMessage}</div>

            <div className={styles.forms}>
                <form 
                    onSubmit={onSaveForm1} 
                    className={styles.form}
                    id='form1'
                >
                    <h1>Form 1 (Questions)</h1>
                    <FieldsQuestionsOptions
                        nome1="Question:"
                        nome2="Answer:"
                        nome3="Source Image:"
                        nome4="Description:" 
                        nome5="Number:"

                        labelTarget={labelTarget} 
                        setLabelTarget={setLabelTarget}
                        newQuestionQuestions={newQuestionQuestions}
                        setNewQuestionQuestions={setNewQuestionQuestions}
                        newAnswerQuestions={newAnswerQuestions}
                        setNewAnswerQuestions={setNewAnswerQuestions}
                        newSourceImageQuestions={newSourceImageQuestions}
                        setNewSourceImageQuestions={setNewSourceImageQuestions}
                        newDescriptionQuestions={newDescriptionQuestions}
                        setNewDescriptionQuestions={setNewDescriptionQuestions}
                        newQuestionsNumberQuestions={newQuestionsNumberQuestions}
                        setNewQuestionsNumberQuestions={setNewQuestionsNumberQuestions}     
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm1={readyToSendForm1}

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm1(true)}
                    />

                </form>

                <form 
                    onSubmit={onSaveForm2} 
                    className={styles.form}
                    id='form2'
                >
                    <h1>Form 2 (Options)</h1>
                    <FieldsQuestionsOptions 
                        nome1="Option 1:" 
                        nome2="Option 2:" 
                        nome3="Option 3:" 
                        nome4="Option 4:"                
                        nome5="Option 5:" 
                        nome6="Number:"
                        optionClass={styles.optionClass}

                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newOption1Question={newOption1Question} 
                        setNewOption1Question={setNewOption1Question}    
                        newOption2Question={newOption2Question} 
                        setNewOption2Question={setNewOption2Question}    
                        newOption3Question={newOption3Question} 
                        setNewOption3Question={setNewOption3Question}    
                        newOption4Question={newOption4Question} 
                        setNewOption4Question={setNewOption4Question}    
                        newOption5Question={newOption5Question} 
                        setNewOption5Question={setNewOption5Question}    
                        newOptionsNumberQuestions={newOptionsNumberQuestions} 
                        setNewOptionsNumberQuestions={setNewOptionsNumberQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm2={readyToSendForm2}

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm2(true)}
                    />

                </form>
            </div>

            <div className={styles.forms}>
                <form 
                    onSubmit={onSaveForm3} 
                    className={styles.form}
                    id='form3'
                >                    
                    <h1>Form 3 (MultiQuestions)</h1>
                    <FieldsQuestionsOptions
                        nome1="Question:" 
                        nome2="Answer's Text:"
                        nome3="Source Image:"
                        nome4="Description:" 
                        nome5="Number:"
                        
                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newQuestionMultiQuestions={newQuestionMultiQuestions}
                        setNewQuestionMultiQuestions={setNewQuestionMultiQuestions}
                        newAnswerTextMultiQuestions={newAnswerTextMultiQuestions}
                        setNewAnswerTextMultiQuestions={setNewAnswerTextMultiQuestions}
                        newSourceImageMultiQuestions={newSourceImageMultiQuestions}
                        setNewSourceImageMultiQuestions={setNewSourceImageMultiQuestions}
                        newDescriptionMultiQuestions={newDescriptionMultiQuestions}
                        setNewDescriptionMultiQuestions={setNewDescriptionMultiQuestions}
                        newQuestionsNumberMultiQuestions={newQuestionsNumberMultiQuestions}
                        setNewQuestionsNumberMultiQuestions={setNewQuestionsNumberMultiQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm3={readyToSendForm3}

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm3(true)}
                    />

                </form>

                <form 
                    onSubmit={onSaveForm4} 
                    className={styles.form}
                    id='form4'
                >
                    <h1>Form 4 (MultiOptions)</h1>
                    <FieldsQuestionsOptions 
                        nome1="Option 1:" 
                        nome2="Option 2:" 
                        nome3="Option 3:" 
                        nome4="Option 4:"                
                        nome5="Option 5:" 
                        nome6="Number:"
                        optionClass={styles.optionClass}

                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newOption1MultiQuestion={newOption1MultiQuestion}
                        setNewOption1MultiQuestion={setNewOption1MultiQuestion}
                        newOption2MultiQuestion={newOption2MultiQuestion}
                        setNewOption2MultiQuestion={setNewOption2MultiQuestion}
                        newOption3MultiQuestion={newOption3MultiQuestion}
                        setNewOption3MultiQuestion={setNewOption3MultiQuestion}
                        newOption4MultiQuestion={newOption4MultiQuestion}
                        setNewOption4MultiQuestion={setNewOption4MultiQuestion}
                        newOption5MultiQuestion={newOption5MultiQuestion}
                        setNewOption5MultiQuestion={setNewOption5MultiQuestion}
                        newOptionsNumberMultiQuestions={newOptionsNumberMultiQuestions}
                        setNewOptionsNumberMultiQuestions={setNewOptionsNumberMultiQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm4={readyToSendForm4}

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm4(true)}
                    />

                </form>
            </div>        

        </div>
    )
}

export default FormsNewQuestionsOptionsPage
