import styles from './CamposQuestionsOptions.module.css'
import CampoQuestionOption from './CampoQuestionOption'

function CampoQuestionsOptions({ 
    nome1, nome2, nome3, nome4, nome5, nome6, nome7, optionClass, labelTarget, setLabelTarget, 
    /* Campos form1 (Question's Form) */ newTitleQuestions, setNewTitleQuestions, newQuestionQuestions, setNewQuestionQuestions, newAnswerQuestions, setNewAnswerQuestions, newSourceImageQuestions, setNewSourceImageQuestions, newDescriptionQuestions, setNewDescriptionQuestions, newQuestionsNumberQuestions, setNewQuestionsNumberQuestions, 
    /* Campos form2 (Option's Form) */ newOption1Question, setNewOption1Question, newOption2Question, setNewOption2Question, newOption3Question, setNewOption3Question, newOption4Question, setNewOption4Question, newOption5Question, setNewOption5Question, newOptionsNumberQuestions, setNewOptionsNumberQuestions, 
    /* Campos form3 (MultiQuestion's Form) */ newTitleMultiQuestions, setNewTitleMultiQuestions, newQuestionMultiQuestions, setNewQuestionMultiQuestions, newAnswerMultiQuestions, setNewAnswerMultiQuestions, newAnswerTextMultiQuestions, setNewAnswerTextMultiQuestions, newSourceImageMultiQuestions, setNewSourceImageMultiQuestions, newDescriptionMultiQuestions, setNewDescriptionMultiQuestions, newQuestionsNumberMultiQuestions, setNewQuestionsNumberMultiQuestions,
    /* Campos form4 (MultiOption's Form) */ newOption1MultiQuestion, setNewOption1MultiQuestion, newOption2MultiQuestion, setNewOption2MultiQuestion, newOption3MultiQuestion, setNewOption3MultiQuestion, newOption4MultiQuestion, setNewOption4MultiQuestion, newOption5MultiQuestion, setNewOption5MultiQuestion, newOptionsNumberMultiQuestions, setNewOptionsNumberMultiQuestions   
}) {

    return(
        <>
            {/* campo 1 */}
            <CampoQuestionOption
                nome={nome1} 
                optionClass={optionClass}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 1 (4 forms)
                // campo 1 do form 1
                valueForm1={newTitleQuestions}
                setNewTitleQuestions={setNewTitleQuestions}

                //campo 1 do form 2
                valueForm2={newOption1Question}
                setNewOption1Question={setNewOption1Question}

                //campo 1 do form 3
                valueForm3={newTitleMultiQuestions}
                setNewTitleMultiQuestions={setNewTitleMultiQuestions}

                //campo 1 do form 4
                valueForm4={newOption1MultiQuestion}
                setNewOption1MultiQuestion={setNewOption1MultiQuestion}

            />

            {/* campo 2 */}
            <CampoQuestionOption
                nome={nome2} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}
                
                // 4 possíveis elementos do campo 2 (4 forms)
                // campo 2 do form 1
                valueForm1={newQuestionQuestions}
                setNewQuestionQuestions={setNewQuestionQuestions}

                // campo 2 do form 2
                valueForm2={newOption2Question}
                setNewOption2Question={setNewOption2Question}

                // campo 2 do form 3
                valueForm3={newQuestionMultiQuestions}
                setNewQuestionMultiQuestions={setNewQuestionMultiQuestions}

                // campo 2 do form 4
                valueForm4={newOption2MultiQuestion}
                setNewOption2MultiQuestion={setNewOption2MultiQuestion}

            />

            {/* campo 3 */}
            <CampoQuestionOption
                nome={nome3} 
                optionClass={optionClass}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 3 (4 forms)
                // campo 3 do form 1
                valueForm1={newAnswerQuestions}
                setNewAnswerQuestions={setNewAnswerQuestions}

                // campo 3 do form 2
                valueForm2={newOption3Question}
                setNewOption3Question={setNewOption3Question} 
                
                // campo 3 do form 3
                valueForm3={newAnswerMultiQuestions}
                setNewAnswerMultiQuestions={setNewAnswerMultiQuestions}

                // campo 3 do form 4
                valueForm4={newOption3MultiQuestion}
                setNewOption3MultiQuestion={setNewOption3MultiQuestion}
                
            />

            {/* campo 4 */}
            <CampoQuestionOption
                nome={nome4} 
                optionClass={optionClass} 

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 4 (4 forms)
                // campo 4 do form 1
                valueForm1={newSourceImageQuestions}
                setNewSourceImageQuestions={setNewSourceImageQuestions}

                // campo 4 do form 2
                valueForm2={newOption4Question}
                setNewOption4Question={setNewOption4Question} 
                
                // campo 4 do form 3
                valueForm3={newAnswerTextMultiQuestions}
                setNewAnswerTextMultiQuestions={setNewAnswerTextMultiQuestions}

                // campo 4 do form 4
                valueForm4={newOption4MultiQuestion}
                setNewOption4MultiQuestion={setNewOption4MultiQuestion} 
            
            />

            <CampoQuestionOption
                nome={nome5} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 5
                // campo 5 do form 1
                valueForm1={newDescriptionQuestions}
                setNewDescriptionQuestions={setNewDescriptionQuestions}

                // campo 5 do form 2
                valueForm2={newOption5Question}
                setNewOption5Question={setNewOption5Question} 
                
                // campo 5 do form 3
                valueForm3={newSourceImageMultiQuestions}
                setNewSourceImageMultiQuestions={setNewSourceImageMultiQuestions}                

                // campo 5 do form 4
                valueForm4={newOption5MultiQuestion}
                setNewOption5MultiQuestion={setNewOption5MultiQuestion} 
                
            />

            <CampoQuestionOption
                nome={nome6} 
                optionClass={optionClass} 
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 6
                // campo 6 do form 1
                valueForm1={newQuestionsNumberQuestions}
                setNewQuestionsNumberQuestions={setNewQuestionsNumberQuestions}

                // campo 6 do form 2
                valueForm2={newOptionsNumberQuestions}
                setNewOptionsNumberQuestions={setNewOptionsNumberQuestions}
                
                // campo 6 do form 3
                valueForm3={newDescriptionMultiQuestions}
                setNewDescriptionMultiQuestions={setNewDescriptionMultiQuestions}

                // campo 6 do form 4
                valueForm4={newOptionsNumberMultiQuestions}
                setNewOptionsNumberMultiQuestions={setNewOptionsNumberMultiQuestions}
                
            />

            {/* Só irá aparecer o campo 7 se tiver atribuído um valor ao label 7 (nome7) */}
            {nome7 && <CampoQuestionOption
                nome={nome7} 
                optionClass={optionClass} 

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // campo 7 do form 3
                valueForm3={newQuestionsNumberMultiQuestions}
                setNewQuestionsNumberMultiQuestions={setNewQuestionsNumberMultiQuestions}
            
            />}        
        </>
    )

}

export default CampoQuestionsOptions
