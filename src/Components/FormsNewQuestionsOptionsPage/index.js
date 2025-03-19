import styles from './FormsNewQuestionsOptions.module.css'
import CampoQuestionsOptions from './CamposQuestionsOptions'
import ButtonDefault from '../ButtonDefault'
import { useEffect, useState } from 'react'

function FormsNewQuestionsOptionsPage() {

    // capturando o conteúdo da label
    const [labelTarget, setLabelTarget] = useState("")

    // elementos do Question's Form:
    const [newTitleQuestions, setNewTitleQuestions] = useState("")
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
    const [newTitleMultiQuestions, setNewTitleMultiQuestions] = useState("")
    const [newQuestionMultiQuestions, setNewQuestionMultiQuestions] = useState("")
    const [newAnswerMultiQuestions, setNewAnswerMultiQuestions] = useState("")
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

    // função utilizando POST para salvar os dados do form1 na API
    const onSaveForm1 = async (e) => {
        e.preventDefault();
        let data = '';

        // colocando somente os campos que serão obrigatórios
        if (readyToSendForm1 === true && newTitleQuestions && newQuestionQuestions && newAnswerQuestions && newDescriptionQuestions && newQuestionsNumberQuestions) { 
            data = {
                titulo: newTitleQuestions,
                question: newQuestionQuestions,
                answer: newAnswerQuestions,
                srcImg: newSourceImageQuestions, // não obrigatório
                descriptionP: newDescriptionQuestions,
                numberQuestion: newQuestionsNumberQuestions
            }

        } else {
                console.error('Erro nos dados recebidos!')
                alert("Por favor! Preencha todos os campos necessários!")
                
            }        
            
            try {
                const response = await fetch('http://localhost:3001/questions', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),
                    
                });        
                
                if (response.ok) {
                    console.log("Dados enviados com sucesso!");
                    alert('Questão adicionada com sucesso!!!')
                    cleanForm();
                    
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
        if (readyToSendForm2 === true && newOption1Question && newOption2Question && newOption3Question && newOption4Question && newOption5Question && newOptionsNumberQuestions) { 
            data = {
                option1: newOption1Question,
                option2: newOption2Question,
                option3: newOption3Question,
                option4: newOption4Question,
                option5: newOption5Question,
                numberOption: newOptionsNumberQuestions
            }

        } else {
                console.error('Erro nos dados recebidos!')
                alert("Por favor! Preencha todos os campos necessários!")
                
        }      

        try {
            const response = await fetch('http://localhost:3001/options', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
       
            if (response.ok) {
                console.log("Dados enviados com sucesso!");
                alert('Questão adicionada com sucesso!!!')
                cleanForm();
                
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
        if (readyToSendForm3 === true && newTitleMultiQuestions && newQuestionMultiQuestions && newAnswerMultiQuestions && newAnswerTextMultiQuestions && newDescriptionMultiQuestions && newQuestionsNumberMultiQuestions) {  
            data = {
                title: newTitleMultiQuestions,
                question: newQuestionMultiQuestions,
                answer: newAnswerMultiQuestions,
                answerText: newAnswerTextMultiQuestions,
                srcImg: newSourceImageMultiQuestions, // não obrigatório
                descriptionP: newDescriptionMultiQuestions,
                numberQuestion: newQuestionsNumberMultiQuestions
            }

        } else {
                console.error('Erro nos dados recebidos!')
                alert("Por favor! Preencha todos os campos necessários!")
                
        }      

        try {
            const response = await fetch('http://localhost:3001/multiQuestions', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
       
            if (response.ok) {
                console.log("Dados enviados com sucesso!");
                alert('Questão adicionada com sucesso!!!')
                cleanForm();
                
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
        if (readyToSendForm4 === true && newOption1MultiQuestion && newOption2MultiQuestion && newOption3MultiQuestion && newOption4MultiQuestion && newOption5MultiQuestion && newOptionsNumberMultiQuestions) {
            data = {
                option1: newOption1MultiQuestion,
                option2: newOption2MultiQuestion,
                option3: newOption3MultiQuestion,
                option4: newOption4MultiQuestion,
                option5: newOption5MultiQuestion,
                numberOption: newOptionsNumberMultiQuestions
            }

        } else {
                console.error('Erro nos dados recebidos!')
                alert("Por favor! Preencha todos os campos necessários!")
                
        }      

        try {
            const response = await fetch('http://localhost:3001/multiOptions', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),

            });        
       
            if (response.ok) {
                console.log("Dados enviados com sucesso!");
                alert('Questão adicionada com sucesso!!!')
                cleanForm();
                
            }

        } catch(error) {
            console.error("Erro ao enviar os dados", error);
            
        }    
    };

    function cleanForm() {        
        if (readyToSendForm1 === true) { // form1
            setNewTitleQuestions('')
            setNewQuestionQuestions('')
            setNewAnswerQuestions('')
            setNewSourceImageQuestions('')
            setNewDescriptionQuestions('')
            setNewQuestionsNumberQuestions('')

            setReadyToSendForm1(false)

        } else if (readyToSendForm2 === true) { // form2
            setNewOption1Question('')
            setNewOption2Question('')
            setNewOption3Question('')
            setNewOption4Question('')
            setNewOption5Question('')
            setNewOptionsNumberQuestions('')
            
            setReadyToSendForm2(false)

        } else if (readyToSendForm3 === true) { // form3
            setNewTitleMultiQuestions('')
            setNewQuestionMultiQuestions('')
            setNewAnswerMultiQuestions('')
            setNewAnswerTextMultiQuestions('')
            setNewSourceImageMultiQuestions('')
            setNewDescriptionMultiQuestions('')
            setNewQuestionsNumberMultiQuestions('')

            setReadyToSendForm3(false)
    
        } else if (readyToSendForm4 === true) { // form4
            setNewOption1MultiQuestion('')
            setNewOption2MultiQuestion('')
            setNewOption3MultiQuestion('')
            setNewOption4MultiQuestion('')
            setNewOption5MultiQuestion('')
            setNewOptionsNumberMultiQuestions('')

            setReadyToSendForm4(false)
    
        }
        
    }    

    return(
        <div className={styles.formsNewQuestionsOptions}>
            <div className={styles.forms}>
                <form id='form1' onSubmit={onSaveForm1} className={styles.form}>
                    <h1>Form 1 (Questions)</h1>
                    <CampoQuestionsOptions
                        nome1="Title(Form1):" 
                        nome2="Question(Form1):" 
                        nome3="Answer(Form1):" 
                        nome4="Source Image(Form1):" 
                        nome5="Description(Form1):" 
                        nome6="Question's number(Form1):"

                        labelTarget={labelTarget} 
                        setLabelTarget={setLabelTarget}
                        newTitleQuestions={newTitleQuestions}
                        setNewTitleQuestions={setNewTitleQuestions}
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

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm1(true)}

                    />
                </form>

                <form onSubmit={onSaveForm2} className={styles.form}>
                    <h1>Form 2 (Options)</h1>
                    <CampoQuestionsOptions 
                        nome1="Option 1(Form2):" 
                        nome2="Option 2(Form2):" 
                        nome3="Option 3(Form2):" 
                        nome4="Option 4(Form2):"                
                        nome5="Option 5(Form2):" 
                        nome6="Option's number(Form2):"
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
                <form onSubmit={onSaveForm3} className={styles.form}>
                    <h1>Form 3 (MultiQuestions)</h1>
                    <CampoQuestionsOptions 
                        nome1="Title(Form3):" 
                        nome2="Question(Form3):" 
                        nome3="Answer(Form3):" 
                        nome4="Answer's Text(Form3):" 
                        nome5="Source Image(Form3):" 
                        nome6="Description(Form3):"
                        nome7="Question's number(Form3):"
                        
                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newTitleMultiQuestions={newTitleMultiQuestions}
                        setNewTitleMultiQuestions={setNewTitleMultiQuestions}
                        newQuestionMultiQuestions={newQuestionMultiQuestions}
                        setNewQuestionMultiQuestions={setNewQuestionMultiQuestions}
                        newAnswerMultiQuestions={newAnswerMultiQuestions}
                        setNewAnswerMultiQuestions={setNewAnswerMultiQuestions}
                        newAnswerTextMultiQuestions={newAnswerTextMultiQuestions}
                        setNewAnswerTextMultiQuestions={setNewAnswerTextMultiQuestions}
                        newSourceImageMultiQuestions={newSourceImageMultiQuestions}
                        setNewSourceImageMultiQuestions={setNewSourceImageMultiQuestions}
                        newDescriptionMultiQuestions={newDescriptionMultiQuestions}
                        setNewDescriptionMultiQuestions={setNewDescriptionMultiQuestions}
                        newQuestionsNumberMultiQuestions={newQuestionsNumberMultiQuestions}
                        setNewQuestionsNumberMultiQuestions={setNewQuestionsNumberMultiQuestions}

                    />
                    <ButtonDefault 
                        buttonName='Submit' 
                        specificType='submit' 
                        specificStyleButton={styles.buttonSubmit}
                        onClick={() => setReadyToSendForm3(true)} 

                    />
                </form>

                <form onSubmit={onSaveForm4} className={styles.form}>
                    <h1>Form 4 (MultiOptions)</h1>
                    <CampoQuestionsOptions 
                        nome1="Option 1(Form4):" 
                        nome2="Option 2(Form4):" 
                        nome3="Option 3(Form4):" 
                        nome4="Option 4(Form4):"                
                        nome5="Option 5(Form4):" 
                        nome6="Option's number(Form4):"
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
