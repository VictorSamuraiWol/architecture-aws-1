import { useEffect, useState } from 'react'
import styles from './CampoQuestionOption.module.css'

function CampoQuestionOption({ 
    nome, optionClass, labelTarget, setLabelTarget, valueForm1, valueForm2, valueForm3, valueForm4, /* Campos form1 (Question's Form) */ setNewTitleQuestions, setNewQuestionQuestions, setNewAnswerQuestions, setNewSourceImageQuestions, setNewDescriptionQuestions, setNewQuestionsNumberQuestions, /* Campos form2 (Option's Form) */ setNewOption1Question, setNewOption2Question, setNewOption3Question, setNewOption4Question, setNewOption5Question, setNewOptionsNumberQuestions, /* Campos form3 (MultiQuestion's Form) */ setNewTitleMultiQuestions, setNewQuestionMultiQuestions, setNewAnswerMultiQuestions, setNewAnswerTextMultiQuestions, setNewSourceImageMultiQuestions, setNewDescriptionMultiQuestions, setNewQuestionsNumberMultiQuestions, /* Campos form4 (MultiOption's Form) */ setNewOption1MultiQuestion, setNewOption2MultiQuestion, setNewOption3MultiQuestion, setNewOption4MultiQuestion, setNewOption5MultiQuestion, setNewOptionsNumberMultiQuestions
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
        setNewTitleQuestions && labelTarget === "Question's Form Title:" && setNewTitleQuestions(newValue)

        setNewQuestionQuestions && labelTarget === "Question's Form Question:" && setNewQuestionQuestions(newValue)
        
        setNewAnswerQuestions && labelTarget === "Question's Form Answer:" && setNewAnswerQuestions(newValue)

        setNewSourceImageQuestions && labelTarget === "Question's Form Source Image:" && setNewSourceImageQuestions(newValue)

        setNewDescriptionQuestions && labelTarget === "Question's Form Description:" && setNewDescriptionQuestions(newValue)

        setNewQuestionsNumberQuestions && labelTarget === "Question's Form Question's number:" && setNewQuestionsNumberQuestions(newValue)

        // se for utilizar o forms1, usar os valores dos campos do forms1
        formsTitlesTarget  === "Question's Form" && serValuesForms(valueForm1)        

        // form 2
        setNewOption1Question && labelTarget === "Question's Form Option 1:" && setNewOption1Question(newValue)

        setNewOption2Question && labelTarget === "Question's Form Option 2:" && setNewOption2Question(newValue)
        
        setNewOption3Question && labelTarget === "Question's Form Option 3:" && setNewOption3Question(newValue)

        setNewOption4Question && labelTarget === "Question's Form Option 4:" && setNewOption4Question(newValue)

        setNewOption5Question && labelTarget === "Question's Form Option 5:" && setNewOption5Question(newValue)

        setNewOptionsNumberQuestions && labelTarget === "Question's Form Option's number:" && setNewOptionsNumberQuestions(newValue)

        // se for utilizar o forms2, usar os valores dos campos do forms2
        formsTitlesTarget === "Option's Form" && serValuesForms(valueForm2)

        // form 3
        setNewTitleMultiQuestions && labelTarget === "MultiQuestion's Form Title:" && setNewTitleMultiQuestions(newValue)

        setNewQuestionMultiQuestions && labelTarget === "MultiQuestion's Form Question:" && setNewQuestionMultiQuestions(newValue)

        setNewAnswerMultiQuestions && labelTarget === "MultiQuestion's Form Answer:" && setNewAnswerMultiQuestions(newValue)

        setNewAnswerTextMultiQuestions && labelTarget === "MultiQuestion's Form Answer's Text:" && setNewAnswerTextMultiQuestions(newValue)

        setNewSourceImageMultiQuestions && labelTarget === "MultiQuestion's Form Source Image:" && setNewSourceImageMultiQuestions(newValue)

        setNewDescriptionMultiQuestions && labelTarget === "MultiQuestion's Form Description:" && setNewDescriptionMultiQuestions(newValue)
        
        setNewQuestionsNumberMultiQuestions && labelTarget === "MultiQuestion's Form Question's number:" && setNewQuestionsNumberMultiQuestions(newValue)

        // se for utilizar o forms3, usar os valores dos campos do forms3
        formsTitlesTarget === "MultiQuestion's Form" && serValuesForms(valueForm3)

        // form 4
        setNewOption1MultiQuestion && labelTarget === "MultiQuestion's Form Option 1:" && setNewOption1MultiQuestion(newValue)
        
        setNewOption2MultiQuestion && labelTarget === "MultiQuestion's Form Option 2:" && setNewOption2MultiQuestion(newValue)
        
        setNewOption3MultiQuestion && labelTarget === "MultiQuestion's Form Option 3:" && setNewOption3MultiQuestion(newValue)
        
        setNewOption4MultiQuestion && labelTarget === "MultiQuestion's Form Option 4:" && setNewOption4MultiQuestion(newValue)
        
        setNewOption5MultiQuestion && labelTarget === "MultiQuestion's Form Option 5:" && setNewOption5MultiQuestion(newValue)
        
        setNewOptionsNumberMultiQuestions && labelTarget === "MultiQuestion's Form Option's number:" && setNewOptionsNumberMultiQuestions(newValue)

        // se for utilizar o forms4, usar os valores dos campos do forms4
        formsTitlesTarget === "MultiOption's Form" && serValuesForms(valueForm4)

    }, [newValue, labelTarget, setLabelTarget, formsTitlesTarget, /* Campos form1 (Question's Form) */ setNewTitleQuestions, setNewQuestionQuestions, setNewAnswerQuestions, setNewSourceImageQuestions, setNewDescriptionQuestions, setNewQuestionsNumberQuestions, valueForm1, /* Campos form2 (Option's Form) */ setNewOption1Question, setNewOption2Question, setNewOption3Question, setNewOption4Question, setNewOption5Question, setNewOptionsNumberQuestions, valueForm2, /* Campos form3 (MultiQuestion's Form) */ setNewTitleMultiQuestions, setNewQuestionMultiQuestions, setNewAnswerMultiQuestions, setNewAnswerTextMultiQuestions, setNewSourceImageMultiQuestions, setNewDescriptionMultiQuestions, setNewQuestionsNumberMultiQuestions, valueForm3, /* Campos form4 (MultiOption's Form) */ setNewOption1MultiQuestion, setNewOption2MultiQuestion, setNewOption3MultiQuestion, setNewOption4MultiQuestion, setNewOption5MultiQuestion, setNewOptionsNumberMultiQuestions, valueForm4 ])

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
