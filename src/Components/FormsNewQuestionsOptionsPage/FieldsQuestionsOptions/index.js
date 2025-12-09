import styles from './FieldsQuestionsOptions.module.css'
import FieldQuestionOption from './FieldQuestionOption'

function FieldsQuestionsOptions({ 
    nome1, nome2, nome3, nome4, nome5, nome6, optionClass, labelTarget, setLabelTarget, readyToCleanAll, setReadyToCleanAll, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4,
    /* campos form1 */ newQuestionQuestions, setNewQuestionQuestions, newAnswerQuestions, setNewAnswerQuestions, newSourceImageQuestions, setNewSourceImageQuestions, newDescriptionQuestions, setNewDescriptionQuestions, newQuestionsNumberQuestions, setNewQuestionsNumberQuestions, 
    /* campos form2 */ newOption1Question, setNewOption1Question, newOption2Question, setNewOption2Question, newOption3Question, setNewOption3Question, newOption4Question, setNewOption4Question, newOption5Question, setNewOption5Question, newOptionsNumberQuestions, setNewOptionsNumberQuestions, 
    /* campos form3 */ newQuestionMultiQuestions, setNewQuestionMultiQuestions, newAnswerTextMultiQuestions, setNewAnswerTextMultiQuestions, newSourceImageMultiQuestions, setNewSourceImageMultiQuestions, newDescriptionMultiQuestions, setNewDescriptionMultiQuestions, newQuestionsNumberMultiQuestions, setNewQuestionsNumberMultiQuestions,
    /* campos form4 */ newOption1MultiQuestion, setNewOption1MultiQuestion, newOption2MultiQuestion, setNewOption2MultiQuestion, newOption3MultiQuestion, setNewOption3MultiQuestion, newOption4MultiQuestion, setNewOption4MultiQuestion, newOption5MultiQuestion, setNewOption5MultiQuestion, newOptionsNumberMultiQuestions, setNewOptionsNumberMultiQuestions
    
}) {

    return(
        <>
            {/* campo 1, obrigatório (nome1) */}
            {<FieldQuestionOption
                nome={nome1}
                optionClass={optionClass}
                className={styles.fieldQuestionOption}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 1 (4 forms)
                // campo 1 do form 1
                valueForm1={newQuestionQuestions}
                setValueForm1={setNewQuestionQuestions}

                //campo 1 do form 2
                valueForm2={newOption1Question}
                setValueForm2={setNewOption1Question}

                //campo 1 do form 3
                valueForm3={newQuestionMultiQuestions}
                setValueForm3={setNewQuestionMultiQuestions}

                //campo 1 do form 4
                valueForm4={newOption1MultiQuestion}
                setValueForm4={setNewOption1MultiQuestion}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}

            />}

            {/* campo 2, obrigatório (nome2) */}
            {<FieldQuestionOption
                nome={nome2} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 2 (4 forms)
                // campo 2 do form 1
                valueForm1={newAnswerQuestions}
                setValueForm1={setNewAnswerQuestions}

                // campo 2 do form 2
                valueForm2={newOption2Question}
                setValueForm2={setNewOption2Question}

                // campo 2 do form 3
                valueForm3={newAnswerTextMultiQuestions}
                setValueForm3={setNewAnswerTextMultiQuestions}

                // campo 2 do form 4
                valueForm4={newOption2MultiQuestion}
                setValueForm4={setNewOption2MultiQuestion}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}

            />}

            {/* campo 3, obrigatório (nome3) */}
            {nome3 && <FieldQuestionOption
                nome={nome3} 
                optionClass={optionClass}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 3 (4 forms)
                // campo 3 do form 1
                valueForm1={newSourceImageQuestions}
                setValueForm1={setNewSourceImageQuestions}

                // campo 3 do form 2
                valueForm2={newOption3Question}
                setValueForm2={setNewOption3Question} 
                
                // campo 3 do form 3
                valueForm3={newSourceImageMultiQuestions}
                setValueForm3={setNewSourceImageMultiQuestions}

                // campo 3 do form 4
                valueForm4={newOption3MultiQuestion}
                setValueForm4={setNewOption3MultiQuestion}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}

            {/* campo 4, obrigatório (nome4) */}
            {nome4 && <FieldQuestionOption
                nome={nome4} 
                optionClass={optionClass} 

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 4 (4 forms)
                // campo 4 do form 1
                valueForm1={newDescriptionQuestions}
                setValueForm1={setNewDescriptionQuestions}

                // campo 4 do form 2
                valueForm2={newOption4Question}
                setValueForm2={setNewOption4Question} 
                
                // campo 4 do form 3
                valueForm3={newDescriptionMultiQuestions}
                setValueForm3={setNewDescriptionMultiQuestions}

                // campo 4 do form 4
                valueForm4={newOption4MultiQuestion}
                setValueForm4={setNewOption4MultiQuestion}                
                
                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}  
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            
            />}

            {/* campo 5, só vai existir se for dado algum nome para a label (nome5) */}
            {nome5 && <FieldQuestionOption
                nome={nome5} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 5 (4 forms)
                // campo 5 do form 1
                valueForm1={newQuestionsNumberQuestions}
                setValueForm1={setNewQuestionsNumberQuestions}
                
                // campo 5 do form 2
                valueForm2={newOption5Question}
                setValueForm2={setNewOption5Question} 
                
                // campo 5 do form 3
                valueForm3={newQuestionsNumberMultiQuestions}
                setValueForm3={setNewQuestionsNumberMultiQuestions}               

                // campo 5 do form 4
                valueForm4={newOption5MultiQuestion}
                setValueForm4={setNewOption5MultiQuestion}                
                
                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}

            {/* campo 6, obrigatório (nome6) */}
            {nome6 && <FieldQuestionOption
                nome={nome6} 
                optionClass={optionClass} 
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 2 possíveis elementos do campo 6 (2 forms)             
                // campo 6 do form 2
                valueForm2={newOptionsNumberQuestions}
                setValueForm2={setNewOptionsNumberQuestions}

                // campo 6 do form 4
                valueForm4={newOptionsNumberMultiQuestions}
                setValueForm4={setNewOptionsNumberMultiQuestions}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}
                   
        </>
    )

}

export default FieldsQuestionsOptions
