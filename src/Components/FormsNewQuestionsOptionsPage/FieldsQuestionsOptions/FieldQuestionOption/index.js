import { useEffect, useState } from 'react'
import styles from './FieldQuestionOption.module.css'
import DetailsFieldsForms from '../../../DetailsFieldsForms'
import { v4 as uuidv4 } from 'uuid'

function FieldQuestionOption({ 
    nome, optionClass, labelTarget, setLabelTarget, readyToCleanAll, setReadyToCleanAll, readyToSendForm1, 
    readyToSendForm2, readyToSendForm3, readyToSendForm4, valueForm1, setValueForm1, valueForm2, setValueForm2, 
    valueForm3, setValueForm3, valueForm4, setValueForm4

}) {

    // id única para somente para os campos
    const uniqueId = uuidv4();

    // valor capturado do textarea
    const [newValue, setNewValue] = useState("")

    // valores dos títulos dos 4 forms
    const [formsTitlesTarget, setFormsTitlesTarget] = useState("")

    // valores dos campos do textrea
    const [valuesForms, setValuesForms] = useState("")

    // valores para aparecer as descrições dos campos
    const [detailsFields] = useState(styles.invisible)

    //variáveis para mostrar os detalhes dos campos
    const [textDetail] = useState("")

    function newValueFunc(e) {

        // capturar o texto da label do form alvo ao mudar os valores dos campos
        setLabelTarget(e.target.parentElement.children[0].textContent)

        // capturar o texto do título do form alvo ao mudar os valores dos campos
        setFormsTitlesTarget(e.target.parentElement.parentElement.parentElement.children[0].textContent)

        setNewValue(e.target.value)

    } 

    //atualizando os valores e certificando que todos estão capturados antes de salvar os dados dos forms
    useEffect(() => {   
        if (formsTitlesTarget  === "Form 1 (Questions)") { // form 1

            setValuesForms(valueForm1)

            if (readyToCleanAll === false) {
                labelTarget === "Question:*" && setValueForm1(newValue) // setValueForm1 é uma props que, neste caso, corresponde a variável de estado 'setNewQuestionQuestions'
            
                labelTarget === "Answer:*" && setValueForm1(newValue) // setValueForm1 é uma props que, neste caso, corresponde a variável de estado 'setNewAnswerQuestions'

                labelTarget === "Source Image:" && setValueForm1(newValue) // setValueForm1 é uma props que, neste caso, corresponde a variável de estado 'setNewSourceImageQuestions'

                labelTarget === "Description:*" && setValueForm1(newValue) // setValueForm1 é uma props que, neste caso, corresponde a variável de estado 'setNewDescriptionQuestions'

                labelTarget === "Number:*" && setValueForm1(newValue) // setValueForm1 é uma props que, neste caso, corresponde a variável de estado 'setNewQuestionsNumberQuestions'
            
            } else if (readyToCleanAll === true) {
                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 2 (Options)") { // form 2

            setValuesForms(valueForm2)

            if (readyToCleanAll === false) {
                labelTarget === "Option 1:*" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOption1Question'

                labelTarget === "Option 2:*" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOption2Question'

                labelTarget === "Option 3:*" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOption3Question'                

                labelTarget === "Option 4:*" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOption4Question'

                labelTarget === "Option 5:" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOption5Question'

                labelTarget === "Number:*" && setValueForm2(newValue) // setValueForm2 é uma props que, neste caso, corresponde a variável de estado 'setNewOptionsNumberQuestions'

            } else if (readyToCleanAll === true) {
                //zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 3 (MultiQuestions)") { // form 3

            setValuesForms(valueForm3)

            if (readyToCleanAll === false) {
                labelTarget === "Question:*" && setValueForm3(newValue) // setValueForm3 é uma props que, neste caso, corresponde a variável de estado 'setNewQuestionMultiQuestions'

                labelTarget === "Answer's Text:*" && setValueForm3(newValue) // setValueForm3 é uma props que, neste caso, corresponde a variável de estado 'setNewAnswerTextMultiQuestions'

                labelTarget === "Source Image:" && setValueForm3(newValue) // setValueForm3 é uma props que, neste caso, corresponde a variável de estado 'setNewSourceImageMultiQuestions'

                labelTarget === "Description:*" && setValueForm3(newValue) // setValueForm3 é uma props que, neste caso, corresponde a variável de estado 'setNewDescriptionMultiQuestions'
                
                labelTarget === "Number:*" && setValueForm3(newValue) // setValueForm3 é uma props que, neste caso, corresponde a variável de estado 'setNewQuestionsNumberMultiQuestions'

            } else if (readyToCleanAll === true) {
                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 4 (MultiOptions)") { // form 4

            setValuesForms(valueForm4)  

            if (readyToCleanAll === false) {
                labelTarget === "Option 1:*" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOption1MultiQuestion'
        
                labelTarget === "Option 2:*" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOption2MultiQuestion'
                
                labelTarget === "Option 3:*" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOption3MultiQuestion'
                
                labelTarget === "Option 4:*" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOption4MultiQuestion'
                
                labelTarget === "Option 5:" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOption5MultiQuestion'
                
                labelTarget === "Number:*" && setValueForm4(newValue) // setValueForm4 é uma props que, neste caso, corresponde a variável de estado 'setNewOptionsNumberMultiQuestions'

            } else if (readyToCleanAll === true) {
                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        }
 
    }, [formsTitlesTarget, labelTarget, readyToCleanAll, setReadyToCleanAll, newValue, valueForm1, setValueForm1, valueForm2, setValueForm2, valueForm3, setValueForm3, valueForm4, setValueForm4, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4])

    return(
        <div className={styles.field}>
            <div
                className={`labelTextarea ${styles.labelTextarea}`}

            >
                <label
                    // classe optionClass somente estiliza os forms 2 e 4
                    className={optionClass}
                    htmlFor={uniqueId}

                >
                    {nome}
                </label>
                {/* aparecer o campo do tipo textarea se for textos e números */}
                {(nome !== "Number:*") &&
                    <textarea 
                        onChange={(e) => newValueFunc(e)}
                        value={valuesForms}
                        id={uniqueId}
                        
                    />
                }
                {/* aparecer o campo do tipo input se for somente numérico */}
                {(nome === "Number:*") && 
                    <input 
                        onChange={(e) => newValueFunc(e)}
                        value={valuesForms}
                        type='number'
                        id={uniqueId}
                        
                    />
                }
                <DetailsFieldsForms 
                    detailsFields={detailsFields}
                    textDetail={textDetail}
                />
            </div>
        </div>

    )
}

export default FieldQuestionOption
