import styles from './FieldQuestionOption.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function FieldQuestionOption({ 
    nameText, specificStylesLabel, readyToCleanAll, readyToSendForm1, setReadyToSendForm1, readyToSendForm2, setReadyToSendForm2,
    readyToSendForm3, setReadyToSendForm3, readyToSendForm4, setReadyToSendForm4, readyToSendForm5, setReadyToSendForm5, 
    readyToSendForm6, setReadyToSendForm6, setValueForm1, setValueForm2, setValueForm3, setValueForm4, setValueForm5, setValueForm6
}) {

    const uniqueId = uuidv4() // id única para somente para os campos    
    const [newValue, setNewValue] = useState("") // valor capturado do textarea    
    const [formsTitlesTarget, setFormsTitlesTarget] = useState("") // valores dos títulos dos 4 forms

    function newValueFunc(e) {
        // capturar o texto do título do form alvo ao mudar os valores dos campos
        setFormsTitlesTarget(e?.target.parentElement.parentElement.parentElement.children[0].textContent)

        setNewValue(e?.target.value)

    } 

    //atualizando os valores e certificando que todos estão capturados antes de salvar os dados dos forms
    useEffect(() => { 
        if (formsTitlesTarget  === "MainQuestions:") { // forms 1
            nameText === "Question:*" && setValueForm1(newValue) // setNewQuestionTextMain

            nameText === "Image Question:" && setValueForm1(newValue) // setNewImageQuestionMain
            
            nameText === "Answer:*" && setValueForm1(newValue) // setNewCorrectAnswerMain

            nameText === "Icon Description:" && setValueForm1(newValue) // setNewIconDescriptionMain

            nameText === "Description:*" && setValueForm1(newValue) // setNewDescriptionMain

            nameText === "Image Description:" && setValueForm1(newValue) // setNewImageDescriptionMain

            // nameText === "Number:*" && setValueForm1(newValue) // setNewQuestionNumberMain
            
        }  else if (formsTitlesTarget === "MainOptions:") { // form 2
            nameText === "Option A:*" && setValueForm2(newValue) // setNewOptionAMain

            nameText === "Option B:*" && setValueForm2(newValue) // setNewOptionBMain

            nameText === "Option C:*" && setValueForm2(newValue) // setNewOptionCMain                

            nameText === "Option D:*" && setValueForm2(newValue) // setNewOptionDMain

            nameText === "Option E:" && setValueForm2(newValue) // setNewOptionEMain

            nameText === "Number:*" && setValueForm2(newValue) // setNewOptionNumberMain
        
        } else if (formsTitlesTarget === "MultiQuestions:") { // form 3
            nameText === "Question:*" && setValueForm3(newValue) // setNewQuestionTextMulti

            nameText === "Image Question:" && setValueForm3(newValue) // setNewImageQuestionMulti

            nameText === "Answer:*" && setValueForm3(newValue) // setNewCorrectAnswerMulti

            nameText === "Icon Description:" && setValueForm3(newValue) // setNewIconDescriptionMulti

            nameText === "Description:*" && setValueForm3(newValue) // setNewDescriptionMulti

            nameText === "Image Description:" && setValueForm3(newValue) // setNewImageDescriptionMulti
            
            // nameText === "Number:*" && setValueForm3(newValue) // setNewQuestionNumberMulti
    
        } else if (formsTitlesTarget === "MultiOptions:") { // form 4
            nameText === "Option A:*" && setValueForm4(newValue) // setNewOptionAMulti
    
            nameText === "Option B:*" && setValueForm4(newValue) // setNewOptionBMulti
            
            nameText === "Option C:*" && setValueForm4(newValue) // setNewOptionCMulti
            
            nameText === "Option D:*" && setValueForm4(newValue) // setNewOptionDMulti
            
            nameText === "Option E:" && setValueForm4(newValue) // setNewOptionEMulti
            
            nameText === "Number:*" && setValueForm4(newValue) // setNewOptionNumberMulti

        } else if (formsTitlesTarget === "ThreeMultiQuestions:") { // form 5
            nameText === "Question:*" && setValueForm5(newValue) // setNewQuestionTextThreeMulti

            nameText === "Image Question:" && setValueForm5(newValue) // setNewImageQuestionThreeMulti

            nameText === "Answer:*" && setValueForm5(newValue) // setNewCorrectAnswerThreeMulti

            nameText === "Icon Description:" && setValueForm5(newValue) // setNewIconDescriptionThreeMulti

            nameText === "Description:*" && setValueForm5(newValue) // setNewDescriptionThreeMulti

            nameText === "Image Description:" && setValueForm5(newValue) // setNewImageDescriptionThreeMulti
            
            // nameText === "Number:*" && setValueForm5(newValue) // setNewQuestionNumberThreeMulti
    
        } else if (formsTitlesTarget === "ThreeMultiOptions:") { // form 6
            nameText === "Option A:*" && setValueForm6(newValue) // setNewOptionAThreeMulti
    
            nameText === "Option B:*" && setValueForm6(newValue) // setNewOptionBThreeMulti
            
            nameText === "Option C:*" && setValueForm6(newValue) // setNewOptionCThreeMulti
            
            nameText === "Option D:*" && setValueForm6(newValue) // setNewOptionDThreeMulti
            
            nameText === "Option E:*" && setValueForm6(newValue) // setNewOptionEThreeMulti

            nameText === "Option F:*" && setValueForm6(newValue) // setNewOptionFThreeMulti
            
            nameText === "Number:*" && setValueForm6(newValue) // setNewOptionNumberThreeMulti

        }

        if (readyToSendForm1 || readyToSendForm2 || readyToSendForm3 || readyToSendForm4 || readyToSendForm5 || readyToSendForm6) { // apaga os valores dos campos ao salvar
            setNewValue('')

            // retornando as variáveis 'readyToSendForm' ao estado inicial para não resetar os campos novamente
            setReadyToSendForm1 && setReadyToSendForm1(false)
            setReadyToSendForm2 && setReadyToSendForm2(false)
            setReadyToSendForm3 && setReadyToSendForm3(false)
            setReadyToSendForm4 && setReadyToSendForm4(false)
            setReadyToSendForm5 && setReadyToSendForm5(false)
            setReadyToSendForm6 && setReadyToSendForm6(false)
            
        }

    }, [formsTitlesTarget, nameText, readyToCleanAll, newValue, setValueForm1, setValueForm2, setValueForm3, setValueForm4, setValueForm5, setValueForm6, 
        readyToSendForm1, setReadyToSendForm1, readyToSendForm2, setReadyToSendForm2, readyToSendForm3, setReadyToSendForm3, readyToSendForm4, setReadyToSendForm4, 
        readyToSendForm5, setReadyToSendForm5, readyToSendForm6, setReadyToSendForm6])

    return(
        <div className={styles.field}>
            <div
                className={`labelTextarea ${styles.containerField}`}

            >
                <label
                    className={specificStylesLabel}
                    htmlFor={uniqueId}
                >
                    {nameText}
                </label>
                
                {(nameText === "Number:*") ? // aparecer o campo do tipo input se for números
                    <input 
                        value={newValue}
                        onChange={(e) => newValueFunc(e)}
                        type='number'
                        id={uniqueId}
                    />
                    :
                    // aparecer o campo do tipo textarea se for string
                    <textarea 
                        value={newValue}
                        onChange={(e) => newValueFunc(e)}
                        id={uniqueId}
                    />
                }

            </div>

        </div>

    )
}

export default FieldQuestionOption;
