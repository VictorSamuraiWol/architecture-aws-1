import { useEffect, useState } from 'react'
import styles from './CampoQuestionOption.module.css'

function CampoQuestionOption({ 
    nome, optionClass, labelTarget, setLabelTarget, valueForm1, valueForm2, valueForm3, valueForm4, /* campos form1 */ setNewTitleQuestions, setNewQuestionQuestions, setNewAnswerQuestions, setNewSourceImageQuestions, setNewDescriptionQuestions, setNewQuestionsNumberQuestions, /* campos form2 */ setNewOption1Question, setNewOption2Question, setNewOption3Question, setNewOption4Question, setNewOption5Question, setNewOptionsNumberQuestions, /* campos form3 */ setNewTitleMultiQuestions, setNewQuestionMultiQuestions, setNewAnswerMultiQuestions, setNewAnswerTextMultiQuestions, setNewSourceImageMultiQuestions, setNewDescriptionMultiQuestions, setNewQuestionsNumberMultiQuestions, /* campos form4 */ setNewOption1MultiQuestion, setNewOption2MultiQuestion, setNewOption3MultiQuestion, setNewOption4MultiQuestion, setNewOption5MultiQuestion, setNewOptionsNumberMultiQuestions
}) {

    const [newValue, setNewValue] = useState("")

    // valores dos títulos dos 4 forms
    const [formsTitlesTarget, setFormsTitlesTarget] = useState("")

    // valores dos campos do textrea
    const [valuesForms, serValuesForms] = useState("")    

    function newValueFunc(e) {
        // capturar o texto da label do form alvo
        setLabelTarget(e.target.parentElement.children[0].textContent)
        // console.log(labelTarget, '(labelTarget l.14)')

        // capturar o texto do título do form alvo
        setFormsTitlesTarget(e.target.parentElement.parentElement.parentElement.children[0].textContent)
        // console.log(formsTitlesTarget, '(formsTitlesTarget l.18)')

        setNewValue(e.target.value)

    }

    //atualizando os valores e certificando que todos estão capturados antes de salvar os dados do form
    useEffect(() => {
        // form 1
        // se for utilizar o forms1, usar os valores dos campos do forms1
        formsTitlesTarget  === "Form 1 (Questions)" && serValuesForms(valueForm1)  

        setNewTitleQuestions && labelTarget === "Title:" && setNewTitleQuestions(newValue)

        setNewQuestionQuestions && labelTarget === "Question:" && setNewQuestionQuestions(newValue)
        
        setNewAnswerQuestions && labelTarget === "Answer:" && setNewAnswerQuestions(newValue)

        setNewSourceImageQuestions && labelTarget === "Source Image:" && setNewSourceImageQuestions(newValue)

        setNewDescriptionQuestions && labelTarget === "Description:" && setNewDescriptionQuestions(newValue)

        setNewQuestionsNumberQuestions && labelTarget === "Question's number:" && setNewQuestionsNumberQuestions(newValue) 

        // form 2
        // se for utilizar o forms2, usar os valores dos campos do forms2
        formsTitlesTarget === "Form 2 (Options)" && serValuesForms(valueForm2)

        setNewOption1Question && labelTarget === "Option 1:" && setNewOption1Question(newValue)

        setNewOption2Question && labelTarget === "Option 2:" && setNewOption2Question(newValue)
        
        setNewOption3Question && labelTarget === "Option 3:" && setNewOption3Question(newValue)

        setNewOption4Question && labelTarget === "Option 4:" && setNewOption4Question(newValue)

        setNewOption5Question && labelTarget === "Option 5:" && setNewOption5Question(newValue)

        setNewOptionsNumberQuestions && labelTarget === "Option's number:" && setNewOptionsNumberQuestions(newValue)        

        // form 3
        // se for utilizar o forms3, usar os valores dos campos do forms3
        formsTitlesTarget === "Form 3 (MultiQuestions)" && serValuesForms(valueForm3)

        setNewTitleMultiQuestions && labelTarget === "Title:" && setNewTitleMultiQuestions(newValue)

        setNewQuestionMultiQuestions && labelTarget === "Question:" && setNewQuestionMultiQuestions(newValue)

        setNewAnswerMultiQuestions && labelTarget === "Answer:" && setNewAnswerMultiQuestions(newValue)

        setNewAnswerTextMultiQuestions && labelTarget === "Answer's Text:" && setNewAnswerTextMultiQuestions(newValue)

        setNewSourceImageMultiQuestions && labelTarget === "Source Image:" && setNewSourceImageMultiQuestions(newValue)

        setNewDescriptionMultiQuestions && labelTarget === "Description:" && setNewDescriptionMultiQuestions(newValue)
        
        setNewQuestionsNumberMultiQuestions && labelTarget === "Question's number:" && setNewQuestionsNumberMultiQuestions(newValue)        

        // form 4
        // se for utilizar o forms4, usar os valores dos campos do forms4
        formsTitlesTarget === "Form 4 (MultiOptions)" && serValuesForms(valueForm4)

        setNewOption1MultiQuestion && labelTarget === "Option 1:" && setNewOption1MultiQuestion(newValue)
        
        setNewOption2MultiQuestion && labelTarget === "Option 2:" && setNewOption2MultiQuestion(newValue)
        
        setNewOption3MultiQuestion && labelTarget === "Option 3:" && setNewOption3MultiQuestion(newValue)
        
        setNewOption4MultiQuestion && labelTarget === "Option 4:" && setNewOption4MultiQuestion(newValue)
        
        setNewOption5MultiQuestion && labelTarget === "Option 5:" && setNewOption5MultiQuestion(newValue)
        
        setNewOptionsNumberMultiQuestions && labelTarget === "Option's number:" && setNewOptionsNumberMultiQuestions(newValue)        

    }, [newValue, labelTarget, setLabelTarget, formsTitlesTarget, /* campos form1 */ setNewTitleQuestions, setNewQuestionQuestions, setNewAnswerQuestions, setNewSourceImageQuestions, setNewDescriptionQuestions, setNewQuestionsNumberQuestions, valueForm1, /* campos form2 */ setNewOption1Question, setNewOption2Question, setNewOption3Question, setNewOption4Question, setNewOption5Question, setNewOptionsNumberQuestions, valueForm2, /* campos form3 */ setNewTitleMultiQuestions, setNewQuestionMultiQuestions, setNewAnswerMultiQuestions, setNewAnswerTextMultiQuestions, setNewSourceImageMultiQuestions, setNewDescriptionMultiQuestions, setNewQuestionsNumberMultiQuestions, valueForm3, /* campos form4 */ setNewOption1MultiQuestion, setNewOption2MultiQuestion, setNewOption3MultiQuestion, setNewOption4MultiQuestion, setNewOption5MultiQuestion, setNewOptionsNumberMultiQuestions, valueForm4 ])

    return(
        <div className={styles.campo}>
            <div className={styles.labelTextarea}>
                <label className={optionClass}>{nome}</label>
                <textarea 
                    onChange={(e) => newValueFunc(e)}
                    value={valuesForms}
                />
            </div>
        </div>
    )
}

export default CampoQuestionOption
